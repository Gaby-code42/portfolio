import { render, screen, fireEvent } from '@testing-library/react'
import Realisation from './index'
import Data from '../../data/index.json'

const centre = (container) => container.querySelector('.card--center')

test('le premier projet est affiché au centre du carrousel', () => {
  const { container } = render(<Realisation />)

  expect(centre(container)).toHaveTextContent(Data[0].title)
})

test('cliquer sur "Projet suivant" fait défiler le carrousel', () => {
  const { container } = render(<Realisation />)

  fireEvent.click(screen.getByLabelText('Projet suivant'))

  expect(centre(container)).toHaveTextContent(Data[1].title)
})

test('un projet sans démo affiche "Pas de démo" au lieu du lien', () => {
  const sansDemo = Data.findIndex((projet) => projet.demo === null)
  const { container } = render(<Realisation />)

  fireEvent.click(screen.getByLabelText(`Afficher le projet ${Data[sansDemo].title}`))

  expect(centre(container)).toHaveTextContent('Pas de démo')
})
