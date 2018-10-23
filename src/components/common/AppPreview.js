import React from 'react';
import previewImage from '../../assets/images/app-preview.png';

const AppPreview = () => (
  <div className="app-preview-container">
    <div className="app-preview-image-container">
      <img className="app-preview-image" src={previewImage} alt="App Preview" />
    </div>
  </div>
);

export default AppPreview;
