import { useState, useRef, useEffect } from 'react';
import { Scan, AlertCircle, Camera, CheckCircle2 } from 'lucide-react';

export function XRayScanner() {
  const [containerId, setContainerId] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setHasCamera(true);
      setCameraError(null);
    } catch (err) {
      setCameraError("Camera access denied or unavailable.");
      setHasCamera(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setHasCamera(false);
  };

  const handleScan = () => {
    if (!containerId.trim()) return;
    setScanning(true);
    setScanned(false);
    startCamera();

    // Scan for 4 seconds to let them see the "X-Ray" camera feed
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
      stopCamera();
    }, 4000);
  };

  // Cleanup camera if the user navigates away mid-scan
  useEffect(() => {
    return () => stopCamera();
  }, []);

  const isAnomaly = containerId.trim() !== 'C-U49221-A';

  return (
    <div className="security-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', color: 'var(--primary)' }}>
          <Scan size={18} />
          Live X-Ray Vision
        </h3>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input 
          type="text" 
          placeholder="Enter Container ID (try C-U49221-A)"
          value={containerId}
          onChange={(e) => setContainerId(e.target.value)}
          style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)', color: 'white', outline: 'none' }}
        />
        <button 
          onClick={handleScan}
          className="btn-primary"
          disabled={scanning || !containerId.trim()}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          {scanning ? <Scan className="spinner" size={16} /> : <Camera size={16} />}
          {scanning ? 'Scanning...' : 'Scan'}
        </button>
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
        
        {/* The Live Video Feed with X-Ray Filter */}
        <video 
          ref={videoRef}
          autoPlay 
          playsInline 
          muted 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: hasCamera ? 1 : 0,
            filter: 'grayscale(1) invert(1) contrast(150%) sepia(0.2) hue-rotate(180deg)',
            transition: 'opacity 0.3s ease'
          }}
        />

        {!scanned && !scanning && !hasCamera && (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', zIndex: 10 }}>
            <Scan size={32} style={{ opacity: 0.5, marginBottom: '0.5rem', margin: '0 auto' }} />
            <p style={{ fontSize: '0.85rem', margin: 0 }}>{cameraError || 'Awaiting container ID to initiate live scan.'}</p>
          </div>
        )}
        
        {scanning && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.05) 2px, rgba(59, 130, 246, 0.05) 4px)', zIndex: 10, pointerEvents: 'none' }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              bottom: 0, 
              width: '100%', 
              background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.6), transparent)',
              animation: 'scan-vertical 1.5s linear infinite'
            }} />
          </div>
        )}

        {scanned && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: isAnomaly ? 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(234, 179, 8, 0.05) 2px, rgba(234, 179, 8, 0.05) 4px)' : 'rgba(34, 197, 94, 0.05)', zIndex: 10 }}>
             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: isAnomaly ? 'rgba(234, 179, 8, 0.1)' : 'rgba(34, 197, 94, 0.1)', padding: '1.25rem', borderRadius: '8px', border: isAnomaly ? '1px solid rgba(234, 179, 8, 0.3)' : '1px solid rgba(34, 197, 94, 0.3)' }}>
               {isAnomaly ? (
                 <>
                   <AlertCircle size={24} color="#eab308" style={{ flexShrink: 0 }} />
                   <div>
                     <strong style={{ display: 'block', color: '#eab308', marginBottom: '0.5rem', fontSize: '1rem' }}>Density Anomaly Detected</strong>
                     <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, display: 'block' }}>High-density mass located in rear quadrant. Profile does not match declared cargo (Textiles). Manual physical inspection required.</span>
                   </div>
                 </>
               ) : (
                 <>
                   <CheckCircle2 size={24} color="#22c55e" style={{ flexShrink: 0 }} />
                   <div>
                     <strong style={{ display: 'block', color: '#22c55e', marginBottom: '0.5rem', fontSize: '1rem' }}>Container Clear</strong>
                     <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, display: 'block' }}>Volumetric scan matches declared manifest. No anomalies detected. Ready for dispatch.</span>
                   </div>
                 </>
               )}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
