import { useState } from 'react';
import { ArrowUpDown, Edit3, RotateCcw, FileSignature } from 'lucide-react';

const INITIAL_INVENTORY = [
  { id: 'ITM-01', desc: 'Industrial Servers', val: 120000, rate: 0.05, tax: 6000 },
  { id: 'ITM-02', desc: 'Office Furniture', val: 45000, rate: 0.10, tax: 4500 },
  { id: 'ITM-03', desc: 'Medical Scanners', val: 350000, rate: 0, tax: 0 },
  { id: 'ITM-04', desc: 'Luxury Vehicles', val: 180000, rate: 0.25, tax: 45000 },
];

export function ManifestWorkspace() {
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [history, setHistory] = useState([]);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSort = () => {
    const newSort = !sortDesc;
    setSortDesc(newSort);
    const sorted = [...inventory].sort((a, b) => newSort ? b.tax - a.tax : a.tax - b.tax);
    setInventory(sorted);
  };

  const handleEditManifest = () => {
    const targetId = 'ITM-04';
    const originalItem = inventory.find(i => i.id === targetId);
    if (originalItem.tax === 0) return; // already edited

    const updatedInventory = inventory.map(item => 
      item.id === targetId ? { ...item, rate: 0, tax: 0, desc: 'Luxury Vehicles (Duty Exempt)' } : item
    );

    setInventory(updatedInventory);
    
    // Log the change for Undo functionality
    setHistory(prev => [{
      id: Date.now(),
      action: 'Applied Duty Exemption',
      target: targetId,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'}),
      prevState: inventory
    }, ...prev]);
  };

  const handleUndo = (logId) => {
    const targetLog = history.find(h => h.id === logId);
    if (!targetLog) return;

    // Rollback state
    setInventory(targetLog.prevState);
    setHistory(prev => prev.filter(h => h.id !== logId));
    setSortDesc(false);
  };

  return (
    <div className="manifest-workspace-layout">
      {/* Tax Cost Sorter Table */}
      <div className="console-panel table-panel">
        <div className="panel-header flex-between">
          <div>
            <h3>Tax Cost Sorter</h3>
            <p>Active manifest inventory validation.</p>
          </div>
          <button className="btn-secondary" onClick={handleSort}>
            <ArrowUpDown size={16} /> {sortDesc ? 'Unsort' : 'Sort by Duty Cost'}
          </button>
        </div>

        <div className="table-responsive">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Value</th>
                <th>Duty Rate</th>
                <th>Tax Duty Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td><span className="mono-badge">{item.id}</span></td>
                  <td>{item.desc}</td>
                  <td>${item.val.toLocaleString()}</td>
                  <td>{(item.rate * 100)}%</td>
                  <td className={`highlight-tax ${item.tax > 0 ? 'text-amber' : 'text-green'}`}>
                    ${item.tax.toLocaleString()}
                  </td>
                  <td>
                    <button 
                      className="icon-btn" 
                      onClick={handleEditManifest} 
                      disabled={item.id !== 'ITM-04' || item.tax === 0}
                      title="Mock Edit Exemption (Only works on ITM-04)"
                    >
                      <Edit3 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manifest Change History */}
      <div className="console-panel history-panel">
        <div className="panel-header">
          <h3>Audit Trail</h3>
          <p>Immutable manifest changes.</p>
        </div>
        
        <div className="history-list">
          {history.length === 0 ? (
            <div className="empty-history">
              <FileSignature size={32} className="text-muted" />
              <p>No manifest changes detected.</p>
            </div>
          ) : (
            history.map(log => (
              <div key={log.id} className="history-item animate-slide-left">
                <div className="history-meta">
                  <strong>{log.action}</strong>
                  <span>{log.target} at {log.timestamp}</span>
                </div>
                <button className="btn-text" onClick={() => handleUndo(log.id)}>
                  <RotateCcw size={14} /> Undo
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
