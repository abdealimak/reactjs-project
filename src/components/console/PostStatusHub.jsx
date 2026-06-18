import { Activity } from 'lucide-react';

export function PostStatusHub({ posts }) {
  return (
    <div className="console-panel">
      <div className="panel-header">
        <h3>Customs Post Status Hub</h3>
        <p>Live monitoring of global checkpoint container volumes and clearance latency.</p>
      </div>
      
      <div className="status-grid">
        {posts.map(post => (
          <div key={post.id} className={`status-card state-${post.state}`}>
            <div className="status-card-header">
              <span className="post-code">{post.id}</span>
              <div className={`status-pulse state-${post.state}`}>
                <Activity size={14} />
              </div>
            </div>
            <h4>{post.name}</h4>
            <div className="status-meta">
              <span className={`status-badge state-${post.state}`}>
                {post.state.toUpperCase()}
              </span>
              <span className="container-count">
                {post.containers.toLocaleString()} TEUs
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
