import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

// On n'embarque que le cœur de highlight.js et les trois langages des
// extraits, plutôt que le paquet complet et ses ~190 langages.
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

// hljs échappe le code avant d'y insérer ses <span> : le HTML produit peut
// être injecté sans risque.
const highlight = ({ code, language }) => hljs.highlight(code, { language }).value

export default highlight
