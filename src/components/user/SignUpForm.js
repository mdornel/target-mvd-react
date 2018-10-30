import React, { PureComponent } from 'react';
import { func, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from 'components/common/Loading';
import Input from 'components/common/Input';
import { validations, signUp } from 'utils/constraints';
import Select from 'components/common/Select';

const messages = defineMessages({
  email: { id: 'login.form.email' },
  password: { id: 'login.form.password' },
  passConfirmation: { id: 'signup.form.passconfirmation' },
  gender: { id: 'signup.form.gender' }
});

const options = [
  { value: 'female', text: 'Female' },
  { value: 'male', text: 'Male' }
];

class SignUpForm extends PureComponent {
  static propTypes = {
    handleSubmit: func.isRequired,
    submitting: bool.isRequired,
    intl: intlShape.isRequired,
  };

  render() {
    const { handleSubmit, submitting, intl } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="field-container" >
          <Field
            name="email"
            label={intl.formatMessage(messages.email)}
            component={Input}
            type="email"
          />
        </div>
        <div className="field-container" >
          <Field
            name="password"
            label={intl.formatMessage(messages.password)}
            component={Input}
            type="password"
          />
        </div>
        <div className="field-container" >
          <Field
            name="passwordConfirmation"
            label={intl.formatMessage(messages.passConfirmation)}
            component={Input}
            type="password"
          />
        </div>
        <div className="field-container" >
          <Field
            name="gender"
            label={intl.formatMessage(messages.gender)}
            component={Select}
            options={options}
          />
        </div>
        <button type="submit" className="submit-button sign-up-button uppercase">
          <FormattedMessage id="signup.form.submit" />
        </button>
        {submitting && <Loading />}
      </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp, { fullMessages: false })
})(injectIntl(SignUpForm));
