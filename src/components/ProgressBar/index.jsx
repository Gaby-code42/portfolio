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
    <div className="pb-root">

      <div className="pb-top">
        <span className="pb-label">SCAN</span>
        <div className="pb-blocks">
          {Array.from({ length: TOTAL_BLOCKS }, (_, i) => (
            <div key={i} className={`pb-block${i < litBlocks ? ' lit' : ''}`} />
          ))}
        </div>
        <span className="pb-pct">{percent}%</span>
      </div>

      <div className="pb-track">
        <div className="pb-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="pb-pages">
        {pages.map(p => {
          const done = visited.has(p.path)
          return (
            <div key={p.path} className={`pb-page${done ? ' done' : ''}`}>
              <div className="pb-dot" />
              <span>{p.label}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}