"use client"

import TimelineItem from "./timeline-item"
import "../styles/timeline-section.css"

const timelineEvents = [
  {
    year: "1630",
    title: "Birth of a Legend",
    description:
      "Shivaji Maharaj is born in Shivneri Fort to Jijabai and Shahji Bhosle. He grows up in an era of Mughal dominance and learns military strategy from his mentors.",
  },
  {
    year: "1655",
    title: "First Fort Captured",
    description:
      "At age 25, Shivaji captures Torna Fort from the Adil Shahi dynasty, marking the beginning of his territorial expansion and establishing his authority.",
  },
  {
    year: "1664",
    title: "Battle of Pratapgad",
    description:
      "Victory over Afzal Khan in the Battle of Pratapgad demonstrates Shivaji's military genius and brings him widespread recognition across the Deccan.",
  },
  {
    year: "1670",
    title: "Naval Power Established",
    description:
      "Shivaji creates a formidable navy with over 100 vessels, controlling the Arabian Sea and protecting Maratha maritime interests.",
  },
  {
    year: "1674",
    title: "Coronation",
    description:
      "Shivaji formally crowns himself as Chhatrapati (supreme ruler) in Raigarh, establishing the Maratha Empire as an independent sovereign state.",
  },
  {
    year: "1680",
    title: "Legacy Continues",
    description:
      "Shivaji Maharaj passes away, but his empire and legacy continue to inspire generations and shape the course of Indian history.",
  },
]

export default function TimelineSection() {
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
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
