import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import MenuAvatar from '../home/MenuAvatar';
import LogoutButton from '../user/LogoutButton';
import HomeEmptyState from './HomeEmptyState';

class MenuProfileSection extends PureComponent {
  static propTypes = {
    user: object.isRequired
  };

  render() {
    const { user } = this.props;

    return (
      <div>
        <MenuAvatar />
        <div className="menu-actions-container">
          <div className="user-name-container">
            <span>{ user.username }</span>
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

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS()
});

export default connect(mapState)(MenuProfileSection);
