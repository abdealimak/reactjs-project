import { InspectionQueue } from '../../components/console/InspectionQueue';
import { WorkloadPlanner } from '../../components/console/WorkloadPlanner';

export default function TerminalYard() {
  return (
    <div className="console-view animate-fade-in">
      <header className="view-header">
        <h2>Port Terminal Yard</h2>
        <p>On-the-ground operational control and staff scheduling.</p>
      </header>
      
      <div className="view-content terminal-yard-layout">
        <InspectionQueue />
        <WorkloadPlanner />
      </div>
    </div>
  );
}
