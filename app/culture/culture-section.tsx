"use client"

import { motion } from "framer-motion"
import { Music, Palette, BookOpen } from "lucide-react"
import "../../styles/culture-section.css"

export default function CultureSection() {
  const culturalAspects = [
    {
      icon: Music,
      title: "Art & Music",
      description:
        "Court patronized classical music, dance, and theatrical performances preserving Indian classical traditions",
      legacy: "Influenced Marathi and Hindustani classical music traditions",
    },
    {
      icon: Palette,
      title: "Architecture",
      description: "Unique blend of Indian, Persian, and European architectural styles in fort and palace construction",
      legacy: "Created distinctive Indo-Maratha architectural vocabulary",
    },
    {
      icon: BookOpen,
      title: "Literature & Language",
      description: "Encouraged use of Marathi language, patronized scholars and poets, preserved historical records",
      legacy: "Marathi evolved into administrative and cultural language during Maratha rule",
    },
  ]

  return (
    <section className="culture-section">
      <div className="culture-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="culture-header"
        >
          <p className="culture-subtitle">CULTURAL HERITAGE</p>
          <h2 className="culture-title">Legacy & Culture</h2>
          <p className="culture-description">
            Shivaji Maharaj preserved and promoted Indian culture during an era of cultural suppression
          </p>
        </motion.div>

        {/* Cultural Pillars */}
        <div className="culture-grid">
          {culturalAspects.map((aspect, index) => {
            const Icon = aspect.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="culture-card parchment"
              >
                <Icon className="culture-icon" />
                <h3 className="culture-card-title">{aspect.title}</h3>
                <p className="culture-card-text">{aspect.description}</p>
                <div className="culture-legacy">
                  <p className="culture-legacy-text">Legacy: {aspect.legacy}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="ornamental-divider" />

        {/* Historical Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="culture-impact"
        >
          <div className="impact-section">
            <h3 className="impact-title">Global Recognition</h3>
            <div className="impact-list">
              {[
                "Recognized by Western historians as one of Asia's greatest military strategists",
                "His administrative system studied by modern governance scholars",
                "Naval innovations influenced European maritime powers",
                "Organizational methods precursor to modern bureaucratic systems",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="impact-point"
                >
                  <div className="impact-dot" />
                  <p>{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="impact-section">
            <h3 className="impact-title">Lasting Influence</h3>
            <div className="impact-list">
              {[
                "Inspired Indian independence movement as symbol of resistance",
                "Influenced modern Indian military strategy and tactics",
                "Model for decentralized governance and federal structure",
                "Symbol of Hindu pride and cultural preservation during adversity",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="impact-point"
                >
                  <div className="impact-dot" />
                  <p>{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
