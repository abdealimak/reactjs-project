import { useState, useEffect } from 'react';
import { FileText, ShieldAlert, ShieldCheck, Loader2 } from 'lucide-react';

export function SecurityChecker() {
  const [scanning, setScanning] = useState(true);
  const [discrepancy, setDiscrepancy] = useState(null);

  useEffect(() => {
    // Mock a 2.5s deep scan delay
    const timer = setTimeout(() => {
      setScanning(false);
      setDiscrepancy("Mismatched cryptographic signatures detected on Origin Certificate.");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="console-panel">
      <div className="panel-header">
        <h3>Document Security Checker</h3>
        <p>Automated cryptographic validation of Bills of Lading.</p>
      </div>

      <div className="security-preview">
        <div className="doc-preview">
          <FileText size={48} className="text-muted" />
          <div className="doc-meta">
            <strong>BoL-99824-A.pdf</strong>
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
          ) : (
            <div className="alert-box success">
              <ShieldCheck size={24} />
              <div>
                <strong>Verified</strong>
                <p>All digital signatures match ledger records.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
