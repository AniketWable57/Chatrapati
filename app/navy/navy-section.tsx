"use client"

import { motion } from "framer-motion"
import { Ship, Anchor, Wind } from "lucide-react"
import "../../styles/navy-section.css"

export default function NavySection() {
  const navalFeatures = [
    {
      icon: Ship,
      title: "Naval Fleet",
      description: "Over 100 vessels including galleons, frigates, and merchant ships controlling the Arabian Sea",
    },
    {
      icon: Anchor,
      title: "Coastal Forts",
      description: "Strategic ports and naval bases protecting maritime trade routes and territorial waters",
    },
    {
      icon: Wind,
      title: "Naval Innovation",
      description: "Advanced shipbuilding techniques and navigation systems adapted from Persian and European designs",
    },
  ]

  const ports = [
    { name: "Vijaydurg", role: "Primary Naval Arsenal" },
    { name: "Suvarnadurg", role: "Coastal Trading Post" },
    { name: "Gheriyah", role: "Secondary Naval Base" },
    { name: "Karwar", role: "Northern Maritime Hub" },
    { name: "Bombay", role: "Trade & Supply Center" },
    { name: "Rajapur", role: "Southern Port Station" },
  ]

  return (
    <section className="navy-section">
      <div className="navy-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="navy-header"
        >
          <p className="navy-subtitle">MARITIME POWER</p>
          <h2 className="navy-title">Maratha Navy</h2>
          <p className="navy-description">
            Shivaji established naval supremacy in the Arabian Sea, transforming the Marathas into a maritime power
          </p>
        </motion.div>

        {/* Naval Features */}
        <div className="navy-grid">
          {navalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="navy-card parchment"
              >
                <Icon className="navy-icon" />
                <h3 className="navy-card-title">{feature.title}</h3>
                <p className="navy-card-text">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="ornamental-divider" />

        {/* Naval Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="navy-stats"
        >
          {[
            { number: "100+", label: "Naval Vessels" },
            { number: "6", label: "Major Naval Ports" },
            { number: "50,000", label: "Naval Personnel" },
            { number: "1666", label: "First Fleet Established" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="stat-box"
              style={{
                background: "linear-gradient(to bottom right, var(--card), var(--background))",
                border: "2px solid var(--gold)",
              }}
            >
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Major Ports */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="navy-ports-title">Major Ports & Bases</h3>
          <div className="navy-ports-grid">
            {ports.map((port, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ x: 8 }}
                className="navy-port-card parchment"
              >
                <Anchor className="port-icon" />
                <h4 className="port-name">{port.name}</h4>
                <p className="port-role">{port.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
