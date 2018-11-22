import React, {Component} from 'react'
import error_info from '../assests/error_info.svg';
import {Field} from 'redux-form';

export default class QstringList extends Component {
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
      <div className="container">
        <div className="pt-5">
          <div className="jumbotron mt-3 px-5">
          <form>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="title" placeholder="Title"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="desc" rows="3"  placeholder="Description"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="map_id" className="col-sm-2 col-form-label">Mappingset Id</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="map_id" placeholder="Mapping Id"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="rev_id" className="col-sm-2 col-form-label">Revision Id</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="rev_id" placeholder="Revision Id"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="submission_url" className="col-sm-2 col-form-label">Submission Url</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="submission_url" placeholder="Submission Url"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="payload" className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-10">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="active" name="status" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="1">Active</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="inactive" name="status" className="custom-control-input" checked="checked"/>
                    <label className="custom-control-label" htmlFor="0">Inactive</label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">&nbsp;</div>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
