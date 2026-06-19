import { useState } from 'react';
import { Search, Info } from 'lucide-react';

const HS_CODES = [
  { code: '8517.13.00', desc: 'Smartphones (Telephones for cellular networks)', tax: '20%' },
  { code: '8703.23.10', desc: 'Motor Vehicles (CBU), engine capacity > 1500cc', tax: '100%' },
  { code: '8471.30.10', desc: 'Personal computers (Laptops, Notebooks)', tax: '0%' },
  { code: '9018.90.99', desc: 'Medical, surgical or veterinary instruments', tax: '5%' },
  { code: '7108.12.00', desc: 'Gold (including gold plated with platinum) non-monetary', tax: '15%' },
];

export function TaxCodeFinder() {
  const [query, setQuery] = useState('');

  const filtered = HS_CODES.filter(item => 
    item.desc.toLowerCase().includes(query.toLowerCase()) || 
    item.code.includes(query)
  );

  return (
    <div className="console-panel">
      <div className="panel-header">
        <h3>Product Tax Code Finder</h3>
        <p>Instant lookup for Harmonized System (HS) classifications.</p>
      </div>

      <div className="search-bar-wrapper">
        <div className="search-input-group">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search products (e.g., vehicles, medical, electronics)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="hs-results">
        {filtered.map(item => (
          <div key={item.code} className="hs-item">
            <div className="hs-info">
              <span className="hs-code">{item.code}</span>
              <span className="hs-desc">{item.desc}</span>
            </div>
            <div className="hs-tax-badge">
              <Info size={14} /> Duty Rate: {item.tax}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="no-results">No classifications found for "{query}".</p>}
      </div>
    </div>
  );
}
