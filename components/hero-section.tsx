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
              He was not merely a king; he was a divine force, a Chhatrapati—the paramount sovereign beneath whose umbrella the Dharma found shelter. From the sacred groves of the Sahyadri mountains, he heard the call of a wounded Motherland, a Bharat groaning under alien dominion.

              This visionary, Chhatrapati Shivaji Maharaj, was the living embodiment of a Hindu Kshatriya's sacred duty. His sword was not drawn for mere territory, but for Swarajya—Self-Rule—a divine right and a righteous kingdom for the children of this sacred soil. He was the answer to the prayers of the oppressed, the fierce protector of temples, the guardian of cows, and the restorer of lost glory.

              As a warrior, he revolutionized the very art of war. He understood that to slay a giant, one must not meet its brute strength head-on, but become the swift, sharp blade of a clever strategist. His Mavalas were not just soldiers; they were devotees of a cause, mountain tigers trained in the art of Ganimi Kava (guerrilla warfare). They moved like the wind, struck like lightning, and vanished like mist, turning the vast, cumbersome armies of the Adilshahi and the Mughals into helpless behemoths.   
            </p>
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

        {/* Stats Section - Outside Grid, Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-stats-container"
        >
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
        </motion.div>

        {/* CTA Buttons - Outside Grid, Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons-container"
        >
          <div className="hero-buttons">
            <a href="#biography" className="btn-primary">
              Explore Legacy
            </a>
            <a href="/biography" className="btn-secondary">
              Learn History
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}