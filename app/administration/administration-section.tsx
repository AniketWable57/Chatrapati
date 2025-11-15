"use client"

import { motion } from "framer-motion"
import { Users, Scale, BookOpen, Shield, Coins, Eye, FileText, Globe } from "lucide-react"
import Link from "next/link"
import { ashtaPradhan } from "./administration-data"
import "../../styles/administration-section.css" // Ensure this path is correct

export default function AdministrationSection() {
  const iconMap = {
    Users, Scale, BookOpen, Shield, Coins, Eye, FileText, Globe
  }

  // Debug function to check links
  const handleCardClick = (ministerId: string) => {
    console.log('🔄 Card clicked - Minister ID:', ministerId);
    console.log('🔗 Generated link:', `/administration/${ministerId}`);
  }

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
          <p className="administration-subtitle">ADMINISTRATIVE SYSTEM</p>
          <h2 className="administration-title">Ashta Pradhan Mandal</h2>
          <p className="administration-description">
            The Ashta Pradhan Mandal was far more than a simple council; it was the ingenious administrative engine meticulously crafted by Chhatrapati Shivaji Maharaj to power the burgeoning Maratha Empire, formally established during his grand coronation in 1674. This system, meaning 'Council of Eight Chiefs,' stands as a powerful testament to Shivaji’s vision for modern, accountable governance, designed to distribute administrative weight away from a single person while maintaining the ultimate authority of the Chhatrapati.

            He hand-picked these eight individuals for their proven merit, competence, and unwavering loyalty, shattering the feudal tradition of hereditary appointments and ensuring the best minds managed the state. The council functioned like a highly specialized cabinet, with each member holding a distinct, critical portfolio that touched every facet of royal and civil life.

            The Peshwa (Prime Minister) served as the chief executive, navigating policy and general administration.

            The Amatya (Finance Minister) oversaw the kingdom's treasury and taxation, acting as the state's financial conscience.

            The Senapati (Commander-in-Chief) held the crucial role of military leadership, directing the formidable Maratha army.

            Meanwhile, the Sumant (Foreign Minister) managed diplomacy, negotiating treaties and maintaining vital external relations.

            Internal security and royal household affairs fell to the Waqia-Navis, while the Sachiv (Secretary) managed all state correspondence.

            Completing the pillars were the Nyayadhish (Chief Justice), who presided over the judicial system, and the Panditrao (High Priest), who managed religious and charitable affairs.

            This structure ensured a system of checks and balances and specialization, transforming a scattered regional power into an organized, enduring administrative marvel that defined the Maratha state.          </p>
        </motion.div>

        {/* Debug Info */}
        <div style={{
          backgroundColor: '#f0f8ff',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '1px solid #d1e7ff'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc' }}>🔍 Debug Information:</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
            Total Ministers: {ashtaPradhan.length} | IDs: {ashtaPradhan.map(m => m.id).join(', ')}
          </p>
        </div>

        {/* Ashta Pradhan Grid */}
        <div className="administration-grid">
          {ashtaPradhan.map((minister, index) => {
            const IconComponent = iconMap[minister.icon as keyof typeof iconMap]
            console.log(`🎯 Rendering card for: ${minister.id} -> /administration/${minister.id}`);

            return (
              <motion.div
                key={minister.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="administration-card parchment"
              >
                <Link
                  href={`/administration/${minister.id}`}
                  className="administration-card-link"
                  onClick={() => handleCardClick(minister.id)}
                >
                  {/* Image Container */}
                  <div className="administration-image-container">
                    <img
                      src={minister.image}
                      alt={minister.title}
                      className="administration-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>

                  <div className="administration-card-content">
                    <h3 className="administration-card-title">{minister.title}</h3>
                    
                    {/* MODIFIED: Added two-line-truncate class */}
                    <p 
                      className="administration-card-text two-line-truncate"
                    >
                      {minister.description}
                    </p>
                    
                    <div className="administration-powers">
                      {/* MODIFIED: Added two-line-truncate class */}
                      <p 
                        className="administration-powers-text two-line-truncate"
                      >
                        Powers: {minister.powers}
                      </p>
                    </div>
                    
                    <div style={{
                      fontSize: '0.7rem',
                      color: '#888',
                      marginTop: '0.5rem',
                      fontFamily: 'monospace'
                    }}>
                      ID: {minister.id}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Rest of your existing component */}
        <div className="ornamental-divider" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="administration-impact"
        >
          <div className="impact-section">
            <h3 className="impact-title">Administrative Innovations</h3>
            <div className="impact-list">
              {[
                "First organized cabinet system in medieval India with clear portfolios",
                "Decentralized power structure preventing concentration of authority",
                "Regular rotation and accountability measures for ministers",
                "Integration of civil and military administration for efficient governance",
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
            <h3 className="impact-title">Lasting Legacy</h3>
            <div className="impact-list">
              {[
                "Blueprint for modern Indian cabinet system of governance",
                "Influenced federal structure and power distribution in Indian constitution",
                "Model for efficient regional administration and local self-governance",
                "Pioneered merit-based appointments in medieval Indian administration",
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