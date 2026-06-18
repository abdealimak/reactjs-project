import { Home, Compass, MessageCircleQuestion, Users, Rocket, Ship, Terminal } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"
import { Link } from "react-router-dom"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: Compass },
    { name: 'Testimonials', url: '#testimonials', icon: Users },
    { name: 'FAQ', url: '#faq', icon: MessageCircleQuestion },
  ]

  return (
    <>
      {/* Top Left Branding */}
      <div className="global-brand-logo">
        <Ship size={24} className="brand-icon" />
        <span className="brand-name">Odyssey</span>
      </div>

      {/* Center Tubelight Navbar */}
      <NavBar items={navItems} />

      {/* Top Right Console Button */}
      <div className="global-console-btn">
        <Link to="/control-tower" className="btn btn-outline cta-console-mini">
          <Terminal size={14} /> Console
        </Link>
      </div>
    </>
  )
}

export default NavBarDemo;
