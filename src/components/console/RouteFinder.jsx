import { useState } from 'react';
import { ArrowRight, MapPin, Zap, AlertTriangle } from 'lucide-react';

export function RouteFinder({ posts }) {
  const [destination, setDestination] = useState('');
  const [routeResult, setRouteResult] = useState(null);

  const handleFindRoute = () => {
    if (!destination) return;
    
    const target = posts.find(p => p.id === destination);
    if (!target) return;

    // Mock Pathfinding Algorithm evaluating the global state
    if (target.state === 'fluid') {
      setRouteResult({ 
        type: 'optimal',
        path: `Direct Sea Freight → ${target.name}`, 
        time: 'Optimal (No Delay expected at port)' 
      });
    } else {
      // Find a nearby fluid port to reroute
      const alternative = posts.find(p => p.state === 'fluid');
      setRouteResult({ 
        type: 'rerouted',
        path: `Reroute → ${alternative.name} → High-Speed Rail Transit → ${target.name}`, 
        time: 'Est. 12h rail detour (Bypasses 4-day port congestion)' 
      });
    }
  };

  return (
    <div className="console-panel">
      <div className="panel-header">
        <h3>Quickest Clearance Route</h3>
        <p>AI pathfinding engine to bypass congested checkpoints dynamically.</p>
      </div>

      <div className="route-controls">
        <div className="input-group">
          <MapPin size={18} className="input-icon" />
          <select 
            value={destination} 
            onChange={(e) => {
              setDestination(e.target.value);
              setRouteResult(null); // reset result on change
            }}
          >
            <option value="">Select Destination Port...</option>
            {posts.map(p => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.id}) - {p.state.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <button 
          onClick={handleFindRoute} 
          disabled={!destination}
          className="btn btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}
        >
          <Zap size={16} /> Calculate Path
        </button>
      </div>

      {routeResult && (
        <div className="route-result-card animate-fade-in">
          <div className="route-result-header">
            {routeResult.type === 'optimal' ? (
              <Zap className="text-green" size={24} />
            ) : (
              <AlertTriangle className="text-amber" size={24} />
            )}
            <h4>Recommended Strategy</h4>
          </div>
          
          <div className="route-path">
            <strong>{routeResult.path}</strong>
          </div>
          
          <div className={`route-time-badge ${routeResult.type}`}>
            {routeResult.time}
          </div>
        </div>
      )}
    </div>
  );
}
