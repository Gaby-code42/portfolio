import { render, screen } from '@testing-library/react'
import Realisation from './index'
import Data from '../../data/index.json'

test('tous les projets sont visibles sans interaction', () => {
  render(<Realisation />)

  // Le carrousel n'en montrait qu'un lisible à la fois : la grille doit tous
  // les afficher d'un coup.
  Data.forEach((projet) => {
    expect(screen.getByText(projet.title)).toBeInTheDocument()
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
