import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='feature-card'>
        <div>
          <div className="feature-icon">
              <img src={icon} alt={title} />
          </div>
        </div>
        <h4 className="feature-description fs-6">{description}</h4>
    </div>
  );
};

export default FeatureCard;