import { useEffect, useRef} from 'react'
import { useProgress } from '../Provider/index'
import './style.scss'

export function LifeBar() {
  const { percent, visited, pages } = useProgress()
  const prevPct = useRef(percent)
  const TOTAL_BLOCKS = 9

  useEffect(() => { prevPct.current = percent }, [percent])

  const litBlocks = Math.round((percent / 100) * TOTAL_BLOCKS)

  return (
    <div className="lb-root">

      <div className="lb-top">
        <span className="lb-label">SCAN</span>
        <div className="lb-blocks">
          {Array.from({ length: TOTAL_BLOCKS }, (_, i) => (
            <div key={i} className={`lb-block${i < litBlocks ? ' lit' : ''}`} />
          ))}
        </div>
        <span className="lb-pct">{percent}%</span>
      </div>

      <div className="lb-track">
        <div className="lb-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="lb-pages">
        {pages.map(p => {
          const done = visited.has(p.path)
          return (
            <div key={p.path} className={`lb-page${done ? ' done' : ''}`}>
              <div className="lb-dot" />
              <span>{p.label}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}