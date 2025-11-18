import React from 'react';
import '../styles/rajmudra-section.css';

const RajmudraSection: React.FC = () => {
  return (
    <section className="rajmudra-section">
      <div className="rajmudra-content">
        <div className="rajmudra-header">
          <p className="rajmudra-subtitle">HERITAGE</p>
          <h2 className="rajmudra-title">Rajmudra of Swarajya</h2>
        </div>

        {/* Image at the top */}
        <div className="rajmudra-image-container">
          <img 
            src="/rajmudra-section.png" 
            alt="Shivaji Maharaj's Rajmudra" 
            className="rajmudra-image"
          />
        </div>

        {/* Content in vertical sequence below the image */}
        <div className="rajmudra-text-container">
          <div className="sanskrit-text">
            <p className="sanskrit-verse">
              प्रतिपच्चंद्रलेखेव वर्धिष्णुर्विश्ववंदिता॥
            </p>
            <p className="sanskrit-verse">
              साहसूनोः शिवस्यैषा मुद्रा भद्राय राजते॥
            </p>
          </div>

          {/* Meaning section */}
          <div className="meaning-container">
            <h3 className="meaning-title">Meaning</h3>
            <p className="meaning-text">
              Ever growing in splendour like the moon on the first day of the bright half of the month and adored by the entire world, this seal of Chhatrapati Shivaji (Maharaj), the son of Shahaji, shines for the benediction and well-being of all.
            </p>
          </div>

          {/* Significance section */}
          <div className="significance-container">
            <h3 className="significance-title">Significance of Rajmudra</h3>
            <div className="significance-content">
              <p className="significance-text">
                The Rajmudra (Royal Seal) of Chhatrapati Shivaji Maharaj represents the core principles and vision of Swarajya:
              </p>
              <ul className="significance-list">
                <li className="significance-item">
                  <strong>Symbol of Sovereignty:</strong> Represented the independent Maratha kingdom and its self-rule
                </li>
                <li className="significance-item">
                  <strong>People's Welfare:</strong> Emphasized that the kingdom existed for the well-being of all subjects
                </li>
                <li className="significance-item">
                  <strong>Progressive Growth:</strong> Compared to the growing moon, symbolizing continuous expansion and prosperity
                </li>
                <li className="significance-item">
                  <strong>Global Recognition:</strong> Aspired for worldwide respect and admiration for the Maratha rule
                </li>
                <li className="significance-item">
                  <strong>Divine Mandate:</strong> Reflected the belief that the rule was for the blessing and benefit of all people
                </li>
              </ul>
              <p className="significance-conclusion">
                This seal was used on all official documents and proclamations, embodying Shivaji Maharaj's vision of a just, progressive, and welfare-oriented kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RajmudraSection;