"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import "../../styles/fort-card.css"

interface FortCardProps {
  id: string
  name: string
  region: string
  yearBuilt: string
  garrison: string
  description: string
  significance: string
  image: string
  index: number
}

export default function FortCard({
  id,
  name,
  region,
  yearBuilt,
  garrison,
  description,
  significance,
  image,
  index,
}: FortCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    console.log('Navigating to fort ID:', id) // Debug line
    router.push(`/forts/${id}`)
  }

  // Function to truncate description to 3 lines
  const truncateDescription = (text: string, maxLines: number = 3) => {
    const words = text.split(' ')
    let lineCount = 0
    let result = []
    
    for (let word of words) {
      result.push(word)
      // Simple heuristic: assume ~8 words per line for average readability
      if (result.length % 8 === 0) {
        lineCount++
      }
      if (lineCount >= maxLines) {
        break
      }
    }
    
    const truncatedText = result.join(' ')
    // Add ellipsis if text was truncated
    return truncatedText.length < text.length ? truncatedText + '...' : truncatedText
  }

  const truncatedDescription = truncateDescription(description)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="fort-card-container"
    >
      <div className="fort-card" onClick={handleCardClick}>
        {/* Fort Image */}
        <div className="fort-image-container">
          <img 
            src={image} 
            alt={name}
            className="fort-image"
            onError={(e) => {
              e.currentTarget.src = '/images/forts/default-fort.jpg'
            }}
          />
          <div className="fort-image-overlay">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="view-details-btn"
            >
              <ArrowRight size={20} />
              View Details
            </motion.div>
          </div>
        </div>

        {/* Rest of your fort card content */}
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

        <div className="fort-body">
          <p className="fort-description">{truncatedDescription}</p>

          <div className="fort-garrison">
            <Users size={20} className="fort-garrison-icon" />
            <div className="fort-garrison-content">
              <p className="fort-garrison-label">Peak Garrison</p>
              <p className="fort-garrison-value">{garrison}</p>
            </div>
          </div>

          <div className="fort-significance">
            <p className="fort-significance-label">Historical Significance</p>
            <p className="fort-significance-text">{significance}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}