import { useState } from 'react';
import { Scan, AlertCircle } from 'lucide-react';

export function XRayScanner() {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 2000);
  };

  return (
    <div className="security-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', color: 'var(--primary)' }}>
          <Scan size={18} />
          Container X-Ray Analysis
        </h3>
        <span className="status-pill muted">C-U49221-A</span>
      </div>

      <div style={{ 
        flex: 1, 
        background: '#050505', 
        borderRadius: '8px', 
        border: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {!scanned && !scanning && (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
            <Scan size={32} style={{ opacity: 0.5, marginBottom: '0.5rem', margin: '0 auto' }} />
            <p style={{ fontSize: '0.85rem', margin: 0 }}>Ready for volumetric scan.</p>
          </div>
        )}
        
        {scanning && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.05) 2px, rgba(59, 130, 246, 0.05) 4px)' }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              bottom: 0, 
              width: '100%', 
              background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4), transparent)',
              animation: 'scan-vertical 1.5s linear infinite'
            }} />
          </div>
        )}

        {scanned && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(234, 179, 8, 0.05) 2px, rgba(234, 179, 8, 0.05) 4px)' }}>
             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(234, 179, 8, 0.1)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
               <AlertCircle size={24} color="#eab308" style={{ flexShrink: 0 }} />
               <div>
                 <strong style={{ display: 'block', color: '#eab308', marginBottom: '0.5rem', fontSize: '1rem' }}>Density Anomaly Detected</strong>
                 <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, display: 'block' }}>High-density mass located in rear quadrant. Profile does not match declared cargo (Textiles). Manual physical inspection required.</span>
               </div>
             </div>
          </div>
        )}
      </div>

      <button 
        className="cta-btn-primary full-width" 
        onClick={handleScan}
        disabled={scanning}
        style={{ padding: '0.85rem', width: '100%', opacity: scanning ? 0.5 : 1 }}
      >
        {scanning ? 'Scanning...' : 'Initiate Deep Scan'}
      </button>
    </div>
  );
}
