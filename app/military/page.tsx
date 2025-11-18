import MilitarySection from "./military-section"
import Link from 'next/link';
import { warriors } from '../warriors/warriors';
import '../../styles/warriors-page.css';

export default function Military() {
  // Get first 5 warriors
  const firstFiveWarriors = warriors.slice(0, 6);

  return (
    <div className="container">
      <MilitarySection/>
      
      {/* Warriors Preview Section */}
      <section className="warriors-preview-section">
        <div className="warriors-preview-header">
          <h2 className="warriors-preview-title">Legendary Warriors</h2>
          <p className="warriors-preview-subtitle">Meet the brave heroes who shaped Maratha history</p>
        </div>
        
        <div className="warriors-preview-grid">
          {firstFiveWarriors.map((warrior) => (
            <Link 
              key={warrior.id} 
              href={`/warriors/${warrior.id}`}
              className="warrior-preview-card"
            >
              <div className="warrior-preview-image-container">
                <img
                  src={warrior.image}
                  alt={warrior.name}
                  className="warrior-preview-image"
                />
              </div>
              <div className="warrior-preview-content">
                <h3 className="warrior-preview-name">
                  {warrior.name}
                </h3>
                <p className="warrior-preview-title">{warrior.title}</p>
                <p className="warrior-preview-era">{warrior.era}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="warriors-preview-actions">
          <Link href="/warriors" className="view-all-button">
            View All Warriors
          </Link>
        </div>
      </section>
    </div>
  )
}