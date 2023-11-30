import React from 'react';

const FeatureCard = ({ title, featureId }) => {
  return (
    <div className="feature-card">
      <div className="feature-header">
        <span className="feature-id">{featureId}</span>
        <h3 className="feature-title">{title}</h3>
      </div>
      <div className="feature-toggle">
        <input type="checkbox" id="featureRequest" name="featureRequest" />
        <label htmlFor="featureRequest">Feature Request</label>
      </div>
      <div className="feature-footer">
        <button className="feature-button">Conduct Security Vulnerability Assessment</button>
      </div>
    </div>
  );
};

export default FeatureCard;

