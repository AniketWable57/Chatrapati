import { notFound } from "next/navigation";
import { ashtaPradhan } from "../administration-data";
import Link from "next/link";
import "./page.css";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MinisterDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const minister = ashtaPradhan.find(m => m.id === id);

  if (!minister) {
    return (
      <div className="minister-detail-page">
        <div className="back-button-container">
          <Link href="/administration" className="back-button">
            ← Back to Ashta Pradhan
          </Link>
        </div>
        
        <div className="not-found-container">
          <div className="maratha-symbol">
            <div className="symbol-circle"></div>
            <div className="symbol-blade"></div>
            <div className="symbol-handle"></div>
          </div>
          
          <h1 className="not-found-title">Har Har Mahadev</h1>
          <p className="not-found-subtitle">Minister not found in the Ashta Pradhan Council</p>
          
          <div className="not-found-debug">
            <div className="debug-card">
              <div className="debug-icon">🔍</div>
              <div className="debug-content">
                <h3>Requested ID Not Found</h3>
                <p className="debug-id">"{id || 'EMPTY'}"</p>
                <p className="debug-help">Check if the minister ID is correct</p>
              </div>
            </div>
            
            <div className="available-ministers">
              <h4>Available Ministers:</h4>
              <div className="minister-tags">
                {ashtaPradhan.map((min) => (
                  <Link 
                    key={min.id} 
                    href={`/administration/${min.id}`}
                    className="minister-tag"
                  >
                    <span className="tag-name">{min.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="minister-detail-page">
      {/* Header Navigation */}
      <header className="page-header">
        <div className="back-button-container">
          <Link href="/administration" className="back-button">
            <span className="back-arrow">←</span>
            Back to Council
          </Link>
        </div>
        
        <div className="page-breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/administration">Ashta Pradhan</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{minister.title}</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="minister-hero">
        <div className="minister-hero-content">
          {/* Minister Meta Information */}
          <div className="minister-meta">
            <div className="minister-badge">
              <span>Ashta Pradhan Council</span>
            </div>
            
            <div className="minister-header">
              <div className="minister-title-section">
                <h1 className="minister-title">{minister.title}</h1>
              </div>
              <p className="minister-role">{minister.role || "Senior Minister"}</p>
            </div>

            <div className="minister-quick-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Portfolio</span>
                  <span className="info-value">{minister.role || "Senior Minister"}</span>
                </div>
                {minister.tenure && (
                  <div className="info-item">
                    <span className="info-label">Tenure</span>
                    <span className="info-value">{minister.tenure}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Minister Visual Section */}
          <div className="minister-visual">
            <div className="image-frame">
              <div className="minister-image-container">
                <img 
                  src={minister.image} 
                  alt={`Portrait of ${minister.title}`}
                  className="minister-image"
                />
                <div className="minister-fallback">
                  <span className="fallback-text">{minister.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="minister-content">
        {/* Introduction Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Overview</h2>
            <div className="header-underline"></div>
          </div>
          <div className="section-content">
            <p className="minister-description">{minister.description}</p>
            
            {minister.powers && (
              <div className="powers-section">
                <h3>Key Powers & Authority</h3>
                <p>{minister.powers}</p>
              </div>
            )}
          </div>
        </section>
        
           {/* Quick Facts Sidebar */}
        <aside className="quick-facts-sidebar">
          <div className="sidebar-card">
            <h3>Quick Facts</h3>
            <div className="facts-list">
              <div className="fact-item">
                <span className="fact-label">Council Rank</span>
                <span className="fact-value">Ashta Pradhan</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Administration</span>
                <span className="fact-value">Maratha Empire</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Period</span>
                <span className="fact-value">17th Century</span>
              </div>
              {minister.tenure && (
                <div className="fact-item">
                  <span className="fact-label">Service Period</span>
                  <span className="fact-value">{minister.tenure}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="navigation-card">
            <h3>Other Ministers</h3>
            <div className="other-ministers">
              {ashtaPradhan
                .filter(m => m.id !== minister.id)
                .slice(0, 3)
                .map((otherMinister) => (
                  <Link 
                    key={otherMinister.id}
                    href={`/administration/${otherMinister.id}`}
                    className="other-minister-link"
                  >
                    <span className="other-minister-name">{otherMinister.title}</span>
                  </Link>
                ))
              }
            </div>
          </div>
        </aside>

        {/* Detailed Information Grid */}
        <section className="content-section">
          <div className="section-header">
            <h2>Ministerial Portfolio</h2>
            <div className="header-underline"></div>
          </div>
          
          <div className="details-grid">
            {/* Key Responsibilities */}
            <div className="detail-card responsibilities-card">
              <div className="card-header">
                <h3>Key Responsibilities</h3>
              </div>
              <div className="card-content">
                <div className="responsibilities-list">
                  {minister.responsibilities.map((responsibility, index) => (
                    <div key={index} className="responsibility-item">
                      <div className="responsibility-marker">
                        <div className="responsibility-dot"></div>
                      </div>
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notable Achievements */}
            <div className="detail-card achievements-card">
              <div className="card-header">
                <h3>Notable Achievements</h3>
              </div>
              <div className="card-content">
                <div className="achievements-list">
                  {minister.keyAchievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <div className="achievement-marker">
                        <div className="achievement-dot"></div>
                      </div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Overview */}
            <div className="detail-card overview-card">
              <div className="card-header">
                <h3>Detailed Overview</h3>
              </div>
              <div className="card-content">
                <p className="detailed-description">{minister.detailedDescription}</p>
              </div>
            </div>

            {/* Historical Significance */}
            <div className="detail-card historical-card">
              <div className="card-header">
                <h3>Historical Significance</h3>
              </div>
              <div className="card-content">
                <p className="historical-significance">{minister.historicalSignificance}</p>
                <div className="historical-footer">
                  <div className="legacy-badge">
                    <span>Maratha Legacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     
      </main>

      {/* Footer Section */}
      <footer className="minister-quote-section">
        <div className="quote-container">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            The strength of the Maratha administration lay in its decentralized council system, 
            where each minister wielded specific powers while serving the greater good of Swarajya.
          </p>
          <div className="quote-author">- Shivaji Maharaj's Administrative Vision</div>
        </div>
        
        <div className="page-actions">
          <Link href="/administration" className="action-button secondary">
            ← Back to Council
          </Link>
          <a href="#" className="action-button primary">
            ↑ Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return ashtaPradhan.map((minister) => ({
    id: minister.id,
  }));
}