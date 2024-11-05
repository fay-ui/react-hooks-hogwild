import React, { useState } from "react";

function HogTile({ hog, hideHog }) {
    // Removed state for toggling details, since you don't want any click action
    const { name, image, specialty, weight, greased, highestMedal } = hog;

    // Styling for the images to make them smaller
    const imageStyle = {
        width: '150px', // Adjust size as needed
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div className="hog-tile" style={{ margin: "10px", textAlign: "center" }}>
            <h3>{name}</h3>
            {/* Apply the smaller image style */}
            <img src={image} alt={name} style={imageStyle} />
            <div className="details">
                <p><strong>Specialty:</strong> {specialty}</p>
                <p><strong>Weight:</strong> {weight} lbs</p>
                <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
                <p><strong>Highest Medal:</strong> {highestMedal}</p>
            </div>
            <button onClick={() => hideHog(name)}>
                Hide
            </button>
        </div>
    );
}

export default HogTile;
