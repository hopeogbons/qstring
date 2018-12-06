import React, { Component } from 'react'
import error_info from '../assests/error_info.svg';
import { Field } from 'redux-form';

export default class QstringList extends Component {
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
      <div className="form-group row">
        <label htmlFor={htmlFor} className="col-sm-2 col-form-label">{label}</label>
        <div className={validate ? 'validating col-sm-10' : 'col-sm-10'}>
          <input {...input} className="form-control" id={htmlFor} type={type} placeholder={label} />
          {touched && error && <span><img src={error_info} alt="error" /> {error}</span>}
        </div>
      </div>
    )

  renderTextArea = ({
    input,
    label,
    type,
    htmlFor,
    rows,
    meta: { validate, touched, error }
  }) => (
      <div className="form-group row">
        <label htmlFor={htmlFor} className="col-sm-2 col-form-label">{label}</label>
        <div className={validate ? 'validating col-sm-10' : 'col-sm-10'}>
          <textarea {...input} className="form-control" id={htmlFor} type={type} placeholder={label} rows={rows} ></textarea>
          {touched && error && <span><img src={error_info} alt="error" /> {error}</span>}
        </div>
      </div>
    )

  renderRadioButton = ({
    input,
    label,
    meta: { validate, touched, error }
  }) => (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">{label}</label>
        <div className={validate ? 'validating col-sm-10' : 'col-sm-10'}>
          <div className="custom-control custom-radio custom-control-inline">
            <input {...input} type="radio" id="active" value="1" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="active">Yes</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input {...input} type="radio" id="inactive" value="0" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="inactive">No</label>
          </div>
          {touched && error && <span><img src={error_info} alt="error" /> {error}</span>}
        </div>
      </div>
    )

  renderSubmitButton = ({
    input,
    type,
    label,
    disabled
  }) => (
      <div className="form-group row">
        <div className="col-sm-2">&nbsp;</div>
        <div className="col-sm-10">
          <input {...input} value={label} type={type} disabled={disabled} className="btn btn-primary" />
        </div>
      </div>
    )

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="container">
        <div className="pt-5">
          <div className="jumbotron mt-3 px-5">
            <form className="form-signin" onSubmit={handleSubmit(this.props.submit.bind(this, this.props.qstringDetails))}>
              <Field
                name="title"
                component={this.renderTextBox}
                type="text"
                label="Title"
                placeholder="Title"
                htmlFor="title"
                required
                autoFocus
              />
              <Field
                name="desc"
                component={this.renderTextArea}
                type="textarea"
                label="Description"
                placeholder="Description"
                htmlFor="desc"
                rows="3"
                required
              />
              <Field
                name="mappingset"
                component={this.renderTextBox}
                type="text"
                label="Mappingset"
                placeholder="Mappingset"
                htmlFor="mappingset"
                required
              />
              <Field
                name="revision"
                component={this.renderTextBox}
                type="text"
                label="Revision"
                placeholder="Revision"
                htmlFor="revision"
                required
              />
              <Field
                name="submission_url"
                component={this.renderTextBox}
                type="text"
                label="Submission Url"
                placeholder="Submission Url"
                htmlFor="submission_url"
                required
              />
              <Field
                name="is_active"
                label="Is Active"
                component={this.renderRadioButton}
              />
              <Field
                name="submit"
                type="submit"
                label="Create"
                disabled={submitting}
                component={this.renderSubmitButton}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
