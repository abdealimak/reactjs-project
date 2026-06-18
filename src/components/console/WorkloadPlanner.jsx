import { useState } from 'react';
import { Users, AlertCircle, CheckCircle2 } from 'lucide-react';

const INITIAL_LANES = [
  { id: 'Lane A (Automotive)', status: 'fluid', agents: 4, congestion: 20 },
  { id: 'Lane B (Electronics)', status: 'congested', agents: 2, congestion: 95 },
  { id: 'Lane C (Agriculture)', status: 'fluid', agents: 5, congestion: 15 },
  { id: 'Lane D (Chemicals)', status: 'delayed', agents: 3, congestion: 60 },
];

export function WorkloadPlanner() {
  const [lanes, setLanes] = useState(INITIAL_LANES);
  const [optimized, setOptimized] = useState(false);

  const handleOptimize = () => {
    // Mock algorithm: Move agents from fluid lanes to congested lanes
    setLanes([
      { id: 'Lane A (Automotive)', status: 'fluid', agents: 2, congestion: 20 }, // -2 agents
      { id: 'Lane B (Electronics)', status: 'fluid', agents: 6, congestion: 45 }, // +4 agents, status improved
      { id: 'Lane C (Agriculture)', status: 'fluid', agents: 3, congestion: 15 }, // -2 agents
      { id: 'Lane D (Chemicals)', status: 'fluid', agents: 3, congestion: 40 },  // Status improved naturally
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
          {optimized ? <><CheckCircle2 size={16} /> Staffing Optimized</> : <><Users size={16} /> Optimize Staffing</>}
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
              <div className="stat-box">
                <span className="stat-label">Agents Assigned</span>
                <span className="stat-value"><Users size={14} className="text-muted" /> {lane.agents}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Congestion Level</span>
                <span className={`stat-value text-${lane.status}`}>{lane.congestion}%</span>
              </div>
            </div>
            
            <div className="congestion-bar">
               <div className={`congestion-fill bg-${lane.status}`} style={{ width: `${lane.congestion}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
