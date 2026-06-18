import { Testimonials } from '../components/ui/demo'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { LandingHero } from '../components/sections/LandingHero'
import { TrustedPortsSection } from '../components/sections/TrustedPortsSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { FAQSection } from '../components/sections/FAQSection'
import CTAWithVerticalMarquee from '../components/ui/cta-with-text-marquee'

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="landing-main-content">
        <LandingHero />
        <hr className="section-divider" />
        <TrustedPortsSection />
        <hr className="section-divider" />
        <FeaturesSection />
        <hr className="section-divider" />
        <Testimonials />
        <hr className="section-divider" />
        <FAQSection />
        <hr className="section-divider" />
        <CTAWithVerticalMarquee />
      </main>
      <SiteFooter />
    </>
  )
}


export default LandingPage
