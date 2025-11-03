"use client"

import { motion } from "framer-motion"
import "../styles/enhanced-homepage.css"

export default function EnhancedHomepage() {
  const sections = [
    {
      title: "Biography",
      description: "Life timeline and historical journey",
      link: "/biography",
      color: "from-[var(--primary)]",
      image: "/images/Chatrapati.jpg" // Add image paths
    },
    {
      title: "Forts",
      description: "300+ architectural masterpieces",
      link: "/forts",
      color: "from-[var(--accent)]",
      image: "/images/fort.jpg"
    },
    {
      title: "Military",
      description: "Military strategy and innovation",
      link: "/military",
      color: "from-[var(--secondary)]",
      image: "/images/army.jpg"
    },
    {
      title: "Navy",
      description: "Maritime power in Arabian Sea",
      link: "/navy",
      color: "from-[var(--primary)]",
      image: "/images/navy.webp"
    },
    {
      title: "Administration",
      description: "Governance and council system",
      link: "/administration",
      color: "from-[var(--secondary)]",
      image: "/images/administration.jpg"
    },
    {
      title: "Culture",
      description: "Art, music, and heritage",
      link: "/culture",
      color: "from-[var(--accent)]",
      image: "/images/culture.jpg"
    },
    {
      title: "Gallery",
      description: "Historical artifacts and images",
      link: "/gallery",
      color: "from-[var(--primary)]",
      image: "/images/sord.jpg"
    },
  ]

  return (
    <section className="enhanced-homepage">
      <div className="enhanced-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-subtitle">EXPLORE MORE</p>
          <h2 className="section-title">Key Sections</h2>
        </motion.div>

        <div className="sections-grid">
          {sections.map((section, index) => (
            <motion.a
              key={index}
              href={section.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="section-card"
            >
              {/* Add image background */}
              <div 
                className="section-card-image"
                style={{ backgroundImage: `url(${section.image})` }}
              />
              <div
                className="section-card-background"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--primary), var(--background))`,
                }}
              />
              <div className="section-card-pattern jali-pattern" />
              <div className="section-card-content">
                <h3 className="section-card-title">{section.title}</h3>
                <p className="section-card-description">{section.description}</p>
                <div className="section-card-button">Explore →</div>
              </div>
              <div className="section-card-divider" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}