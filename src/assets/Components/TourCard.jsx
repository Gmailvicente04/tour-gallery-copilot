import React from 'react';
import './TourCard.jsx';

function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p className="tour-price">${price}</p>
        <p className="tour-info">{info}</p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

// filepath: /src/assets/Components/TourCard.jsx
export default TourCard;
export const someOtherFunction = () => {};