// src/components/HogTile.js
import React from 'react';

function HogTile({ hog }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3>{hog.name}</h3>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight} lbs</p>
        <p>Highest Medal: {hog["highest medal achieved"]}</p>
      </div>
    </div>
  );
}

export default HogTile;
