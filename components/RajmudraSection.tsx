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

        

          
        </div>
      </div>
    </section>
  );
};

export default RajmudraSection;