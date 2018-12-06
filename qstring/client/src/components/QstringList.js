import React, { Component } from 'react';

export default class QstringList extends Component {
  componentDidMount() {
    this.props.fetchQstrings();
  }

  renderQstrings(qstrings) {
    return qstrings.map(qs => {
      return (
        <div className="col-md-4 bg-white" key={qs.id}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h4>{qs.title}</h4>
              <h6>{qs.desc}</h6>
              <p className="card-text"><span className="badge badge-pill badge-dark">{qs.count_submissions}</span> Submissions</p>
              <div className="d-flex justify-content-between align-items-center row">
                <div className="btn-group col">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
                <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">{qs.id}</span></span>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    const { data, error, loading } = this.props.qstrings;

    if (loading) {
      return (
        <div className="container">
          <h1>Qstrings</h1><h3>Loading...</h3>
        </div>
      )
    } else if (error) {
      return (
        <div className="alert alert-danger">
          Error: {error}
        </div>
      )
    } else {
      return (
        <div>
          <div className="nav-scroller bg-white shadow-sm">
            <div className="container">
              <div className="row py-2 px-3">
                <button className="btn btn-info btn-sm ml-auto" onClick={this.props.loadQstringForm}>+ New Qstring</button>
              </div>
            </div>
          </div>
          <main role="main">
            <div className="container">
              <div className="row" style={{ marginTop: '50px' }}>

                {this.renderQstrings(data)}

              </div>
            </div>
          </main>
        </div>
      )
    }
  }
}
