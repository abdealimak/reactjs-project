import React, { useState } from 'react';
import { ShieldAlert, Search, Filter, Ban, AlertTriangle, ChevronRight, ChevronDown, FileText } from 'lucide-react';

export default function SanctionsLedger() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEntity, setExpandedEntity] = useState(null);

  const handleDownloadManifest = (e, entity) => {
    e.stopPropagation();
    const manifestId = entity.id.replace('ENT', 'MNF');
    const content = `===========================================
CONFIDENTIAL - SEIZED CARGO MANIFEST
===========================================
Manifest ID: ${manifestId}
Corporate Entity: ${entity.name}
Origin: ${entity.origin}
Flagged Reason: ${entity.reason}
Date Seized: ${entity.date}
Intercept Node: NODE 4 (Nhava Sheva Outer Anchorage)

CARGO DETAILS:
- 4x 40ft Shipping Containers
- Declared Contents: Agricultural Machinery Parts
- Actual Contents (Scanned): [REDACTED - SECURITY HOLD]

STATUS: BLOCKED / QUARANTINED
AUTHORITY: GLOBAL CUSTOMS BLOCKCHAIN LEDGER
===========================================
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Seized_Manifest_${manifestId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const blockedEntities = [
    { id: 'ENT-9921', name: 'Krasnovya Shipping Co.', origin: 'Eastern Bloc', reason: 'Arms Embargo', date: '2026-06-12', severity: 'danger' },
    { id: 'ENT-4012', name: 'Sovereign Logistics Ltd.', origin: 'Tax Haven Islands', reason: 'Money Laundering', date: '2026-06-15', severity: 'warning' },
    { id: 'ENT-8834', name: 'Oceanic Transit Shell', origin: 'Unknown', reason: 'Ghost Ship Protocol', date: '2026-06-17', severity: 'danger' },
    { id: 'ENT-1120', name: 'Global Tech Exporters', origin: 'Sanctioned Region', reason: 'Microchip Smuggling', date: '2026-06-18', severity: 'danger' },
  ];

  const filteredEntities = blockedEntities.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    e.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="console-display tab-reveal">
      <div className="console-header">
        <div>
          <h1 className="console-title">Sanctions Ledger</h1>
          <p className="console-description">Global cryptographic audit log of embargoed entities and restricted trade routes.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline btn-compact"><Filter size={14} /> Filter</button>
        </div>
      </div>

      <div className="search-container" style={{ marginBottom: '2rem' }}>
        <Search size={18} />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Query global entity database..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="security-card" style={{ marginBottom: '2rem', background: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ef4444', marginBottom: '1rem' }}>
          <ShieldAlert size={24} />
          <h3 style={{ margin: 0 }}>Active Global Threat Level: ELEVATED</h3>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
          3 new corporate entities have been added to the international sanctions list in the last 48 hours. Automatic cargo holds have been placed across all associated routing nodes. Port authorities are instructed to intercept and scan.
        </p>
      </div>

      <div className="table-container" style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table className="console-table">
          <thead>
            <tr>
              <th>Entity ID</th>
              <th>Corporate Name</th>
              <th>Origin</th>
              <th>Flagged Reason</th>
              <th>Date Added</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntities.length === 0 ? (
              <tr>
                <td colSpan="6" className="table-empty" style={{ padding: '3rem' }}>
                  No entities found matching "{searchQuery}"
                </td>
              </tr>
            ) : filteredEntities.map(entity => (
              <React.Fragment key={entity.id}>
                <tr 
                  onClick={() => setExpandedEntity(expandedEntity === entity.id ? null : entity.id)}
                  style={{ cursor: 'pointer', transition: 'background 0.2s', background: expandedEntity === entity.id ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                  className="hover-row"
                >
                  <td style={{ fontFamily: 'monospace', color: 'var(--primary-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {expandedEntity === entity.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      {entity.id}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600 }}>{entity.name}</td>
                  <td>{entity.origin}</td>
                  <td>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: entity.severity === 'danger' ? '#ef4444' : '#eab308' }}>
                      {entity.severity === 'danger' ? <Ban size={14} /> : <AlertTriangle size={14} />}
                      {entity.reason}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-muted)' }}>{entity.date}</td>
                  <td>
                    <span className={`status-pill ${entity.severity}`}>
                      {entity.severity === 'danger' ? 'BLOCKED' : 'MONITORING'}
                    </span>
                  </td>
                </tr>
                {expandedEntity === entity.id && (
                  <tr>
                    <td colSpan="6" style={{ padding: 0, borderBottom: '1px solid var(--border)' }}>
                      <div className="animate-fade-in" style={{ padding: '1.5rem 2.5rem', background: '#050505', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                          <h4 style={{ color: 'var(--primary-muted)', marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Known Aliases & Shell Companies</h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: '#a1a1aa' }}>
                            <li style={{ padding: '0.25rem 0' }}>• {entity.name.split(' ')[0]} Holdings Group</li>
                            <li style={{ padding: '0.25rem 0' }}>• Global {entity.origin} Trading Firm</li>
                            <li style={{ padding: '0.25rem 0' }}>• Offshore Investments LLC</li>
                          </ul>
                        </div>
                        <div>
                          <h4 style={{ color: 'var(--primary-muted)', marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Intercepted Cargo</h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '6px', fontSize: '0.85rem' }}>
                            <FileText size={16} className={entity.severity === 'danger' ? 'text-red-400' : 'text-amber-400'} />
                            <span>Manifest {entity.id.replace('ENT', 'MNF')} - Seized at Node 4</span>
                            <button 
                              className="btn-mini btn-outline" 
                              style={{ marginLeft: 'auto', cursor: 'pointer' }}
                              onClick={(e) => handleDownloadManifest(e, entity)}
                            >
                              Download .txt
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
