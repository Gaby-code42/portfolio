// Extraits tirés des dépôts GitHub de chaque projet. La logique est celle
// d'origine : on a seulement retiré les `console.log` de debug, uniformisé
// l'indentation et marqué les passages coupés par « … ».
// Clé = id du projet dans data/index.json.
//
// `language` doit correspondre à un langage enregistré dans
// components/CodePreview (javascript, xml pour le HTML, css).

const codeSnippets = {
  2: {
    file: 'controllers/books.js',
    language: 'javascript',
    note: "Notation d'un livre : la note est validée, un utilisateur qui revote remplace sa note au lieu d'en ajouter une, puis la moyenne est recalculée.",
    code: `exports.addRating = (req, res, next) => {
  const bookId = req.params.id
  const { userId, rating } = req.body

  if (typeof rating !== 'number' || isNaN(rating)) {
    return res.status(400).json({ message: 'Le rating doit être un nombre' })
  }
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "La note doit être comprise entre 1 et 5" })
  }

  Book.findById(bookId)
    .then(book => {
      if (!book) {
        return res.status(404).json({ message: 'Livre non trouvé' })
      }

      const existingRating = book.ratings.find(r => r.userId === userId)
      if (existingRating) {
        existingRating.grade = rating
      } else {
        book.ratings.push({ userId, grade: rating })
      }

      const totalGrade = book.ratings.reduce((sum, r) => sum + r.grade, 0)
      book.averageRating = totalGrade / book.ratings.length

      return book.save()
    })
    .then(book => res.status(200).json(book))
    .catch(error => res.status(500).json({ message: 'Erreur serveur', error }))
}`,
  },

  3: {
    file: 'src/components/Slider/index.jsx',
    language: 'javascript',
    note: "Carrousel des photos d'un logement : le modulo fait boucler la galerie dans les deux sens sans cas particulier pour la première ou la dernière image.",
    code: `const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const Next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const Previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="Carousel">
      <button onClick={Previous} className="Carousel__Button__Previous">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img
        src={images[currentIndex]}
        alt={\`Slide \${currentIndex}\`}
        className="Carousel__Image"
      />
      <button onClick={Next} className="Carousel__Button__Next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <span className="Carousel__indicatorImage">
        {currentIndex + 1}/{images.length}
      </span>
    </div>
  )
}`,
  },

  4: {
    file: 'FrontEnd/ajoutprojet.js',
    language: 'javascript',
    note: "Ajout d'un projet depuis l'espace d'édition : le bouton ne s'active qu'une fois le formulaire complet, puis l'image part en multipart avec le jeton d'authentification.",
    code: `function checkFormCompletion() {
  const submitButton = document.getElementById('form-validation')
  if (isImageValid && isCategoryValid && isTitleValid) {
    submitButton.disabled = false
    inputSubmit.style.backgroundColor = '#1D6154'
  } else {
    submitButton.disabled = true
  }
}

// …

async function submitForm() {
  const token = sessionStorage.getItem('authToken')
  const formData = new FormData()

  formData.append('title', inputTitle)
  formData.append('category', selectedCategory)
  formData.append('image', storedImage)

  const response = await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: { 'Authorization': \`Bearer \${token}\` },
    body: formData
  })
  await response.json()

  window.location.reload()
}`,
  },

  5: {
    file: 'index.html',
    language: 'xml',
    note: "Ce que l'audit a ajouté : balises de description et de partage social, puis des données structurées schema.org pour que Google comprenne qu'il s'agit d'un commerce local.",
    code: `<title>Nina Carducci photographe évênementiel</title>
<meta name="description" content="Nina Carducci, photographe professionnelle, propose des services à la carte …">

<!--facebook-->
<meta property="og:title" content="Nina Carducci">
<meta property="og:description" content="Nina Carducci, photographe professionnelle vous propose son portfolio et ses prestations.">
<meta property="og:image" content="./assets/images/nina.png">
<meta property="og:type" content="website">

<!-- … -->

<div id="contact" itemscope itemtype="https://schema.org/LocalBusiness">
  <!-- … -->
  <address itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">68 avenue Alsace-Lorraine</span><br>
    <span itemprop="postalCode">33200</span><br>
    <span itemprop="addressLocality">Bordeaux</span><br>
  </address>
  <meta itemprop="openingHours" content="Mo 10:00-19:00">
  <!-- … -->
</div>`,
  },

  6: {
    file: 'css/style.css',
    language: 'css',
    note: "Couleurs de la maquette centralisées en variables, puis la mise en page qui passe de deux colonnes à une seule sous 1024 px.",
    code: `:root {
  --main-color: #0065FC;
  --main-bg-color: #F2F2F2;
  --filter-bg-color: #DEEBFF;
}

/* … */

@media (max-width: 1024px) {
  .hebergements-and-populaires {
    flex-direction: column;
    gap: 50px;
  }

  .hebergements-cards a {
    width: calc(33% - 20px);
  }

  .populaires-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .populaires-cards a {
    width: 30%;
  }
}`,
  },
}

export default codeSnippets
