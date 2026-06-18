import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

// Mock data for international ports with colored statuses
const PORTS = [
  { lat: 51.9225, lng: 4.4791, size: 0.25, color: '#ffffff', name: 'Rotterdam' },
  { lat: 33.9416, lng: -118.4085, size: 0.25, color: '#ffffff', name: 'LAX Customs' },
  { lat: 1.3521, lng: 103.8198, size: 0.25, color: '#ffffff', name: 'Singapore' },
  { lat: 19.0760, lng: 72.8777, size: 0.25, color: '#ffffff', name: 'Mumbai' },
  { lat: 25.0, lng: 55.0, size: 0.25, color: '#ffffff', name: 'Jebel Ali' },
  { lat: 22.5431, lng: 114.0579, size: 0.25, color: '#ffffff', name: 'Shenzhen' },
  { lat: 40.7128, lng: -74.0060, size: 0.25, color: '#ffffff', name: 'New York' },
  { lat: -33.8688, lng: 151.2093, size: 0.25, color: '#ffffff', name: 'Sydney' },
];

const BLUE_ARC = ['rgba(59, 130, 246, 0.9)', 'rgba(147, 197, 253, 0.9)'];

// Active global shipping arcs
const ARCS = [
  { startLat: 51.9225, startLng: 4.4791, endLat: 40.7128, endLng: -74.0060, color: BLUE_ARC }, 
  { startLat: 1.3521, startLng: 103.8198, endLat: 33.9416, endLng: -118.4085, color: BLUE_ARC }, 
  { startLat: 22.5431, startLng: 114.0579, endLat: 1.3521, endLng: 103.8198, color: BLUE_ARC }, 
  { startLat: 1.3521, startLng: 103.8198, endLat: 25.0, endLng: 55.0, color: BLUE_ARC }, 
  { startLat: 25.0, startLng: 55.0, endLat: 51.9225, endLng: 4.4791, color: BLUE_ARC }, 
  { startLat: 25.0, startLng: 55.0, endLat: 19.0760, endLng: 72.8777, color: BLUE_ARC }, 
  { startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198, color: BLUE_ARC },
];

export function HeroGlobe() {
  const globeRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.0;
      controls.enableZoom = false; // Prevent zooming so it stays an ambient background
      globeRef.current.pointOfView({ lat: 25, lng: 45, altitude: 2.2 });
    }

    const handleResize = () => {
      const w = window.innerWidth;
      // Increased sizing to make the globe more prominent
      const size = w > 1400 ? 750 : w > 1024 ? 600 : w > 768 ? 500 : w - 40;
      setDimensions({ width: size, height: size });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hero-globe-wrapper">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        pointsData={PORTS}
        pointAltitude="size"
        pointColor="color"
        pointRadius={1.2}
        pointsMerge={false}
        pointResolution={32}
        
        arcsData={ARCS}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcAltitudeAutoScale={0.3}
        arcStroke={1.5}
      />
    </div>
  );
}
