import '@testing-library/jest-dom'

// jsdom n'implémente pas le défilement : sans ce stub, useScrollToTop fait
// tomber une erreur « Not implemented » dans la sortie des tests.
window.scrollTo = () => {}
