// Génère src/components/TechIcon/icons.js à partir de Simple Icons.
//
// Les chemins SVG sont recopiés une fois pour toutes dans le dépôt : pas de
// dépendance à l'exécution, pas d'appel réseau au chargement de la page, et les
// logos restent affichés même hors ligne. Simple Icons est publié en CC0.
//
// Pour régénérer (ajout d'une techno dans SLUGS ci-dessous) :
//   npm install --no-save simple-icons@16
//   node scripts/generate-tech-icons.js
//
// Les couleurs de marque sont celles de Simple Icons, sauf celles listées dans
// OVERRIDES : sur fond sombre, un logo noir (Next.js, Vercel) est invisible.

const fs = require('fs');
const path = require('path');

const SLUGS = [
  'html5',
  'css',
  'javascript',
  'typescript',
  'react',
  'nextdotjs',
  'sass',
  'nodedotjs',
  'supabase',
  'mongodb',
  'mysql',
  'figma',
  'git',
  'github',
  'vercel',
];

const OVERRIDES = {
  nextdotjs: '#ffffff',
  vercel: '#ffffff',
  github: '#ffffff',
};

// Le paquet livre les tracés dans des .svg et les métadonnées (titre, couleur
// de marque) dans un JSON à part : on croise les deux.
const PKG_DIR = path.join(__dirname, '..', 'node_modules', 'simple-icons');
const ICONS_DIR = path.join(PKG_DIR, 'icons');
// Chemin direct plutôt que `require('simple-icons/data/...')` : la carte
// `exports` du paquet n'expose pas ce sous-chemin sous ce nom.
const META = require(path.join(PKG_DIR, 'data', 'simple-icons.json'));
const metaBySlug = new Map(META.map((entry) => [entry.slug, entry]));

const icons = {};

for (const slug of SLUGS) {
  const meta = metaBySlug.get(slug);
  if (!meta) {
    throw new Error(`Slug inconnu de Simple Icons : ${slug}`);
  }

  const svg = fs.readFileSync(path.join(ICONS_DIR, `${slug}.svg`), 'utf8');
  const match = svg.match(/\sd="([^"]+)"/);
  if (!match) {
    throw new Error(`Aucun tracé trouvé dans le SVG de ${slug}`);
  }

  icons[slug] = {
    title: meta.title,
    hex: OVERRIDES[slug] || `#${meta.hex.toLowerCase()}`,
    path: match[1],
  };
}

const header = `// FICHIER GÉNÉRÉ — ne pas modifier à la main.
// Source : Simple Icons (CC0). Régénérer avec \`node scripts/generate-tech-icons.js\`.
// Voir scripts/generate-tech-icons.js pour la liste des logos et les couleurs
// forcées (les logos noirs seraient invisibles sur fond sombre).

`;

const body = `const ICONS = ${JSON.stringify(icons, null, 2)};

export default ICONS;
`;

const out = path.join(__dirname, '..', 'src', 'components', 'TechIcon', 'icons.js');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, header + body, 'utf8');

console.log(`${Object.keys(icons).length} logos écrits dans ${path.relative(process.cwd(), out)}`);
