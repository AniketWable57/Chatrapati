"use client"

import { motion } from "framer-motion"
import "../styles/hero-section.css"

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Pattern */}
      <div className="hero-background jali-pattern" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-grid">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <div className="hero-title-section">
              <p className="hero-subtitle">Maratha Empire Legacy</p>
              <h1 className="hero-title">
                Chhatrapati
                <br />
                <span className="hero-title-accent">Shivaji</span> Maharaj
              </h1>
            </div>

            <p className="hero-description">
              A visionary warrior and administrator who established the Maratha Empire and revolutionized Indian
              military strategy with innovative tactics and unwavering commitment to sovereignty.
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <motion.div whileHover={{ y: -5 }} className="stat-card parchment">
                <p className="stat-number">1674</p>
                <p className="stat-label">Coronation Year</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="stat-card parchment">
                <p className="stat-number">300+</p>
                <p className="stat-label">Forts Built</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="stat-card parchment">
                <p className="stat-number">100+</p>
                <p className="stat-label">Naval Vessels</p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="#biography" className="btn-primary">
                Explore Legacy
              </a>
              <a href="/biography" className="btn-secondary">
                Learn History
              </a>
            </div>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-decorative"
          >
            <div className="decorative-container">
              <div className="decorative-circles">
                <div className="circle-outer" />
                <div className="circle-middle" />
                <div className="circle-inner" />
              </div>

              <div className="decorative-text">
                <p className="devanagari-text">शिवाजी</p>
                <p className="devanagari-subtitle">Maratha Pride</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
