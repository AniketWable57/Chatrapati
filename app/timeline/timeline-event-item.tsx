'use client';
import Link from 'next/link';
import { ArrowRight, Calendar, Sword } from 'lucide-react';
import { TimelineEvent } from './timeline';
import './timeline-event-item.css';

interface TimelineEventItemProps {
  event: TimelineEvent;
  index: number;
  activeEvent: number | null;
  onEventClick: (id: number) => void;
}

export default function TimelineEventItem({ 
  event, 
  index, 
  activeEvent, 
  onEventClick 
}: TimelineEventItemProps) {
  return (
    <div className={`timeline-event-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
      <div className="timeline-circle"></div>

      <div className="timeline-content">
        <div 
          className="timeline-card"
          onClick={() => onEventClick(activeEvent === event.id ? 0 : event.id)}
        >
          <div className="year-badge">
            <Calendar className="icon-small" />
            {event.year}
          </div>

          <h3 className="event-title">
            {event.title}
          </h3>

          <p className="event-description">
            {event.description}
          </p>

          {activeEvent === event.id && (
            <div className="expanded-content">
              <div 
                className="detailed-description"
                dangerouslySetInnerHTML={{ __html: event.fullContent.detailedDescription }}
              />
              <div className="action-buttons">
                <Link
                  href={`/timeline/${event.id}`}
                  className="full-story-button"
                >
                  <Sword className="icon-small" />
                  Full Story
                </Link>
              </div>
            </div>
          )}

          {activeEvent !== event.id && (
            <div className="view-details">
              <Link
                href={`/timeline/${event.id}`}
                className="read-more-link"
              >
                Read Full Story
                <ArrowRight className="icon-small" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}