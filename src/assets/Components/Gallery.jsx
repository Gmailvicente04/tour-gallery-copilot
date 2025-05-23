import React from 'react';
import TourCard from './TourCard';
import './Gallery.jsx';

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export const someOtherFunction = () => {};

export default Gallery;