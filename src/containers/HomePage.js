import React from 'react';
import MapContainer from '../components/common/MapContainer';

const HomePage = () => (
  <div>
    <div className="home-left-section"></div>
    <div className="map-canvas">
      <MapContainer lat={process.env.DEFAULT_LAT} lng={process.env.DEFAULT_LNG} />
    </div>
  </div>
);

export default HomePage;
