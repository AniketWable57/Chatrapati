"use client"

import { motion } from "framer-motion"
import { Users, Gavel, TrendingUp } from "lucide-react"
import "../../styles/administration-section.css"

export default function AdministrationSection() {
  const ashtaPradhan = [
    { position: "Peshwa", responsibility: "Prime Minister & Military Commander" },
    { position: "Amatya", responsibility: "Finance & Internal Administration" },
    { position: "Mantri", responsibility: "Home Affairs & Civil Administration" },
    { position: "Sumant", responsibility: "Foreign Affairs & Diplomacy" },
    { position: "Sachiv", responsibility: "Records & Documentation" },
    { position: "Senapati", responsibility: "Military Commander & Defense" },
    { position: "Nyayadish", responsibility: "Justice & Legal Affairs" },
    { position: "Panditrao", responsibility: "Religious Affairs & Culture" },
  ]

  return (
    <section className="administration-section">
      <div className="administration-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="administration-header"
        >
          <p className="administration-subtitle">GOVERNANCE SYSTEM</p>
          <h2 className="administration-title">Ashta Pradhan Council</h2>
          <p className="administration-description">
            Eight-member council system representing one of the earliest democratic governance structures
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="admin-intro parchment"
        >
          <p className="admin-intro-text">
            The Ashta Pradhan (eight ministers) system was a revolutionary administrative structure that distributed
            power and responsibility across multiple departments. Each minister held equal authority in their respective
            domain, ensuring checks and balances in governance centuries before modern democracies adopted similar
            systems.
          </p>
        </motion.div>

        {/* Council Grid */}
        <div className="council-grid">
          {ashtaPradhan.map((minister, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="minister-card-wrapper"
            >
              <div className="minister-card-bg" />
              <div className="minister-card">
                <div className="minister-number">{String(index + 1).padStart(2, "0")}</div>
                <h4 className="minister-position">{minister.position}</h4>
                <p className="minister-responsibility">{minister.responsibility}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="ornamental-divider" />

        {/* Administrative Features */}
        <div className="admin-features">
          {[
            {
              icon: Gavel,
              title: "Justice System",
              description:
                "Fair legal system with appointed judges ensuring protection for all citizens regardless of caste or religion",
            },
            {
              icon: TrendingUp,
              title: "Economic Policy",
              description:
                "Progressive taxation, support for local industries, and fair trade practices promoting economic growth",
            },
            {
              icon: Users,
              title: "Social Welfare",
              description:
                "Protection of minority rights, equal opportunity employment, and inclusive governance structure",
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="admin-feature-card parchment"
              >
                <Icon className="admin-feature-icon" />
                <h3 className="admin-feature-title">{feature.title}</h3>
                <p className="admin-feature-text">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
