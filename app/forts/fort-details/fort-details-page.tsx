"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  Shield, 
  Clock, 
  Navigation, 
  Star, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Grid3X3,
  Sword,
  ChevronRightIcon,
  ExternalLink,
  Map
} from "lucide-react"
import { useState, useRef, useCallback, useMemo } from "react"
import "../../../styles/forts-details.css"
import { warriors } from "@/app/warriors/warriors"

// Types (included in the same file)
interface FortLocation {
  latitude: number
  longitude: number
  googleMapsLink: string
  address: string
}

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

interface Fort {
  id: string
  name: string
  region: string
  yearBuilt: string
  garrison: string
  description: string
  significance: string
  image: string
  images?: string[]
  location: FortLocation
  fullHistory: FortDetails
}

interface FortDetailsPageProps {
  fort: Fort
}

// Reusable components
const InfoItem = ({ icon: Icon, label, value }: { 
  icon: React.ComponentType<any>, 
  label: string, 
  value: string 
}) => (
  <div className="info-item">
    <Icon className="info-icon" />
    <div>
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  </div>
)

const ImageModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev,
  fortName 
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  fortName: string
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="image-modal"
        onClick={onClose}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <button className="modal-nav modal-nav-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
          <ChevronLeft size={32} />
        </button>
        
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img 
            src={images[currentIndex]} 
            alt={`${fortName} view ${currentIndex + 1}`}
            loading="eager"
          />
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        <button className="modal-nav modal-nav-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
          <ChevronRight size={32} />
        </button>
      </motion.div>
    )}
  </AnimatePresence>
)

const WarriorCard = ({ 
  warrior, 
  onNavigate 
}: { 
  warrior: any, 
  onNavigate: (id: string) => void 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="warrior-card"
    onClick={() => onNavigate(warrior.id)}
  >
    <img 
      src={warrior.image} 
      alt={warrior.name}
      className="warrior-image"
    />
    <div className="warrior-content">
      <h3 className="warrior-name">{warrior.name}</h3>
      <p className="warrior-title">{warrior.title}</p>
      <p className="warrior-era">{warrior.era}</p>
      
      <div className="warrior-badges">
        <span className="warrior-badge">{warrior.servicePeriod}</span>
        <span className="warrior-badge">{warrior.fullHistory.rank}</span>
      </div>
      
      <p className="warrior-description">
        {warrior.description.length > 120 
          ? warrior.description.substring(0, 120) + '...'
          : warrior.description
        }
      </p>
      
      <div className="warrior-stats">
        <div className="stat">
          <span className="stat-label">Battles</span>
          <span className="stat-value">{warrior.fullHistory.battles.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Achievements</span>
          <span className="stat-value">{warrior.fullHistory.achievements.length}</span>
        </div>
      </div>
      
      <div className="warrior-card-footer">
        <button 
          className="view-profile-btn"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(warrior.id);
          }}
        >
          View Profile <ChevronRightIcon size={16} />
        </button>
        <div className="weapon-count">
          <Sword size={14} />
          {warrior.fullHistory.weapons.length} weapons
        </div>
      </div>
    </div>
  </motion.div>
)

const WarriorsCarousel = ({ 
  warriors, 
  fortName,
  onWarriorNavigate 
}: { 
  warriors: any[], 
  fortName: string,
  onWarriorNavigate: (id: string) => void 
}) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8
      carouselRef.current.scrollBy({ 
        left: -scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }, [])

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8
      carouselRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }, [])

  if (warriors.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="warriors-section"
      >
        <div className="no-warriors">
          <Sword className="no-warriors-icon" size={48} />
          <h3>No Warriors Associated</h3>
          <p>There are no recorded warriors specifically associated with {fortName}.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="warriors-section"
    >
      <div className="warriors-header">
        <h2 className="warriors-title">
          <Sword className="sword-icon" size={32} />
          Legendary Warriors of {fortName}
        </h2>
        <div className="warriors-nav">
          <button 
            className="nav-button" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="nav-button" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="warriors-carousel" ref={carouselRef}>
        {warriors.map((warrior, index) => (
          <WarriorCard
            key={warrior.id}
            warrior={warrior}
            onNavigate={onWarriorNavigate}
          />
        ))}
      </div>
    </motion.div>
  )
}

const LocationMap = ({ fort }: { fort: Fort }) => {
  const embedUrl = `https://maps.google.com/maps?q=${fort.location.latitude},${fort.location.longitude}&z=15&output=embed`

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="location-map-section"
    >
      <div className="map-header">
        <Map className="map-icon" size={20} />
        <h4>Location Map</h4>
      </div>
      
      <div className="map-container">
        <iframe
          src={embedUrl}
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Location of ${fort.name}`}
        />
      </div>
    </motion.div>
  )
}

export default function FortDetailsPage({ fort }: FortDetailsPageProps) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)
  
  // Memoized values
  const allImages = useMemo(() => [fort.image, ...(fort.images || [])], [fort.image, fort.images])
  const displayedImages = useMemo(() => 
    showAllImages ? allImages : allImages.slice(0, 6), 
    [showAllImages, allImages]
  )
  const hasMoreImages = allImages.length > 6

  // Get related warriors
  const relatedWarriors = useMemo(() => 
    warriors.filter(warrior => warrior.relatedForts.includes(fort.id)),
    [fort.id]
  )

  // Event handlers
  const navigateBack = useCallback(() => router.back(), [router])
  
  const nextImage = useCallback(() => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % allImages.length : null)
  }, [allImages.length])

  const prevImage = useCallback(() => {
    setSelectedImage(prev => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null)
  }, [allImages.length])

  const closeModal = useCallback(() => setSelectedImage(null), [])
  
  const openImage = useCallback((index: number) => setSelectedImage(index), [])
  
  const toggleShowAllImages = useCallback(() => setShowAllImages(prev => !prev), [])

  const navigateToWarrior = useCallback((warriorId: string) => {
    router.push(`/warriors/${warriorId}`)
  }, [router])

  return (
    <div className="fort-details-page">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={navigateBack}
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
          <img 
            src={fort.image} 
            alt={fort.name} 
            loading="eager"
            width={1200}
            height={600}
          />
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
                <InfoItem icon={MapPin} label="Region" value={fort.region} />
                <InfoItem icon={Calendar} label="Year Built/Captured" value={fort.yearBuilt} />
                <InfoItem icon={Users} label="Peak Garrison" value={fort.garrison} />
                <InfoItem icon={Shield} label="Built By" value={fort.fullHistory.builtBy} />
                <InfoItem icon={Clock} label="Construction Period" value={fort.fullHistory.constructionPeriod} />
                <InfoItem icon={Navigation} label="Area" value={fort.fullHistory.area} />
              </div>
            </div>

            {/* Image Gallery */}
            {allImages.length > 1 && (
              <div className="info-card">
                <div className="gallery-header">
                  <h3>Gallery</h3>
                  <span className="image-count">{allImages.length} photos</span>
                </div>
                <div className="image-gallery">
                  {displayedImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="gallery-item"
                      onClick={() => openImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${fort.name} view ${index + 1}`}
                        loading="lazy"
                        width={200}
                        height={150}
                      />
                      <div className="gallery-overlay">
                        <span className="view-text">View</span>
                      </div>
                    </motion.div>
                  ))}
                  
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

            {/* Architecture & Features */}
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

            {fort.fullHistory.features && fort.fullHistory.features.length > 0 && (
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
            <div className="detail-section">
              <h2>About {fort.name}</h2>
              <p className="fort-full-description">{fort.description}</p>
            </div>

            <div className="detail-section">
              <h3>Historical Significance</h3>
              <p className="significance-text">{fort.significance}</p>
            </div>

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

            <div className="detail-section">
              <h3>Current Status</h3>
              <p className="status-description">{fort.fullHistory.currentStatus}</p>
            </div>

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

            {/* Location Section */}
            <div className="detail-section">
              <h3>Location & Directions</h3>
              <div className="location-info">
              
                
                {/* Interactive Map - Always Visible */}
                <LocationMap fort={fort} />
                
                <a 
                  href={fort.location.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-maps-button"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Warriors Carousel Section */}
        <WarriorsCarousel 
          warriors={relatedWarriors}
          fortName={fort.name}
          onWarriorNavigate={navigateToWarrior}
        />
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        images={allImages}
        currentIndex={selectedImage || 0}
        onNext={nextImage}
        onPrev={prevImage}
        fortName={fort.name}
      />
    </div>
  )
}