import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(containerRef.current.querySelectorAll('.marquee-item'));
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "cta-marquee-vertical-container",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        }
      }
    >
      <div className="cta-marquee-vertical-track">
        {children}
      </div>
      <div className="cta-marquee-vertical-track" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Customs Clearance",
  "HS Code Discovery",
  "Manifest Auditing",
  "Trade Compliance",
  "Port Authority Hub",
  "Logistics Routing",
  "Secure Ledger Sync",
];

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        item.style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div id="explore" className="cta-marquee-section">
      <div className="cta-marquee-container">
        <div className="cta-marquee-grid">
          {/* Left Content */}
          <div className="cta-marquee-content">
            <h2 className="cta-marquee-title">
              Streamline Your Border Operations
            </h2>
            <p className="cta-marquee-desc">
              Accelerate cargo clearance, discover HS codes instantly, and validate 
              manifest compliance on a tamper-proof ledger. Let Odyssey manage your logistics risk.
            </p>
            <div className="cta-marquee-buttons">
              <Link to="/control-tower" className="cta-btn-primary">
                EXPLORE CONSOLE
              </Link>
              <a href="#" className="cta-btn-secondary">
                BOOK A DEMO
              </a>
            </div>
          </div>

          {/* Right Marquee */}
          <div ref={marqueeRef} className="cta-marquee-right">
            <div className="cta-marquee-window">
              <VerticalMarquee speed={25} className="h-full">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="cta-marquee-item marquee-item"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
              
              {/* Top vignette */}
              <div className="cta-vignette-top"></div>
              
              {/* Bottom vignette */}
              <div className="cta-vignette-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

