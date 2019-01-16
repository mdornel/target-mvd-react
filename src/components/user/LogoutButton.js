import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { logout } from 'actions/sessionActions';

const LogoutButton = ({ logout }) => (
  <button className="logout-link" onClick={logout}>
    <FormattedMessage id="logout.button" />
  </button>
);

LogoutButton.propTypes = {
  logout: func.isRequired
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatch)(LogoutButton);
