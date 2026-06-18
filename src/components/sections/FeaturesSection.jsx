import { Search, DollarSign, RotateCcw, ListOrdered, GitFork, Sliders, ShieldAlert, Globe } from 'lucide-react'

const features = [
  {
    title: "AI Tariff Classifier",
    tagline: "Instant HS code lookup",
    description: "Search HS codes instantly to find exact duty rates.",
    icon: Search
  },
  {
    title: "Duty & Tax Sorter",
    tagline: "High-yield cargo priority",
    description: "Rank manifests by tax value to prioritize high-revenue cargo.",
    icon: DollarSign
  },
  {
    title: "Manifest Audit Trail",
    tagline: "Version control compliance",
    description: "Track all edits in real time and revert errors with one click.",
    icon: RotateCcw
  },
  {
    title: "Smart FIFO Queue",
    tagline: "Sequential terminal processing",
    description: "Visualize arriving containers in real-time sequential queues.",
    icon: ListOrdered
  },
  {
    title: "Route Optimizer",
    tagline: "Pathfinding algorithms",
    description: "Calculate alternative routing paths with the shortest wait times.",
    icon: GitFork
  },
  {
    title: "Dynamic Workload",
    tagline: "Real-time workforce mapping",
    description: "Reassign customs inspectors instantly to congested terminal zones.",
    icon: Sliders
  },
  {
    title: "Security Registry",
    tagline: "Cryptographic fraud detection",
    description: "Cross-examine Bills of Lading and trigger alerts for discrepancies.",
    icon: ShieldAlert
  },
  {
    title: "Checkpoint Status Hub",
    tagline: "Macro monitoring network",
    description: "Monitor all connected border gates to instantly diagnose delays.",
    icon: Globe
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="features-overview section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Core Capabilities</h2>
          <p>A unified suite of intelligent tools designed to accelerate cargo processing and secure your borders.</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article className="feature-card reveal" key={feature.title}>
                <div className="feature-icon-wrapper">
                  <Icon />
                </div>
                <h4>{feature.title}</h4>
                <span className="feature-tagline">{feature.tagline}</span>
                <p>{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}


