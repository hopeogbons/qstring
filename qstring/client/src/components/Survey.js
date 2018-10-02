import React, {Component} from 'react'

export default class Survey extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Qstring</a>
            <form className="form-inline my-2 my-md-0">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </nav>

        <main role="main">
          <div className="container">
            <div className="row" style={{marginTop: '90px'}}>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h4>SEPTEMBER 2018 IPD</h4>
                      <h6>(20/09/2018 - 23/09/2018)</h6>
                      <p className="card-text"><span className="badge badge-pill badge-dark">215</span> Reports</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                        <span className="text-muted">Channel <span className="badge badge-pill badge-warning">30</span></span>
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </main>

        <footer className="fixed-bottom">
          <hr/>
          <div className="container"><p>&copy; 2018</p></div>
        </footer>
      </div>
    )
  }
}
