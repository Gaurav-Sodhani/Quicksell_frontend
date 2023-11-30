import React from 'react';
import './FeatureRequestCard.css';

const FeatureRequestCard = ({ ticket, user }) => {
  return (
    <div className="feature-request-card">
      <div className="feature-request-card__title">{ticket['id']}</div>
      <div className="feature-request-card__user">
        <input className="feature-request-card__user__radio" type="radio" value="Male" name="gender" />
        <div className="feature-request-card__user__description">{ticket['title']}</div>
      </div>
      <div>
        <div className='feature-request-card__user__request_type'>
          <div className='feature-request-card__user__request_type_icon'>{"!"}</div>
          <div className='feature-request-card__user__request_type_text'>{ticket['tag']}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestCard;
