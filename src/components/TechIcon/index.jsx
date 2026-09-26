import ICONS from './icons';
import './style.scss';

// Nom officiel de la techno, pour ne pas le réécrire à côté de chaque logo.
export function techTitle(name) {
  return ICONS[name]?.title ?? name;
}

// Les logos sont décoratifs : le nom de la techno est toujours écrit en clair
// juste à côté, dans le badge. On les masque donc aux lecteurs d'écran plutôt
// que de faire répéter « React React ».
export function TechIcon({ name, className = '' }) {
  const icon = ICONS[name];

  if (!icon) {
    // Un slug mal orthographié ne doit pas casser la page : on ne rend rien
    // plutôt qu'un carré vide.
    return null;
  }

  return (
    <svg
      className={`tech-icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ '--tech-icon-color': icon.hex }}
    >
      <path d={icon.path} />
    </svg>
  );
}

export default TechIcon;
