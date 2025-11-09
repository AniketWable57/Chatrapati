import { warriors } from '../warriors';
import '../../../styles/warrior-details-page.css';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WarriorDetailPage(props: PageProps) {
  // Await the params promise in App Router
  const params = await props.params;
  const { id } = params;

  console.log('Received ID:', id); // For debugging

  // If no ID is provided, show error
  if (!id) {
    return (
      <div className="warrior-detail-container">
        <div className="warrior-not-found">
          <h1>Invalid Warrior ID</h1>
          <p className="warrior-id-message">No ID provided in URL</p>
          <p className="warrior-not-found-text">
            Please check the URL and make sure you're accessing a valid warrior page.
          </p>
          <a href="/warriors" className="back-button">
            ← Back to Warriors
          </a>
        </div>
      </div>
    );
  }

  const warrior = warriors.find(w => w.id === id);

  if (!warrior) {
    return (
      <div className="warrior-detail-container">
        <div className="warrior-not-found">
          <h1>Warrior Not Found</h1>
          <p className="warrior-id-message">ID: <span className="warrior-id">"{id}"</span></p>
          <p className="warrior-not-found-text">
            The warrior with ID "{id}" could not be found in our records.
          </p>
          <div className="available-ids">
            <p>Available warrior IDs:</p>
            <ul>
              {warriors.map(w => (
                <li key={w.id}>{w.id}</li>
              ))}
            </ul>
          </div>
          <a href="/warriors" className="back-button">
            ← Back to Warriors
          </a>
        </div>
      </div>
    );
  }

  // Rest of your component remains the same...
  return (
    <div className="warrior-detail-container">
      <div className="warrior-detail-card">
        <div className="warrior-detail-image-section">
          <img
            src={warrior.image}
            alt={warrior.name}
            className="warrior-detail-image"
          />
          {warrior.images && warrior.images.length > 0 && (
            <div className="warrior-image-gallery">
              <h3>Gallery</h3>
              <div className="gallery-grid">
                {warrior.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${warrior.name} ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="warrior-detail-content">
          <h1 className="warrior-detail-name">{warrior.name}</h1>
          <p className="warrior-detail-title">{warrior.title}</p>
          <p className="warrior-detail-era">{warrior.era}</p>
          
          <div className="warrior-basic-info">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Service Period:</span>
                <span className="info-value">{warrior.servicePeriod}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Commander:</span>
                <span className="info-value">{warrior.commander}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Birth:</span>
                <span className="info-value">{warrior.fullHistory.birthDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Death:</span>
                <span className="info-value">{warrior.fullHistory.deathDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Birthplace:</span>
                <span className="info-value">{warrior.fullHistory.birthplace}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Clan:</span>
                <span className="info-value">{warrior.fullHistory.clan}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Rank:</span>
                <span className="info-value">{warrior.fullHistory.rank}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Allegiance:</span>
                <span className="info-value">{warrior.fullHistory.allegiance}</span>
              </div>
            </div>
          </div>

          <div className="warrior-detail-description">
            <h3>Biography</h3>
            <p>{warrior.description}</p>
          </div>

          <div className="warrior-detail-significance">
            <h3>Historical Significance</h3>
            <p>{warrior.significance}</p>
          </div>

          <div className="warrior-detail-achievements">
            <h3>Key Achievements</h3>
            <ul>
              {warrior.fullHistory.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="warrior-detail-battles">
            <h3>Major Battles</h3>
            <ul>
              {warrior.fullHistory.battles.map((battle, index) => (
                <li key={index}>{battle}</li>
              ))}
            </ul>
          </div>

          <div className="warrior-detail-weapons">
            <h3>Weapons & Equipment</h3>
            <div className="weapons-list">
              {warrior.fullHistory.weapons.map((weapon, index) => (
                <span key={index} className="weapon-tag">{weapon}</span>
              ))}
            </div>
          </div>

          {warrior.fullHistory.militaryStrategies && (
            <div className="warrior-detail-strategies">
              <h3>Military Strategies</h3>
              <ul>
                {warrior.fullHistory.militaryStrategies.map((strategy, index) => (
                  <li key={index}>{strategy}</li>
                ))}
              </ul>
            </div>
          )}

          {warrior.fullHistory.horseName && (
            <div className="warrior-detail-horse">
              <h3>War Horse</h3>
              <p>{warrior.fullHistory.horseName}</p>
            </div>
          )}

          {warrior.fullHistory.training && (
            <div className="warrior-detail-training">
              <h3>Training</h3>
              <p>{warrior.fullHistory.training}</p>
            </div>
          )}

          {warrior.fullHistory.mentor && (
            <div className="warrior-detail-mentor">
              <h3>Mentor</h3>
              <p>{warrior.fullHistory.mentor}</p>
            </div>
          )}

          {warrior.fullHistory.lastWords && (
            <div className="warrior-detail-lastwords">
              <h3>Last Words</h3>
              <p className="last-words">"{warrior.fullHistory.lastWords}"</p>
            </div>
          )}

          {warrior.fullHistory.memorials && warrior.fullHistory.memorials.length > 0 && (
            <div className="warrior-detail-memorials">
              <h3>Memorials</h3>
              <ul>
                {warrior.fullHistory.memorials.map((memorial, index) => (
                  <li key={index}>{memorial}</li>
                ))}
              </ul>
            </div>
          )}

          <a href="/warriors" className="back-button">
            ← Back to Warriors
          </a>
        </div>
      </div>
    </div>
  );
}