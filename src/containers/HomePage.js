import React from 'react';
import MapContainer from '../components/common/MapContainer';
import MenuSection from '../components/home/MenuSection';

const HomePage = () => (
  <div>
    <div className="home-left-section">
      <MenuSection />
    </div>
    <div className="map-canvas">
      <MapContainer lat={process.env.DEFAULT_LAT} lng={process.env.DEFAULT_LNG} />
    </div>
  </div>
);

export default HomePage;
