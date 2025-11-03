"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"
import "../../styles/gallery-grid.css"

const galleryItems = [
  {
    id: 1,
    category: "Portraits",
    title: "Chhatrapati Shivaji Maharaj",
    description: "Royal portrait depicting Shivaji in his coronation attire",
  },
  {
    id: 2,
    category: "Architecture",
    title: "Raigad Fort Complex",
    description: "Aerial view of the capital fort showing intricate design",
  },
  {
    id: 3,
    category: "Artifacts",
    title: "Royal Seal & Documents",
    description: "Historical seals and administrative documents",
  },
  {
    id: 4,
    category: "Weaponry",
    title: "Talwar & Battle Insignia",
    description: "Famous sword and royal insignia of Shivaji Maharaj",
  },
  {
    id: 5,
    category: "Monuments",
    title: "Raigad Monument",
    description: "Statue and memorial dedicated to Shivaji",
  },
  {
    id: 6,
    category: "Manuscripts",
    title: "Historical Manuscripts",
    description: "Ancient records and literary works from the Maratha era",
  },
  {
    id: 7,
    category: "Paintings",
    title: "Battle Scene Artwork",
    description: "Traditional Indian paintings depicting key battles",
  },
  {
    id: 8,
    category: "Cultural",
    title: "Festival & Celebrations",
    description: "Images of Gudi Padwa and cultural festivals",
  },
]

export default function GalleryGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="gallery-section">
      <div className="gallery-content">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="gallery-header"
        >
          <p className="gallery-subtitle">VISUAL HERITAGE</p>
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-description">
            Explore artifacts, monuments, and historical documentation from the Maratha Empire era
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => setSelectedId(item.id)}
              className="gallery-item"
            >
              <div className="gallery-item-box">
                {/* Placeholder with pattern */}
                <div className="gallery-pattern jali-pattern" />
                <div className="gallery-overlay">
                  <p className="gallery-category">{item.category}</p>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                </div>

                {/* Hover Overlay */}
                <div className="gallery-hover">
                  <button className="gallery-btn">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedId(null)}
          className="gallery-modal-bg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="gallery-modal"
          >
            <button onClick={() => setSelectedId(null)} className="gallery-close-btn">
              <X size={24} />
            </button>

            {(() => {
              const item = galleryItems.find((i) => i.id === selectedId)
              return (
                <div>
                  <p className="gallery-modal-category">{item?.category}</p>
                  <h3 className="gallery-modal-title">{item?.title}</h3>
                  <div className="gallery-modal-image">
                    <p className="gallery-modal-placeholder">[Gallery Image Placeholder]</p>
                  </div>
                  <p className="gallery-modal-description">{item?.description}</p>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
