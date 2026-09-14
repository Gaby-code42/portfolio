import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PortfolioProvider, PORTFOLIO_PAGES } from './index'
import { LifeBar } from '../ProgressBar'

const afficherSurLaPage = (chemin) =>
  render(
    <MemoryRouter initialEntries={[chemin]}>
      <PortfolioProvider>
        <LifeBar />
      </PortfolioProvider>
    </MemoryRouter>
  )

test("arriver sur l'accueil valide une page sur trois", () => {
  afficherSurLaPage('/')

  const barre = screen.getByRole('progressbar')
  expect(barre).toHaveAttribute('aria-valuenow', '33')
})

test('une page qui exige un scroll complet ne se valide pas à la simple arrivée', () => {
  const pageAvecScroll = PORTFOLIO_PAGES.find((page) => page.scrollRequired)
  afficherSurLaPage(pageAvecScroll.path)

  const barre = screen.getByRole('progressbar')
  expect(barre).toHaveAttribute('aria-valuenow', '0')
})
