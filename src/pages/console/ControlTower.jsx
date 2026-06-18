import { PostStatusHub } from '../../components/console/PostStatusHub';
import { RouteFinder } from '../../components/console/RouteFinder';

const GLOBAL_POSTS = [
  { id: 'RTM', name: 'Port of Rotterdam', state: 'fluid', containers: 1420 },
  { id: 'LAX', name: 'LAX Customs', state: 'congested', containers: 5390 },
  { id: 'SIN', name: 'Port of Singapore', state: 'fluid', containers: 3100 },
  { id: 'BOM', name: 'Port of Mumbai', state: 'delayed', containers: 2840 },
  { id: 'JEA', name: 'Jebel Ali', state: 'fluid', containers: 1950 },
  { id: 'HAM', name: 'Port of Hamburg', state: 'congested', containers: 4100 },
];

export default function ControlTower() {
  return (
    <div className="console-view animate-fade-in">
      <header className="view-header">
        <h2>Global Control Tower</h2>
        <p>Macro-level oversight of global checkpoint environments.</p>
      </header>
      
      <div className="view-content control-tower-layout">
        <PostStatusHub posts={GLOBAL_POSTS} />
        <RouteFinder posts={GLOBAL_POSTS} />
      </div>
    </div>
  );
}
