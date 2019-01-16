import React from 'react';
import { FormattedMessage } from 'react-intl';

const MenuHeader = () => (
  <div className="menu-header-container">
    <h1 className="header-title">
      <FormattedMessage id="home.header" />
    </h1>
  </div>
);

export default MenuHeader;
