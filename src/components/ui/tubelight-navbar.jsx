import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const cn = (...classes) => classes.filter(Boolean).join(" ")

export function NavBar({ items = [], className }) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeItem = items.find(item => item.url === `#${entry.target.id}`)
            if (activeItem) {
              setActiveTab(activeItem.name)
            }
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )

    items.forEach((item) => {
      const id = item.url.replace("#", "")
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 floating-navbar-container",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg floating-navbar-inner">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors nav-item-link",
                isActive ? "bg-muted text-primary active" : "text-foreground/80 hover:text-primary"
              )}
            >
              <span className="nav-item-inner-span">
                {Icon && <Icon size={15} strokeWidth={2.25} className="nav-item-icon" />}
                <span className="nav-item-text">{item.name}</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 active-lamp-overlay"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full active-lamp-indicator">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2 active-lamp-glow-1" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 active-lamp-glow-2" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2 active-lamp-glow-3" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
