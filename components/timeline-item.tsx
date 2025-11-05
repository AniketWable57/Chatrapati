"use client"

import { motion } from "framer-motion"
import "../styles/timeline-item.css"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isEven: boolean
  onClick?: () => void  // Add this line
}

export default function TimelineItem({ year, title, description, isEven, onClick }: TimelineItemProps) {
  const wrapperClass = isEven ? "timeline-item-wrapper even" : "timeline-item-wrapper odd"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={wrapperClass}
      onClick={onClick}  // Make sure this is here
    >
      {/* Timeline Content */}
      <div className="timeline-item-content">
        <motion.div 
          className="timeline-item-card parchment"
          whileHover={{ 
            scale: 1.02,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="timeline-year">{year}</p>
          <h3 className="timeline-item-title">{title}</h3>
          <p className="timeline-item-description">{description}</p>
          
          {/* Click hint indicator */}
          <motion.div 
            className="click-indicator"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read more</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline Center Marker */}
      <div className="timeline-marker">
        <motion.div 
          whileHover={{ scale: 1.2 }} 
          className="timeline-dot" 
        />
        <div className="timeline-line" />
      </div>
    </motion.div>
  )
}