// GitHub Pages ignore les routes React : sans ce fichier, /realisation renvoie une 404.
const fs = require('fs')
const path = require('path')

const build = path.join(__dirname, '..', 'build')
fs.copyFileSync(path.join(build, 'index.html'), path.join(build, '404.html'))
console.log('404.html généré à partir de index.html')
