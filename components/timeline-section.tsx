"use client"

import TimelineItem from "./timeline-item"
import "../styles/timeline-section.css"
import { useRouter } from "next/navigation"

const timelineEvents = [
  {
    id: 1,
    year: "1630",
    title: "Birth of a Legend",
    description:
      "Shivaji Maharaj is born in Shivneri Fort to Jijabai and Shahji Bhosle. He grows up in an era of Mughal dominance and learns military strategy from his mentors.",
    fullContent: {
      images: [
        "/images/shivneri-fort.jpg",
        "/images/shivaji-birth.jpg"
      ],
      detailedDescription: `
        <h3>The Divine Beginning</h3>
        <p>Shivaji Bhosle was born on February 19, 1630, in the formidable Shivneri Fort. His birth was celebrated as the arrival of a divine protector of Dharma. His mother, Jijabai, instilled in him the values of Hindu righteousness and the stories of great Hindu epics like Ramayana and Mahabharata.</p>
        
        <h3>Early Education and Training</h3>
        <p>Under the guidance of his mentor Dadoji Konddev, Shivaji mastered military strategy, statecraft, and the art of governance. He showed exceptional leadership qualities from a young age, often organizing his friends into mock armies and practicing guerrilla tactics in the Sahyadri mountains.</p>
        
        <h3>The Spiritual Foundation</h3>
        <p>His mother Jijabai and spiritual guru Samarth Ramdas shaped his vision for Swarajya - a kingdom where Hindu traditions would flourish and people would live without fear of religious persecution.</p>
      `
    }
  },
  {
    id: 2,
    year: "1655",
    title: "First Fort Captured",
    description:
      "At age 25, Shivaji captures Torna Fort from the Adil Shahi dynasty, marking the beginning of his territorial expansion and establishing his authority.",
    fullContent: {
      images: [
        "/images/torna-fort.jpg",
        "/images/fort-capture.jpg"
      ],
      detailedDescription: `
        <h3>The Dawn of Swarajya</h3>
        <p>At just 25 years of age, Shivaji Maharaj captured the mighty Torna Fort, marking the first territorial acquisition of what would become the great Maratha Empire. This bold move demonstrated his strategic brilliance and unwavering determination.</p>
        
        <h3>Military Genius</h3>
        <p>The capture of Torna Fort was achieved through careful planning and surprise attack. Shivaji studied the fort's weaknesses, gathered local support, and launched a swift operation that caught the Adil Shahi forces completely off guard.</p>
        
        <h3>Symbolic Victory</h3>
        <p>This victory was not just about capturing a fort; it was a declaration of Hindu sovereignty. It sent a powerful message across the Deccan that a new power had emerged to challenge foreign domination.</p>
      `
    }
  },
  {
    id: 3,
    year: "1664",
    title: "Battle of Pratapgad",
    description:
      "Victory over Afzal Khan in the Battle of Pratapgad demonstrates Shivaji's military genius and brings him widespread recognition across the Deccan.",
    fullContent: {
      images: [
        "/images/pratapgad-fort.jpg",
        "/images/afzal-khan-battle.jpg"
      ],
      detailedDescription: `
        <h3>The Epic Confrontation</h3>
        <p>The Battle of Pratapgad in 1664 stands as one of the most brilliant military victories in Indian history. Faced with the mighty Afzal Khan and his massive army, Shivaji Maharaj turned what seemed like certain defeat into a glorious victory.</p>
        
        <h3>The Tiger's Claws</h3>
        <p>Knowing Afzal Khan's treacherous nature, Shivaji came prepared for the supposed peace meeting armed with hidden weapons - the bagh nakh (tiger claws) and metal armor under his clothes. When Afzal Khan attempted to assassinate him during their embrace, Shivaji's quick thinking and preparation saved his life and turned the tables.</p>
        
        <h3>Divine Protection</h3>
        <p>This victory was seen as a testament to divine grace and Shivaji's righteous cause. The Maratha forces, though outnumbered, fought with unparalleled courage and strategic superiority, routing the larger Adil Shahi army.</p>
      `
    }
  },
  {
    id: 4,
    year: "1670",
    title: "Naval Power Established",
    description:
      "Shivaji creates a formidable navy with over 100 vessels, controlling the Arabian Sea and protecting Maratha maritime interests.",
    fullContent: {
      images: [
        "/images/maratha-navy.jpg",
        "/images/naval-fort.jpg"
      ],
      detailedDescription: `
        <h3>Visionary Maritime Strategy</h3>
        <p>Shivaji Maharaj demonstrated extraordinary foresight by establishing a powerful navy at a time when most Indian rulers focused only on land warfare. He recognized that true sovereignty required control over both land and sea.</p>
        
        <h3>The Sea Forts</h3>
        <p>He built formidable sea forts like Sindhudurg and Vijaydurg that served as naval bases and provided strategic control over the Konkan coastline. These forts were engineering marvels, designed to withstand both enemy attacks and the fury of the Arabian Sea.</p>
        
        <h3>Protector of the Coast</h3>
        <p>The Maratha navy protected Hindu merchants and coastal communities from European pirates and foreign naval powers. It ensured the economic prosperity of the Swarajya and secured its western frontiers.</p>
      `
    }
  },
  {
    id: 5,
    year: "1674",
    title: "Coronation",
    description:
      "Shivaji formally crowns himself as Chhatrapati (supreme ruler) in Raigarh, establishing the Maratha Empire as an independent sovereign state.",
    fullContent: {
      images: [
        "/images/coronation.jpg",
        "/images/raigarh-fort.jpg"
      ],
      detailedDescription: `
        <h3>The Sacred Coronation</h3>
        <p>On June 6, 1674, Shivaji Maharaj was formally crowned as Chhatrapati in a grand ceremony at Raigarh Fort. This historic event marked the formal establishment of the Maratha Empire as an independent Hindu sovereign state.</p>
        
        <h3>Vedic Rituals</h3>
        <p>The coronation was conducted according to ancient Vedic rituals by Pandit Gaga Bhatt, who traced Shivaji's lineage back to the Sisodia Rajputs of Mewar. The ceremonies lasted several days and involved elaborate Hindu rites and celebrations.</p>
        
        <h3>Sovereign Hindu Power</h3>
        <p>By crowning himself as Chhatrapati, Shivaji declared to the world that Hindu sovereignty had been restored after centuries of foreign domination. He established a kingdom based on Dharma, justice, and the welfare of all his subjects.</p>
      `
    }
  },
  {
    id: 6,
    year: "1680",
    title: "Legacy Continues",
    description:
      "Shivaji Maharaj passes away, but his empire and legacy continue to inspire generations and shape the course of Indian history.",
    fullContent: {
      images: [
        "/images/legacy.jpg",
        "/images/maratha-empire.jpg"
      ],
      detailedDescription: `
        <h3>The Immortal Legacy</h3>
        <p>Chhatrapati Shivaji Maharaj passed away on April 3, 1680, but his legacy became immortal. He left behind a vast empire, a powerful military system, and an administrative framework that would endure for centuries.</p>
        
        <h3>Eternal Inspiration</h3>
        <p>His life became a beacon of inspiration for generations of freedom fighters and continues to inspire millions today. His principles of Swarajya, good governance, and righteous warfare remain relevant across time.</p>
        
        <h3>The Maratha Confederacy</h3>
        <p>Under his successors, particularly the Peshwas, the Maratha Empire grew to become the dominant power in India, checking foreign invasions and preserving Hindu culture and traditions across the subcontinent.</p>
      `
    }
  },
]

export default function TimelineSection() {
  const router = useRouter()
  const displayedEvents = timelineEvents.slice(0, 5)
  const hasMoreEvents = timelineEvents.length > 5

  const handleEventClick = (eventId: number) => {
    router.push(`/events/${eventId}`)
  }

  const handleViewAll = () => {
    router.push('/timeline')
  }

  return (
    <section className="timeline-section">
      <div className="timeline-content">
        {/* Section Header */}
        <div className="timeline-header">
          <p className="timeline-subtitle">KEY MILESTONES</p>
          <h2 className="timeline-title">Timeline of Glory</h2>
        </div>

        {/* Timeline */}
        <div className="timeline-list">
          {displayedEvents.map((event, index) => (
            <TimelineItem
              key={event.id}
              year={event.year}
              title={event.title}
              description={event.description}
              isEven={index % 2 === 0}
              onClick={() => handleEventClick(event.id)} // This should work now
            />
          ))}
        </div>

        {/* Continue Reading Button */}
        {hasMoreEvents && (
          <div className="timeline-actions">
            <button 
              className="continue-reading-btn"
              onClick={handleViewAll}
            >
              Continue Reading
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
            </button>
          </div>
        )}
      </div>
    </section>
  )
}