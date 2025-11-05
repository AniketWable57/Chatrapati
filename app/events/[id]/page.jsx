// app/events/[id]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'

// This would typically come from a shared data file
const timelineEvents = [
  // ... same events array as above ...
]

/**
 * @typedef {Object} EventPageProps
 * @property {Object} params
 * @property {string} params.id
 */

export default function EventPage({ params }) {
  const event = timelineEvents.find(e => e.id === parseInt(params.id))
  
  if (!event) {
    notFound()
  }

  return (
    <div className="event-page">
      <header>
        {/* Your existing header component */}
      </header>

      <main className="event-content">
        <div className="event-hero">
          <h1>{event.title}</h1>
          <p className="event-year">{event.year}</p>
        </div>

        <div className="event-images">
          {event.fullContent.images.map((image, index) => (
            <div key={index} className="event-image-container">
              <Image 
                src={image} 
                alt={`${event.title} - Image ${index + 1}`}
                width={600}
                height={400}
                className="event-image"
              />
            </div>
          ))}
        </div>

        <div 
          className="event-details"
          dangerouslySetInnerHTML={{ __html: event.fullContent.detailedDescription }}
        />
      </main>

      <footer>
        {/* Your existing footer component */}
      </footer>
    </div>
  )
}