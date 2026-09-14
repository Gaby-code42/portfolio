import { useProgress } from '../Provider'
import './style.scss'

const TOTAL_BLOCKS = 9

export function LifeBar() {
  const { percent, visited, pages } = useProgress()
  const litBlocks = Math.round((percent / 100) * TOTAL_BLOCKS)

  return (
    <div className="pb-root">
      <div className="pb-top">
        <span className="pb-label">SCAN</span>

        <div
          className="pb-blocks"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progression de votre exploration du portfolio"
        >
          {Array.from({ length: TOTAL_BLOCKS }, (_, i) => (
            <div key={i} className={`pb-block${i < litBlocks ? ' lit' : ''}`} />
          ))}
        </div>

        <span className="pb-pct">{percent}%</span>
      </div>

      <div className="pb-track" aria-hidden="true">
        <div className="pb-fill" style={{ width: `${percent}%` }} />
      </div>

      <ul className="pb-pages">
        {pages.map((page) => {
          const done = visited.has(page.path)
          return (
            <li key={page.path} className={`pb-page${done ? ' done' : ''}`}>
              <span className="pb-dot" aria-hidden="true" />
              <span>{page.label}</span>
              <span className="sr-only">{done ? ' : visitée' : ' : non visitée'}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
