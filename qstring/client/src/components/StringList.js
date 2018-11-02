import React, {Component} from 'react';

export default class StringList extends Component {
  render() {
    return (
      <div>
        <div className="nav-scroller bg-white shadow-sm">
          <div className="container">
            <div className="row py-2 px-3">
              <button className="btn btn-info btn-sm ml-auto" onClick={this.props.gotoStringForm}>+ New String</button>
            </div>
          </div>
        </div>
        <main role="main">
          <div className="container">
            <div className="row" style={{marginTop: '50px'}}>

              <div className="col-md-4 bg-white">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>SEPTEMBER 2018 IPD</h4>
                      <h6>(20/09/2018 - 23/09/2018)</h6>
                      <p className="card-text"><span className="badge badge-pill badge-dark">215</span> Reports</p>
                      <div className="d-flex justify-content-between align-items-center row">
                        <div className="btn-group col">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">30</span></span>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-4 bg-white">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>SEPTEMBER 2018 IPD</h4>
                      <h6>(20/09/2018 - 23/09/2018)</h6>
                      <p className="card-text"><span className="badge badge-pill badge-dark">215</span> Reports</p>
                      <div className="d-flex justify-content-between align-items-center row">
                        <div className="btn-group col">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">30</span></span>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-4 bg-white">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>SEPTEMBER 2018 IPD</h4>
                      <h6>(20/09/2018 - 23/09/2018)</h6>
                      <p className="card-text"><span className="badge badge-pill badge-dark">215</span> Reports</p>
                      <div className="d-flex justify-content-between align-items-center row">
                        <div className="btn-group col">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">30</span></span>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-4 bg-white">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>SEPTEMBER 2018 IPD</h4>
                      <h6>(20/09/2018 - 23/09/2018)</h6>
                      <p className="card-text"><span className="badge badge-pill badge-dark">215</span> Reports</p>
                      <div className="d-flex justify-content-between align-items-center row">
                        <div className="btn-group col">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">30</span></span>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-md-4 bg-white">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>SEPTEMBER 2018 IPD</h4>
                      <h6>(20/09/2018 - 23/09/2018)</h6>
                      <p className="card-text"><span className="badge badge-pill badge-dark">215</span> Reports</p>
                      <div className="d-flex justify-content-between align-items-center row">
                        <div className="btn-group col">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">30</span></span>
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    )
  }
}
