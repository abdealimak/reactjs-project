import { useState } from 'react';
import { FileText, ShieldAlert, ShieldCheck, Loader2 } from 'lucide-react';

export function SecurityChecker() {
  const [scanning, setScanning] = useState(false);
  const [discrepancy, setDiscrepancy] = useState(null);
  const [verified, setVerified] = useState(false);
  const [bolInput, setBolInput] = useState('');

  const handleVerify = () => {
    if (!bolInput.trim()) return;
    
    setScanning(true);
    setDiscrepancy(null);
    setVerified(false);

    // Mock a 2.5s deep scan delay
    setTimeout(() => {
      setScanning(false);
      // If they type the exact document, pass. Otherwise, fail.
      if (bolInput.trim() === 'BoL-99824-A') {
        setVerified(true);
      } else {
        setDiscrepancy("Mismatched cryptographic signatures detected on Origin Certificate.");
      }
    }, 2500);
  };

  return (
    <div className="console-panel">
      <div className="panel-header">
        <h3>Document Security Checker</h3>
        <p>Automated cryptographic validation of Bills of Lading.</p>
      </div>

      <div className="security-preview">
        {/* Interactive Input Form */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', width: '100%' }}>
          <input 
            type="text" 
            placeholder="Enter BoL (try BoL-99824-A)"
            value={bolInput}
            onChange={(e) => setBolInput(e.target.value)}
            style={{ 
              flex: 1, 
              padding: '0.75rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              background: 'rgba(0,0,0,0.3)', 
              color: 'white',
              outline: 'none'
            }}
          />
          <button 
            onClick={handleVerify}
            className="btn-primary"
            disabled={scanning || !bolInput.trim()}
          >
            Verify Hash
          </button>
        </div>

        <div className="doc-preview">
          <FileText size={48} className="text-muted" />
          <div className="doc-meta">
            <strong>{bolInput || 'Awaiting Document...'}</strong>
            <span>Encrypted Ledger Payload</span>
          </div>
        </div>
        
        <div className="scan-results">
          {scanning ? (
            <div className="scan-loading">
              <Loader2 className="spinner" size={24} />
              <span>Verifying ledger signatures...</span>
            </div>
          ) : discrepancy ? (
            <div className="alert-box error animate-flash">
              <ShieldAlert size={24} />
              <div>
                <strong>Security Alert</strong>
                <p>{discrepancy}</p>
              </div>
            </div>
          ) : verified ? (
            <div className="alert-box success">
              <ShieldCheck size={24} />
              <div>
                <strong>Verified</strong>
                <p>All digital signatures match ledger records.</p>
              </div>
            </div>
          ) : (
            <div className="alert-box" style={{ background: 'transparent', border: '1px dashed rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
              <span>Enter a document number to begin verification.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
