// `icon` est un slug de src/components/TechIcon/icons.js ; `label` ne sert que
// quand le nom affiché diffère de celui du logo (Sass → SCSS).
export const SKILL_GROUPS = [
  {
    title: 'Front-end',
    skills: [
      { icon: 'html5' },
      { icon: 'css' },
      { icon: 'javascript' },
      { icon: 'typescript' },
      { icon: 'react' },
      { icon: 'nextdotjs' },
      { icon: 'sass', label: 'SCSS' },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { icon: 'nodedotjs' },
      { icon: 'supabase' },
      { icon: 'mongodb' },
      { icon: 'mysql' },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { icon: 'git', label: 'Git' },
      { icon: 'github', label: 'GitHub' },
      { icon: 'figma' },
      { icon: 'vercel' },
    ],
  },
]

// La page À propos affiche ce total : on le dérive de la liste pour qu'il ne
// puisse pas mentir après l'ajout d'une techno.
export const SKILL_COUNT = SKILL_GROUPS.reduce(
  (total, group) => total + group.skills.length,
  0,
)
