import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BikeDetails = ({ bikeId }) => {
  const [selectedColor, setSelectedColor] = useState('imageblack'); // Default color
  const [bikeDetails, setBikeDetails] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    console.log('bikeId:', bikeId);
    if (bikeId) {
      console.log('Fetching bike details...');
      // Fetch bike details based on bikeId from your API
      axios.get(`http://localhost:4000/api/bikes/${bikeId}`)
        .then((response) => {
          console.log('hii');
          setBikeDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bike details:', error);
          console.log('hii');
        });
    }
    else{
      console.log('error');
    }
  }, [bikeId]);

  return (
    <div className="bike-details-container">
      {bikeDetails && (
        <div className="bike-image-container">
          <img src={bikeDetails[selectedColor]} alt="Bike" />
        </div>
      )}
      <div className="bike-customization">
        <h2>Customization</h2>
        <div className="color-options">
          {bikeDetails && Object.keys(bikeDetails).map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={selectedColor === color ? 'active' : ''}
            >
              {color === 'imageblack' ? 'Black' : color === 'imageblue' ? 'Blue' : 'Red'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;