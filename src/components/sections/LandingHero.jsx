import { HeroGlobe } from '../ui/hero-globe'
import { ArrowRight, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

export function LandingHero() {
  return (
    <header id="home" className="hero premium-hero">
      <div className="hero-ambient-glow" aria-hidden="true"></div>
      <div className="container">
        
        <div className="hero-grid">
          <div className="hero-content reveal">
            <h1>The Global Customs <br /><span className="gradient-text">Operating System</span></h1>
            
            <p className="hero-subtitle">
              From ocean dock to border gate, transform chaotic customs processing into a seamless, automated transit line. <br></br>
              <strong> Zero compliance lag. Zero friction.</strong>
            </p>
          </div>
          
          <div className="hero-visual reveal" style={{ animationDelay: '0.2s' }}>
            <div className="globe-pedestal"></div>
            <HeroGlobe />
          </div>
        </div>

      </div>
    </header>
  )
}
