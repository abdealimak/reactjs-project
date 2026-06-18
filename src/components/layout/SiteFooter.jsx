import { BrandMark } from './BrandMark'
import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <BrandMark />
            <p>Odyssey Logistics. An independent platform for modern, sculptural border management.</p>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <Link to="/control-tower">Console</Link>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <a href="mailto:ops@odyssey.logistics">Contact Us</a>
            <span>+1 (310) 555-0900</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Odyssey Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
