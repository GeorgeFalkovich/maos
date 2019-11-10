import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="cpntainer">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h1>Page not found</h1>
            <h3>
              the requested URL{" "}
              <strong className="text-danger">
                {this.props.location.pathname}
              </strong>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
