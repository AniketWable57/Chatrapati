"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Calendar } from "lucide-react"
import "../../styles/fort-card.css"

interface FortCardProps {
  name: string
  region: string
  yearBuilt: string
  garrison: string
  description: string
  significance: string
  index: number
}

export default function FortCard({
  name,
  region,
  yearBuilt,
  garrison,
  description,
  significance,
  index,
}: FortCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="fort-card">
        {/* Fort Header with Gradient */}
        <div className="fort-header">
          <h3 className="fort-name">{name}</h3>
          <div className="fort-info">
            <div className="fort-info-item">
              <MapPin size={16} />
              <span>{region}</span>
            </div>
            <div className="fort-info-item">
              <Calendar size={16} />
              <span>{yearBuilt}</span>
            </div>
          </div>
        </div>

        {/* Fort Content */}
        <div className="fort-body">
          <p className="fort-description">{description}</p>

          {/* Garrison Info */}
          <div className="fort-garrison">
            <Users size={20} className="fort-garrison-icon" />
            <div className="fort-garrison-content">
              <p className="fort-garrison-label">Peak Garrison</p>
              <p className="fort-garrison-value">{garrison}</p>
            </div>
          </div>

          {/* Significance Badge */}
          <div className="fort-significance">
            <p className="fort-significance-label">Historical Significance</p>
            <p className="fort-significance-text">{significance}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
