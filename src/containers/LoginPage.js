import React, { PureComponent } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LoginForm from 'components/user/LoginForm';
import { login } from 'actions/sessionActions';
import routes from 'constants/routesPaths';
import AppPreview from '../components/common/AppPreview';
import AppLogo from '../components/common/AppLogo';

class LoginPage extends PureComponent {
  static propTypes = {
    login: func.isRequired,
    authenticated: bool.isRequired,
  }

  render() {
    const { login, authenticated } = this.props;

    if (authenticated) {
      return <Redirect to={routes.index} />;
    }

    return (
      <div>
        <div className="landing-left-side">
          <div>
            <div className="app-logo-container">
              <AppLogo />
            </div>
            <div>
              <div className="header-title-container">
                <span className="header-title"> TARGET MVD </span>
              </div>
              <div className="sub-header-title-container">
                <span className="sub-header-title"> Find people near you & Connect </span>
              </div>
              <div className="app-description-container">
                <p className="app-description">Create a  target  wherever on the map, specify your interest: Travel, Dating, Music, etc and start connecting with others who share your interest.</p>
              </div>
            </div>
          </div>
          <LoginForm onSubmit={login} />
          <hr className="form-separator" />
          <Link to={routes.signUp} >
            <div className="sign-up-link uppercase">
              <FormattedMessage id="login.signup" />
            </div>
          </Link>
        </div>
        <AppPreview />
      </div>
    );
  }
}

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(mapState, mapDispatch)(LoginPage);
