import { Anchor } from 'lucide-react'

const defaultPorts = [
  { id: 'singapore', description: 'Singapore', code: 'SIN', region: 'SG' },
  { id: 'rotterdam', description: 'Rotterdam', code: 'RTM', region: 'NL' },
  { id: 'los-angeles', description: 'Los Angeles', code: 'LAX', region: 'US' },
  { id: 'jebel-ali', description: 'Jebel Ali', code: 'JEA', region: 'AE' },
  { id: 'shanghai', description: 'Shanghai', code: 'SHA', region: 'CN' },
  { id: 'antwerp-bruges', description: 'Antwerp-Bruges', code: 'ANR', region: 'BE' },
  { id: 'hamburg', description: 'Hamburg', code: 'HAM', region: 'DE' },
  { id: 'busan', description: 'Busan', code: 'PUS', region: 'KR' },
]

export function Logos3({ heading = 'Trusted by these ports', logos = defaultPorts, className = '' }) {
  const scrollingPorts = [...logos, ...logos]

  return (
    <section className={`ports-trust-section ${className}`} aria-label={heading}>
      <div className="container">
        <div className="ports-trust-header">
          <p className="subtle-ports-heading">{heading}</p>
        </div>
      </div>

      <div className="ports-logo-window">
        <div className="ports-logo-track">
          {scrollingPorts.map((port, index) => (
            <div className="port-logo-card" key={`${port.id}-${index}`}>
              <div className="port-logo-icon">
                <Anchor size={18} />
              </div>
              <div>
                <strong>{port.code}</strong>
                <span>{port.description}</span>
                <small>{port.region}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
