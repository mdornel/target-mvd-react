import React from 'react';
import avatarLogo from '../../assets/images/avatar-logo.png';

const MenuAvatar = () => (
  <div className="menu-avatar-container">
    <div className="menu-avatar-image-container">
      <div className="avatar-circle">
        <img className="avatar-logo-image" src={avatarLogo} alt="Avatar Logo" />
      </div>
    </div>
  </div>
);

export default MenuAvatar;
