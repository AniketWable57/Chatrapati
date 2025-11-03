"use client"

import { motion } from "framer-motion"
import "../styles/timeline-item.css"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isEven: boolean
}

export default function TimelineItem({ year, title, description, isEven }: TimelineItemProps) {
  const wrapperClass = isEven ? "timeline-item-wrapper even" : "timeline-item-wrapper odd"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={wrapperClass}
    >
      {/* Timeline Content */}
      <div className="timeline-item-content">
        <div className="timeline-item-card parchment">
          <p className="timeline-year">{year}</p>
          <h3 className="timeline-item-title">{title}</h3>
          <p className="timeline-item-description">{description}</p>
        </div>
      </div>

      {/* Timeline Center Marker */}
      <div className="timeline-marker">
        <motion.div whileHover={{ scale: 1.2 }} className="timeline-dot" />
        <div className="timeline-line" />
      </div>
    </motion.div>
  )
}
