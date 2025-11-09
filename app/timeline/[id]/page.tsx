import { timelineEvents } from '../timeline';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../timeline-details-page.css';
import { ArrowLeft, Calendar, MapPin, Clock, Sword } from 'lucide-react';

interface EventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: EventDetailPageProps) {
  // Await the params promise
  const { id } = await params;
  const event = timelineEvents.find(e => e.id.toString() === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="timeline-details-page">
      <div className="details-container">
        <Link
          href="/timeline"
          className="back-button"
        >
          <ArrowLeft className="icon-small" />
          Back to Timeline
        </Link>

        <div className="event-header">
          <div className="badge-container">
            <div className="year-badge-large">
              <Calendar className="icon-small" />
              {event.year}
            </div>
            <div className="historic-badge">
              <Clock className="icon-small" />
              Historic Event
            </div>
          </div>

          <h1 className="event-main-title">
            {event.title}
          </h1>
          <p className="event-header-description">
            {event.description}
          </p>
        </div>

        <div className="details-grid">
          <div className="description-section">
            <div className="content-card">
              <div 
                className="prose-content"
                dangerouslySetInnerHTML={{ __html: event.fullContent.detailedDescription }}
              />
            </div>
          </div>

          <div className="sidebar-section">
            <div className="images-card">
              <h3 className="sidebar-title">
                <Sword className="icon-small" />
                Historical Images
              </h3>
              <div className="images-grid">
                {event.fullContent.images.map((image, index) => (
                  <div key={index} className="image-placeholder">
                    <div className="image-content">
                      <MapPin className="placeholder-icon" />
                    </div>
                    <div className="image-overlay">
                      <span className="overlay-text">
                        View Image
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="facts-card">
              <h3 className="sidebar-title">Event Summary</h3>
              <div className="facts-list">
                <div className="fact-item">
                  <span className="fact-label">Year</span>
                  <span className="fact-value">{event.year}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Significance</span>
                  <span className="fact-value historic">Historic</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Period</span>
                  <span className="fact-value">17th Century</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return timelineEvents.map((event) => ({
    id: event.id.toString(),
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps) {
  const { id } = await params;
  const event = timelineEvents.find(e => e.id.toString() === id);
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `${event.title} - ${event.year} | Shivaji Maharaj Timeline`,
    description: event.description,
  };
}