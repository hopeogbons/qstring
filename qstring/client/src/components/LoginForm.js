import React, {Component} from 'react';
import {Field} from 'redux-form';
import error_info from '../assests/error_info.svg';

export default class LoginForm extends Component {
  componentWillMount() {
    this.props.reset();
  }

  renderField = ({
    input,
    label,
    type,
    htmlFor,
    meta: { validate, touched, error }
  }) => (
    <div>
      <label htmlFor={htmlFor} className="sr-only">{label}</label>
      <div className={validate ? 'validating my-3' : 'my-3'}>
        <input {...input} className="form-control" type={type} placeholder={label} />
        {touched && error && <span><img src={error_info} alt="error"/> {error}</span>}
      </div>
    </div>
  )

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <div className="text-center">
        <div className="mx-auto" style={{marginTop:"150px",width:"300px"}}>
          <div>
            <form className="form-signin"  onSubmit={handleSubmit(this.props.submit.bind(this.props.loginCredentials))}>
              <Field
                name="username"
                component={this.renderField}
                type="text"
                label="Username"
                placeholder="Username"
                htmlFor="username"
                required
                autoFocus
              />
              <Field
                name="password"
                component={this.renderField}
                type="password"
                label="Password"
                placeholder="Password"
                htmlFor="password"
                required
              />
              <button className="btn btn-lg btn-dark" type="submit" disabled={submitting}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
