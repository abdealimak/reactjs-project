import { SecurityChecker } from '../../components/console/SecurityChecker';
import { TaxCodeFinder } from '../../components/console/TaxCodeFinder';
import { ManifestWorkspace } from '../../components/console/ManifestWorkspace';
import { XRayScanner } from '../../components/console/XRayScanner';

export default function ClearanceStation() {
  return (
    <div className="console-display tab-reveal">
      <div className="console-header">
        <div>
          <h1 className="console-title">Document Clearance Station</h1>
          <p className="console-description">High-volume data validation, asset verification, and manifest adjustments.</p>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <XRayScanner />
        <SecurityChecker />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <TaxCodeFinder />
        <ManifestWorkspace />
      </div>
    </div>
  );
}
