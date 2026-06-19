import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe, Box, FileCheck, ShieldAlert, LogOut, Ship } from 'lucide-react';

export default function ConsoleLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState('inspector'); // 'inspector' or 'admin'

  const allNavItems = [
    { name: 'Control Tower', path: '/control-tower', icon: Globe, roles: ['admin'] },
    { name: 'Sanctions Ledger', path: '/sanctions-ledger', icon: ShieldAlert, roles: ['admin'] },
    { name: 'Terminal Yard', path: '/terminal-yard', icon: Box, roles: ['inspector'] },
    { name: 'Clearance Station', path: '/clearance-station', icon: FileCheck, roles: ['inspector'] },
  ];

  const navItems = allNavItems.filter(item => item.roles.includes(activeRole));

  const handleRoleSwitch = (role) => {
    setActiveRole(role);
    // Auto-redirect to the first available page for the new role to prevent blank states
    const firstAvailable = allNavItems.find(item => item.roles.includes(role));
    if (firstAvailable) navigate(firstAvailable.path);
  };

  return (
    <div className="console-app-container">
      {/* Persistent Left Sidebar */}
      <aside className="console-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '800' }}>
            <Ship size={24} className="brand-icon" />
            <span style={{ fontSize: '1.25rem' }}>Odyssey</span>
          </div>
          <span className="sidebar-badge">{activeRole === 'admin' ? 'HQ' : 'Field'}</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Role Switcher */}
        <div className="sidebar-footer" style={{ flexDirection: 'column', gap: '1rem', alignItems: 'stretch' }}>
          <div className="role-switcher-container" style={{ background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '12px' }}>
            <button 
              onClick={() => handleRoleSwitch('inspector')} 
              className={`role-toggle-btn ${activeRole === 'inspector' ? 'active' : ''}`}
            >
              <strong>Insp. Sharma</strong>
              <span>Customs Insp. (Nhava Sheva)</span>
            </button>
            <button 
              onClick={() => handleRoleSwitch('admin')} 
              className={`role-toggle-btn ${activeRole === 'admin' ? 'active' : ''}`}
            >
              <strong>Comm. Verma</strong>
              <span>Joint Commissioner (CBIC)</span>
            </button>
          </div>
          
          <Link to="/" className="logout-btn" style={{ justifyContent: 'center' }} aria-label="Sign out">
            <LogOut size={16} /> Exit Console
          </Link>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main className="console-workspace">
        <Outlet />
      </main>
    </div>
  );
}
