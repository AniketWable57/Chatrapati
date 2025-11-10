"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowLeft, MapPin, Calendar, Users, Shield, Clock, Navigation, Star, X, ChevronLeft, ChevronRight, Grid3X3, Sword, ChevronRightIcon } from "lucide-react"
import { useState, useRef } from "react"
import "../../../styles/forts-details.css"
import { warriors } from "../../warriors/warriors"

interface FortDetails {
  builtBy: string
  constructionPeriod: string
  architecture: string
  majorEvents: string[]
  currentStatus: string
  area: string
  elevation?: string
  materials?: string
  features?: string[]
}

interface FortDetailsPageProps {
  fort: {
    id: string
    name: string
    region: string
    yearBuilt: string
    garrison: string
    description: string
    significance: string
    image: string
    images?: string[]
    fullHistory: FortDetails
  }
}

export default function FortDetailsPage({ fort }: FortDetailsPageProps) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)
  const warriorsCarouselRef = useRef<HTMLDivElement>(null)
  
  // Use the main image plus additional images if available
  const allImages = [fort.image, ...(fort.images || [])]
  
  // Show only first 6 images initially, or all if showAllImages is true
  const displayedImages = showAllImages ? allImages : allImages.slice(0, 6)
  const hasMoreImages = allImages.length > 6

  // Get warriors related to this fort
  const relatedWarriors = warriors.filter(warrior => 
    warrior.relatedForts.includes(fort.id)
  )

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length)
    }
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages)
  }

  const navigateToWarrior = (warriorId: string) => {
    router.push(`/warriors/${warriorId}`)
  }

  const scrollWarriorsLeft = () => {
    if (warriorsCarouselRef.current) {
      warriorsCarouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollWarriorsRight = () => {
    if (warriorsCarouselRef.current) {
      warriorsCarouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="fort-details-page">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => router.back()}
        className="back-button"
      >
        <ArrowLeft size={20} />
        Back to Forts
      </motion.button>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fort-hero"
      >
        <div className="fort-hero-image">
          <img src={fort.image} alt={fort.name} />
          <div className="fort-hero-overlay">
            <h1 className="fort-hero-title">{fort.name}</h1>
            <p className="fort-hero-subtitle">{fort.region}</p>
            <div className="fort-hero-badge">
              <Star size={16} />
              Maratha Empire Fort
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="fort-details-content">
        <div className="fort-details-grid">
          {/* Left Column - Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="fort-basic-info"
          >
            <div className="info-card">
              <h3>Fort Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <span className="info-label">Region</span>
                    <span className="info-value">{fort.region}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Calendar className="info-icon" />
                  <div>
                    <span className="info-label">Year Built/Captured</span>
                    <span className="info-value">{fort.yearBuilt}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Users className="info-icon" />
                  <div>
                    <span className="info-label">Peak Garrison</span>
                    <span className="info-value">{fort.garrison}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Shield className="info-icon" />
                  <div>
                    <span className="info-label">Built By</span>
                    <span className="info-value">{fort.fullHistory.builtBy}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Clock className="info-icon" />
                  <div>
                    <span className="info-label">Construction Period</span>
                    <span className="info-value">{fort.fullHistory.constructionPeriod}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Navigation className="info-icon" />
                  <div>
                    <span className="info-label">Area</span>
                    <span className="info-value">{fort.fullHistory.area}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            {allImages.length > 1 && (
              <div className="info-card">
                <div className="gallery-header">
                  <h3>Gallery</h3>
                  <span className="image-count">
                    {allImages.length} photos
                  </span>
                </div>
                <div className="image-gallery">
                  {displayedImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="gallery-item"
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${fort.name} view ${index + 1}`} />
                      <div className="gallery-overlay">
                        <span className="view-text">View</span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* View More Button */}
                  {hasMoreImages && !showAllImages && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="view-more-item"
                      onClick={toggleShowAllImages}
                    >
                      <div className="view-more-content">
                        <Grid3X3 size={24} />
                        <span>View All</span>
                        <span className="more-count">+{allImages.length - 6}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Show Less Button */}
                {showAllImages && hasMoreImages && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="show-less-button"
                    onClick={toggleShowAllImages}
                  >
                    Show Less
                  </motion.button>
                )}
              </div>
            )}

            {/* Architecture Info */}
            <div className="info-card">
              <h3>Architecture Style</h3>
              <p className="architecture-description">{fort.fullHistory.architecture}</p>
              {fort.fullHistory.materials && (
                <div className="materials-section">
                  <h4>Construction Materials</h4>
                  <p>{fort.fullHistory.materials}</p>
                </div>
              )}
            </div>

            {/* Features */}
            {fort.fullHistory.features && (
              <div className="info-card">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {fort.fullHistory.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Right Column - Detailed Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="fort-detailed-info"
          >
            {/* Description */}
            <div className="detail-section">
              <h2>About {fort.name}</h2>
              <p className="fort-full-description">{fort.description}</p>
            </div>

            {/* Historical Significance */}
            <div className="detail-section">
              <h3>Historical Significance</h3>
              <p className="significance-text">{fort.significance}</p>
            </div>

            {/* Major Events */}
            <div className="detail-section">
              <h3>Major Historical Events</h3>
              <ul className="events-list">
                {fort.fullHistory.majorEvents.map((event, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="event-item"
                  >
                    <span className="event-marker"></span>
                    <span className="event-text">{event}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Current Status */}
            <div className="detail-section">
              <h3>Current Status</h3>
              <p className="status-description">
               {fort.fullHistory.currentStatus}
              </p>
            </div>


            <div className="crousel">

              

            </div>


            {/* Visitor Information */}
            <div className="detail-section">
              <h3>Visitor Information</h3>
              <div className="visitor-info">
                <div className="visitor-item">
                  <strong>Best Time to Visit:</strong> October to March
                </div>
                <div className="visitor-item">
                  <strong>Difficulty Level:</strong> Moderate to Difficult
                </div>
                <div className="visitor-item">
                  <strong>Entry Fee:</strong> Nominal charges apply
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="image-modal"
          onClick={closeModal}
        >
          <button className="modal-close" onClick={closeModal}>
            <X size={24} />
          </button>
          
          <button className="modal-nav modal-nav-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft size={32} />
          </button>
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={allImages[selectedImage]} 
              alt={`${fort.name} view ${selectedImage + 1}`}
            />
            <div className="image-counter">
              {selectedImage + 1} / {allImages.length}
            </div>
          </div>
          
          <button className="modal-nav modal-nav-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight size={32} />
          </button>
        </motion.div>
      )}
    </div>
  )
} 