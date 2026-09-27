import { render, screen, fireEvent, within, waitFor } from '@testing-library/react'
import Realisation from './index'
import Data from '../../data/index.json'
import codeSnippets from '../../data/codeSnippets'

test('tous les projets sont visibles sans interaction', () => {
  render(<Realisation />)

  // Le carrousel n'en montrait qu'un lisible à la fois : la grille doit tous
  // les afficher d'un coup.
  Data.forEach((projet) => {
    // Le titre revient aussi dans la fenêtre d'aperçu du code : on cible le
    // titre de la carte (h3) ou du projet mis en avant (h2).
    const niveau = projet.featured ? 2 : 3
    expect(
      screen.getByRole('heading', { name: projet.title, level: niveau })
    ).toBeInTheDocument()
  })
})

test('le projet mis en avant affiche son récit', () => {
  const vedette = Data.find((projet) => projet.featured)
  render(<Realisation />)

  vedette.story.forEach(({ label }) => {
    expect(screen.getByText(label)).toBeInTheDocument()
  })
})

test('un projet sans démo n\'affiche aucun lien de démo', () => {
  const sansDemo = Data.filter((projet) => projet.demo === null)
  render(<Realisation />)

  // Un bouton grisé « Pas de démo » sur presque chaque carte faisait passer
  // les projets pour inachevés : on n'affiche plus que les liens qui existent.
  const liens = screen.getAllByRole('link')
  sansDemo.forEach((projet) => {
    expect(liens.some((lien) => lien.href === projet.demo)).toBe(false)
  })
  expect(screen.queryByText('Pas de démo')).not.toBeInTheDocument()
})

test('chaque projet sans capture retombe sur le panneau au logo', () => {
  const { container } = render(<Realisation />)

  const sansCapture = Data.filter((projet) => !projet.cover).length
  expect(container.querySelectorAll('.cover__fallback')).toHaveLength(sansCapture)
})

test('chaque projet de formation propose un aperçu de son code', () => {
  render(<Realisation />)

  // Un extrait orphelin (id supprimé ou renommé) ne s'afficherait nulle part
  // sans que personne ne le remarque.
  Object.keys(codeSnippets).forEach((id) => {
    const projet = Data.find((p) => p.id === Number(id))
    expect(projet).toBeDefined()
    expect(
      screen.getByRole('button', { name: `Aperçu du code de ${projet.title}` })
    ).toBeInTheDocument()
  })
})

test("l'aperçu s'ouvre sur l'extrait coloré puis se referme", async () => {
  const [id, extrait] = Object.entries(codeSnippets)[0]
  const projet = Data.find((p) => p.id === Number(id))
  render(<Realisation />)

  fireEvent.click(
    screen.getByRole('button', { name: `Aperçu du code de ${projet.title}` })
  )
  const fenetre = screen.getByRole('dialog', { name: projet.title })
  expect(fenetre).toHaveAttribute('open')
  expect(within(fenetre).getByText(extrait.file)).toBeInTheDocument()

  // La coloration arrive dans un second temps (chunk chargé à la demande).
  await waitFor(() => {
    expect(fenetre.querySelector('code [class^="hljs-"]')).not.toBeNull()
  })

  fireEvent.click(within(fenetre).getByRole('button', { name: "Fermer l'aperçu" }))
  expect(fenetre).not.toHaveAttribute('open')
})
