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

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-image-container"
          >
            <div className="image-wrapper">
              <img 
                src="/images/Chatrapati_Shivaji_Maharaj.jpg" 
                alt="Chhatrapati Shivaji Maharaj"
                className="hero-image"
              />
              {/* Decorative Frame */}
              <div className="image-frame" />
              
              {/* Decorative Element Overlay */}
              <div className="decorative-overlay">
                <div className="decorative-text">
                  <p className="devanagari-text">छत्रपती</p>
                  <p className="devanagari-subtitle">Maratha Pride</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}