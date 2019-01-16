import React from 'react';
import MenuHeader from '../home/MenuHeader';
import MenuProfileSection from '../home/MenuProfileSection';
import MenuFooter from './MenuFooter';

const MenuSection = () => (
  <div className="menu-section-container">
    <MenuHeader />
    <MenuProfileSection />
    <MenuFooter />
  </div>
);

export default MenuSection;
