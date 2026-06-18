import { Clock } from 'lucide-react';

const QUEUE_DATA = [
  { id: 'CONT-8921-A', origin: 'Shenzhen, CN', time: '10:42 AM', progress: 85, status: 'Inspecting' },
  { id: 'CONT-3342-B', origin: 'Rotterdam, NL', time: '10:45 AM', progress: 40, status: 'Scanning' },
  { id: 'CONT-1109-C', origin: 'Dubai, AE', time: '10:51 AM', progress: 10, status: 'Queued' },
  { id: 'CONT-7762-D', origin: 'Singapore, SG', time: '11:05 AM', progress: 0, status: 'Waiting' },
];

export function InspectionQueue() {
  return (
    <div className="console-panel">
      <div className="panel-header">
        <h3>Inspection Queue Organizer</h3>
        <p>Strict FIFO sequencing for incoming shipping containers.</p>
      </div>
      
      <div className="queue-list">
        {QUEUE_DATA.map((item, idx) => (
          <div key={item.id} className="queue-item">
            <div className="queue-item-meta">
              <span className="queue-index">#{idx + 1}</span>
              <div className="queue-info">
                <strong>{item.id}</strong>
                <span>{item.origin}</span>
              </div>
            </div>
            <div className="queue-progress-wrapper">
              <div className="progress-bar-bg">
                <div 
                  className={`progress-bar-fill ${item.progress === 0 ? 'inactive' : 'active'}`} 
                  style={{ width: `${item.progress}%` }} 
                />
              </div>
              <span className="progress-label">{item.status}</span>
            </div>
            <div className="queue-time">
              <Clock size={14} className="text-muted" />
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
