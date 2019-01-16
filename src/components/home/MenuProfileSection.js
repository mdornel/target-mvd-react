import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import MenuAvatar from '../home/MenuAvatar';
import LogoutButton from '../user/LogoutButton';
import HomeEmptyState from './HomeEmptyState';

class MenuProfileSection extends PureComponent {
  render() {
    const { user: { username } } = this.props;

    return (
      <div>
        <MenuAvatar />
        <div className="menu-actions-container">
          <div className="user-name-container">
            <span>{ username }</span>
          </div>
          <div className="action-links-container">
            <span> Edit / </span>
            <LogoutButton />
          </div>
        </div>
        <hr className="form-separator" />
        <HomeEmptyState />
      </div>
    );
  }
}

MenuProfileSection.propTypes = {
  user: object.isRequired
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS()
});

export default connect(mapState)(MenuProfileSection);
