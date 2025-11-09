'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import TimelineEventItem from './timeline-event-item';
import { timelineEvents, TimelineEvent } from './timeline';
import './timeline-page.css';

interface TimelinePageProps {
  showAll?: boolean;
  events?: TimelineEvent[];
}

export default function TimelinePage({ 
  showAll = false, 
  events = timelineEvents 
}: TimelinePageProps) {
  const displayedEvents = showAll ? events : events.slice(0, 5);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <div className="timeline-header">
          <h1 className="timeline-main-title">
            Chhatrapati Shivaji Maharaj
          </h1>
          <p className="timeline-subtitle">
            Journey of the Great Maratha Warrior King who established Hindu sovereignty
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-events">
            {displayedEvents.map((event, index) => (
              <TimelineEventItem
                key={event.id}
                event={event}
                index={index}
                activeEvent={activeEvent}
                onEventClick={setActiveEvent}
              />
            ))}
          </div>
        </div>

        {!showAll && (
          <div className="know-more-section">
            <Link
              href="/timeline"
              className="know-more-button"
            >
              <MapPin className="icon-medium" />
              Explore Complete Timeline
              <ArrowRight className="icon-medium" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}