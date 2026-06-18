import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Odyssey transformed our cargo customs handling. The instant HS code Finder saved our team hundreds of hours on international tariffs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Briana Patton",
    role: "Customs Operations Manager",
  },
  {
    text: "Implementing Odyssey was smooth and quick. The secure ledger manifest validation makes border compliance operations flawless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Bilal Ahmed",
    role: "IT Logistics Director",
  },
  {
    text: "The live synchronization queue is exceptional, letting us organize container arrivals dynamically and eliminating port bottlenecks.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Saman Malik",
    role: "Port Clearance Lead",
  },
  {
    text: "Odyssey's clearance pathfinding engine radically improved our container throughput. Strongly recommended for port authorities.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Omar Raza",
    role: "Port Authority CEO",
  },
  {
    text: "The Workload Planner has transformed our agent allocation, balancing sector loads dynamically and keeping our staff productive.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Zainab Hussain",
    role: "Operations Coordinator",
  },
  {
    text: "A profound shift for border agents. Tracking container histories and undoing errors is incredibly simple.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Aliza Khan",
    role: "Border Management Analyst",
  },
  {
    text: "Customs clearance times dropped from hours to minutes. Beautiful, robust, and highly reliable system.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Farhan Siddiqui",
    role: "Logistics Director",
  },
  {
    text: "The document security checker gives us 100% confidence in verifying Bill of Lading authenticity instantly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Sana Sheikh",
    role: "Customs Inspection Lead",
  },
  {
    text: "Since deploying Odyssey, we have seen a massive reduction in tariff validation delays, directly boosting trade efficiency.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Hassan Ali",
    role: "Supply Chain Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative testimonials-section-wrapper" id="testimonials">
      <div className="container z-10 mx-auto testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto testimonials-header-motion"
        >
          <div className="flex justify-center">
            {/* Tag pill removed */}
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 testimonials-section-title">
            Trusted by Port Authorities
          </h2>
          <p className="text-center mt-5 opacity-75 testimonials-section-subtitle">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 testimonials-columns-container">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="testimonials-column-wrapper" />
          <TestimonialsColumn testimonials={secondColumn} className="testimonials-column-wrapper hidden-md" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="testimonials-column-wrapper hidden-lg" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default { Testimonials };
