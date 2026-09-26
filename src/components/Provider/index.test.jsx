import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PortfolioProvider, PORTFOLIO_PAGES } from './index'
import { LifeBar } from '../ProgressBar'

// Aligne les tests sur les options activées dans src/index.jsx et évite
// les avertissements de dépréciation de React Router.
const FUTURE_V7 = { v7_startTransition: true, v7_relativeSplatPath: true }

const afficherSurLaPage = (chemin) =>
  render(
    <MemoryRouter initialEntries={[chemin]} future={FUTURE_V7}>
      <PortfolioProvider>
        <LifeBar />
      </PortfolioProvider>
    </MemoryRouter>
  )

// Le pourcentage dépend du nombre de pages : on le calcule plutôt que de
// l'écrire en dur, sinon chaque page ajoutée casse les tests.
const pourcentagePourUnePage = String(Math.round(100 / PORTFOLIO_PAGES.length))

test("arriver sur l'accueil valide une page", () => {
  afficherSurLaPage('/')

  const barre = screen.getByRole('progressbar')
  expect(barre).toHaveAttribute('aria-valuenow', pourcentagePourUnePage)
})

test('une page qui exige un scroll complet ne se valide pas à la simple arrivée', () => {
  const pageAvecScroll = PORTFOLIO_PAGES.find((page) => page.scrollRequired)
  afficherSurLaPage(pageAvecScroll.path)

  const barre = screen.getByRole('progressbar')
  expect(barre).toHaveAttribute('aria-valuenow', '0')
})

test('une page trop courte pour défiler se valide toute seule', async () => {
  // Grand écran ou zoom arrière : la page tient entièrement dans la fenêtre,
  // donc aucun événement `scroll` ne partira jamais. Sans le garde-fou, la
  // progression restait bloquée et la popup finale ne s'affichait pas.
  jest.spyOn(document.body, 'scrollHeight', 'get').mockReturnValue(500)
  window.innerHeight = 900

  const pageAvecScroll = PORTFOLIO_PAGES.find((page) => page.scrollRequired)
  afficherSurLaPage(pageAvecScroll.path)

  await waitFor(() =>
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', pourcentagePourUnePage)
  )

  jest.restoreAllMocks()
})
