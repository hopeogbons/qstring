import React, {Component} from 'react';
import {Field} from 'redux-form';
import error_info from '../assests/error_info.svg';

export default class LoginForm extends Component {
  componentWillMount() {
    this.props.reset();
  }

  renderTextBox = ({
    input,
    label,
    type,
    htmlFor,
    meta: { validate, touched, error }
  }) => (
    <div>
      <label htmlFor={ htmlFor } className="sr-only">{ label }</label>
      <div className={ validate ? 'validating my-3' : 'my-3' }>
        <input { ...input } className="form-control" type={ type } placeholder={ label } />
        { touched && error && <span><img src={ error_info } alt="error"/> { error }</span> }
      </div>
    </div>
  )

  renderSubmitButton = ({
    input,
    type,
    label,
    disabled
  }) => (
    <div>
      <input { ...input } value={ label } type={ type } disabled={ disabled } className="btn btn-lg btn-dark" />
    </div>
  )

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="text-center">
        <div className="mx-auto" style={{ marginTop:"150px",width:"300px" }}>
          <div>
            <form className="form-signin"  onSubmit={ handleSubmit(this.props.submit.bind(this, this.props.loginCredentials)) }>
              <Field
                name="username"
                component={ this.renderTextBox }
                type="text"
                label="Username"
                placeholder="Username"
                htmlFor="username"
                required
                autoFocus
              />
              <Field
                name="password"
                component={ this.renderTextBox }
                type="password"
                label="Password"
                placeholder="Password"
                htmlFor="password"
                required
              />
              <Field
                name="submit"
                type="submit"
                label="Submit"
                disabled={ submitting }
                component={ this.renderSubmitButton }
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
