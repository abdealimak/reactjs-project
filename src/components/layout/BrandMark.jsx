import { Ship } from 'lucide-react'

export function BrandMark() {
  return (
    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '800' }}>
      <Ship size={20} className="brand-icon" />
      <span>Odyssey</span>
    </div>
  )
}
