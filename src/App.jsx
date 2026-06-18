import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ConsoleLayout from './components/layout/ConsoleLayout'
import ControlTower from './pages/console/ControlTower'
import TerminalYard from './pages/console/TerminalYard'
import ClearanceStation from './pages/console/ClearanceStation'
import SanctionsLedger from './pages/console/SanctionsLedger'
import { GLSLHills } from './components/ui/glsl-hills'
import './App.css'

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Router>
      <div className="global-hills-bg">
        <GLSLHills width="100%" height="100%" cameraZ={125} planeSize={256} speed={0.5} />
      </div>
      <div className="global-mouse-glow" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<ConsoleLayout />}>
          <Route path="/control-tower" element={<ControlTower />} />
          <Route path="/sanctions-ledger" element={<SanctionsLedger />} />
          <Route path="/terminal-yard" element={<TerminalYard />} />
          <Route path="/clearance-station" element={<ClearanceStation />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

