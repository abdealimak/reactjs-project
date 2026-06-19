import { useState } from 'react';
import { Users, AlertCircle, CheckCircle2, Plus, Minus } from 'lucide-react';

const INITIAL_LANES = [
  { id: 'Lane A (Automotive)', status: 'fluid', agents: 4, congestion: 20 },
  { id: 'Lane B (Electronics)', status: 'congested', agents: 2, congestion: 95 },
  { id: 'Lane C (Agriculture)', status: 'fluid', agents: 5, congestion: 15 },
  { id: 'Lane D (Chemicals)', status: 'delayed', agents: 3, congestion: 60 },
];

export function WorkloadPlanner() {
  const [lanes, setLanes] = useState(INITIAL_LANES);
  const [optimized, setOptimized] = useState(false);

  // Recalculate status and congestion based on agent changes
  const updateLaneAgents = (id, delta) => {
    setOptimized(false);
    setLanes(prev => prev.map(lane => {
      if (lane.id !== id) return lane;
      const newAgents = Math.max(1, lane.agents + delta); // minimum 1 agent
      
      // Calculate new mock congestion: More agents = lower congestion
      let newCongestion = lane.congestion;
      if (delta > 0) newCongestion = Math.max(10, lane.congestion - 20);
      if (delta < 0) newCongestion = Math.min(100, lane.congestion + 20);

      // Determine new status
      let newStatus = 'fluid';
      if (newCongestion > 80) newStatus = 'congested';
      else if (newCongestion > 50) newStatus = 'delayed';

      return { ...lane, agents: newAgents, congestion: newCongestion, status: newStatus };
    }));
  };

  const handleOptimize = () => {
    // Mock auto-algorithm
    setLanes([
      { id: 'Lane A (Automotive)', status: 'fluid', agents: 2, congestion: 20 },
      { id: 'Lane B (Electronics)', status: 'fluid', agents: 6, congestion: 45 },
      { id: 'Lane C (Agriculture)', status: 'fluid', agents: 3, congestion: 15 },
      { id: 'Lane D (Chemicals)', status: 'fluid', agents: 3, congestion: 40 },
    ]);
    setOptimized(true);
  };

  return (
    <div className="console-panel">
      <div className="panel-header flex-between">
        <div>
          <h3>Inspector Workload Planner</h3>
          <p>Dynamic port lane traffic management and staff allocation.</p>
        </div>
        <button 
          onClick={handleOptimize} 
          disabled={optimized}
          className={`btn-secondary ${optimized ? 'success' : ''}`}
        >
          {optimized ? <><CheckCircle2 size={16} /> Staffing Optimized</> : <><Users size={16} /> Auto-Optimize Staffing</>}
        </button>
      </div>

      <div className="lanes-grid">
        {lanes.map(lane => (
          <div key={lane.id} className={`lane-card state-${lane.status}`}>
            <div className="lane-header">
              <h4>{lane.id}</h4>
              {lane.status === 'congested' && <AlertCircle className="text-red-400" size={18} />}
            </div>
            
            <div className="lane-stats">
              <div className="stat-box" style={{ width: '100%' }}>
                <span className="stat-label">Agents Assigned</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <button 
                    className="icon-btn" 
                    onClick={() => updateLaneAgents(lane.id, -1)} 
                    disabled={lane.agents <= 1}
                    style={{ padding: '0.25rem' }}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="stat-value" style={{ flex: 1, textAlign: 'center' }}>{lane.agents}</span>
                  <button 
                    className="icon-btn" 
                    onClick={() => updateLaneAgents(lane.id, 1)}
                    style={{ padding: '0.25rem' }}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="stat-box" style={{ width: '100%', marginTop: '0.5rem' }}>
                <span className="stat-label">Congestion Level</span>
                <span className={`stat-value text-${lane.status}`}>{lane.congestion}%</span>
              </div>
            </div>
            
            <div className="congestion-bar" style={{ marginTop: '0.75rem' }}>
               <div className={`congestion-fill bg-${lane.status}`} style={{ width: `${lane.congestion}%`, transition: 'width 0.3s ease, background-color 0.3s ease' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
