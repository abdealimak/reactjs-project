import { ShieldAlert, Search, Filter, Ban, AlertTriangle } from 'lucide-react';

export default function SanctionsLedger() {
  const blockedEntities = [
    { id: 'ENT-9921', name: 'Krasnovya Shipping Co.', origin: 'Eastern Bloc', reason: 'Arms Embargo', date: '2026-06-12', severity: 'danger' },
    { id: 'ENT-4012', name: 'Sovereign Logistics Ltd.', origin: 'Tax Haven Islands', reason: 'Money Laundering', date: '2026-06-15', severity: 'warning' },
    { id: 'ENT-8834', name: 'Oceanic Transit Shell', origin: 'Unknown', reason: 'Ghost Ship Protocol', date: '2026-06-17', severity: 'danger' },
    { id: 'ENT-1120', name: 'Global Tech Exporters', origin: 'Sanctioned Region', reason: 'Microchip Smuggling', date: '2026-06-18', severity: 'danger' },
  ];

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
        <input type="text" className="search-input" placeholder="Query global entity database..." />
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
            {blockedEntities.map(entity => (
              <tr key={entity.id}>
                <td style={{ fontFamily: 'monospace', color: 'var(--primary-muted)' }}>{entity.id}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
