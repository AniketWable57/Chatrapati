import Link from 'next/link';
import { warriors } from './warriors';
import '../../styles/warriors-page.css';

export default function WarriorsPage() {
  return (
    <div className="warriors-container">
      <h1 className="warriors-page-title">Maratha Warriors</h1>
      
      <div className="warriors-grid">
        {warriors.map((warrior) => (
          <Link 
            key={warrior.id} 
            href={`/warriors/${warrior.id}`}
            className="warrior-card"
          >
            <div className="warrior-card-image-container">
              <img
                src={warrior.image}
                alt={warrior.name}
                className="warrior-card-image"
              />
            </div>
            <div className="warrior-card-content">
              <h2 className="warrior-name">
                {warrior.name}
              </h2>
              <p className="warrior-title">{warrior.title}</p>
              <p className="warrior-era">{warrior.era}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}