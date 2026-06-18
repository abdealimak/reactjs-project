import { Logos3 } from '../ui/logos3'

const trustedPorts = [
  { id: 'singapore', description: 'Singapore', code: 'SIN', region: 'SG' },
  { id: 'rotterdam', description: 'Rotterdam', code: 'RTM', region: 'NL' },
  { id: 'los-angeles', description: 'Los Angeles', code: 'LAX', region: 'US' },
  { id: 'jebel-ali', description: 'Jebel Ali', code: 'JEA', region: 'AE' },
  { id: 'shanghai', description: 'Shanghai', code: 'SHA', region: 'CN' },
  { id: 'antwerp-bruges', description: 'Antwerp-Bruges', code: 'ANR', region: 'BE' },
  { id: 'hamburg', description: 'Hamburg', code: 'HAM', region: 'DE' },
  { id: 'busan', description: 'Busan', code: 'PUS', region: 'KR' },
]

export function TrustedPortsSection() {
  return <Logos3 heading="Trusted by these ports" logos={trustedPorts} />
}
