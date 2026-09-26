# Portfolio — Raphaël Bonacina

[![CI](https://github.com/Gaby-code42/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Gaby-code42/portfolio/actions/workflows/ci.yml)

Portfolio personnel de Raphaël Bonacina, développeur web full-stack React / Next.js.
L'interface reprend les codes du jeu vidéo : thème terminal / cyber, et un
système de progression qui se remplit à mesure que le visiteur explore le site.

**🔗 [Voir le site en ligne](https://gaby-code42.github.io/portfolio/)**

![Aperçu du portfolio](public/og-image.jpg)

## Le concept

Chaque page visitée fait progresser une barre de « scan » affichée en haut de
l'écran. Une fois toutes les pages parcourues, une modale « MISSION COMPLETE »
apparaît et propose le CV en téléchargement. L'idée : transformer la visite
d'un portfolio — un exercice généralement passif — en quelque chose qu'on a
envie de terminer.

La logique vit dans un contexte React (`src/components/Provider`) qui écoute la
navigation et, pour les pages qui l'exigent, le pourcentage de scroll.

## Stack

| | |
|---|---|
| Framework | React 18 |
| Routing | React Router 6 |
| Styles | SCSS (7-1 allégé, un fichier par composant) |
| Animations | Framer Motion |
| Icônes | Font Awesome + logos Simple Icons (tracés générés dans le dépôt) |
| Méta / SEO | react-helmet-async |
| Build | Create React App |
| Hébergement | GitHub Pages |

## Installation

```bash
git clone https://github.com/Gaby-code42/portfolio.git
cd portfolio
npm install
npm start
```

Le site est alors disponible sur http://localhost:3000.

## Scripts

| Commande | Effet |
|---|---|
| `npm start` | Serveur de développement |
| `npm run build` | Build de production dans `build/` |
| `npm test` | Lance les tests |
| `npm run deploy` | Build, génère le `404.html` puis publie sur GitHub Pages (manuel) |

> `npm run deploy` déclenche automatiquement `predeploy`, qui copie
> `index.html` en `404.html`. GitHub Pages ne connaît pas les routes côté
> client : sans ce fichier, un accès direct à `/realisation` renverrait une 404.
>
> Limite assumée : ces pages sont bien affichées, mais avec un statut HTTP 404.
> C'est pourquoi `public/sitemap.xml` ne déclare que la racine. Un hébergeur
> gérant les réécritures (Vercel, Netlify) lèverait cette limite.

## Performance

Les fonds de page étaient des SVG exportés d'Illustrator qui embarquaient un
PNG de 4022 px en base64 : ~930 Ko chacun, soit plus que tout le JavaScript.
Ils sont désormais rastérisés en WebP 1920 px (~25 Ko), sans perte visible.

## Structure

```
src/
├── assets/          # Logo, fonds, CV
├── components/      # Composants réutilisables (un dossier = un composant + son SCSS)
│   ├── CongratPopUP/   # Modale de fin d'exploration
│   ├── Footer/
│   ├── Header/
│   ├── MenuBurger/     # Menu mobile façon terminal
│   ├── ProgressBar/    # Barre de progression « scan »
│   ├── Provider/       # Contexte de progression
│   ├── SocialLinks/
│   └── TechIcon/       # Logos de technos (icons.js généré, cf. plus bas)
├── data/            # index.json (projets) et skills.js (compétences)
├── hooks/           # useBodyClass — fond de page selon la route
├── pages/           # Home, Realisation, Services, About
└── styleGlobal/     # Styles globaux et utilitaires
```

## Ajouter un projet

Tout se passe dans `src/data/index.json` :

```json
{
  "id": 6,
  "title": "Nom du projet",
  "icon": "react",
  "cover": "nom-du-projet.webp",
  "kind": "Projet de formation",
  "shortdescription": "Une phrase qui décrit le projet.",
  "tags": ["React", "SCSS"],
  "github": "https://github.com/…",
  "demo": "https://…"
}
```

| Champ | Rôle |
|---|---|
| `icon` | Slug d'un logo de `src/components/TechIcon/icons.js` (`react`, `nextdotjs`, `nodedotjs`, `html5`…) |
| `cover` | Nom d'un fichier de `public/projects/`, ou `null` |
| `kind` | Étiquette affichée au-dessus du titre (« Site client en production », « Projet de formation »…) |
| `featured` | `true` sur **un seul** projet : il passe en grand, en haut de la page, avec son récit |
| `story` | Uniquement pour le projet mis en avant : liste de `{ label, text }` (le besoin → ce que j'ai fait → le résultat) |
| `github` / `demo` | `null` masque simplement le lien — pas de bouton grisé |

### Les captures d'écran

Pour un portfolio de développeur web, la capture est l'argument principal : sans
elle, le visiteur ne voit jamais à quoi ressemblent les sites.

1. Déposer l'image dans `public/projects/`.
2. Renseigner son nom de fichier dans `cover`.

Format conseillé : WebP, ratio 16/10, 1200 px de large environ. Les cartes
cadrent en haut de l'image (`object-position: top`), donc une capture du haut de
page fonctionne mieux qu'une page entière réduite.

Sans `cover`, la carte retombe sur un panneau au logo de la techno — jamais sur
une image cassée.

## Les logos de technos

`src/components/TechIcon/icons.js` est **généré** : il contient les tracés SVG de
[Simple Icons](https://simpleicons.org) (CC0), recopiés dans le dépôt pour
éviter une dépendance à l'exécution et un appel réseau au chargement.

Pour ajouter un logo, ajouter son slug dans `SLUGS` (`scripts/generate-tech-icons.js`) puis :

```bash
npm install --no-save simple-icons@16
node scripts/generate-tech-icons.js
```

## Licence

Code sous licence MIT. Les contenus personnels (photo, CV, textes) restent la
propriété de leur auteur.
