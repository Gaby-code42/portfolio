import '@testing-library/jest-dom'

// jsdom n'implémente pas le défilement : sans ce stub, useScrollToTop fait
// tomber une erreur « Not implemented » dans la sortie des tests.
window.scrollTo = () => {}

// jsdom 16 ne connaît pas <dialog> : on se contente de refléter l'attribut
// `open`, ce qui suffit à tester l'ouverture et la fermeture.
if (!HTMLElement.prototype.showModal) {
  HTMLElement.prototype.showModal = function () { this.setAttribute('open', '') }
  HTMLElement.prototype.close = function () { this.removeAttribute('open') }
}
