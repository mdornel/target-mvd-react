import React, { PureComponent } from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { signUp } from 'actions/userActions';
import SignUpForm from 'components/user/SignUpForm';
import routes from 'constants/routesPaths';
import AppPreview from '../components/common/AppPreview';

class SignUpPage extends PureComponent {
  static propTypes = {
    signUp: func.isRequired,
    authenticated: bool.isRequired
  }

  render() {
    const { signUp, authenticated } = this.props;

    if (authenticated) {
      return <Redirect to={routes.index} />;
    }

    return (
      <div>
        <div className="landing-left-side">
          <div>
            <span className="header-title"><FormattedMessage id="signup.title" /></span>
          </div>
          <SignUpForm onSubmit={signUp} />
          <hr className="form-separator" />
          <Link to={routes.login} >
            <div className="sign-in-link uppercase">
              <FormattedMessage id="signup.signin" />
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
  signUp: user => dispatch(signUp(user.toJS()))
});

export default connect(mapState, mapDispatch)(SignUpPage);
