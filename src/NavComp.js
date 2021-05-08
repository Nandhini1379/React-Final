import React from "react";
import { Redirect } from "react-router-dom";

class NavComp extends React.Component {
  constructor(props) {
    super(props);
  }

  logOutHandler = () => {
    localStorage.setItem("pharma-isLoggedIn", "false")
    localStorage.removeItem("pharma-loggedInUserType");
    this.props.history.push("/");
  };

  render() {
    let isLoggedIn = localStorage.getItem("pharma-isLoggedIn");
    if (isLoggedIn == null || isLoggedIn === "false") {
      return <Redirect to="/" />;
    } else {
      return (
        <nav className="navbar navbar-light navbar-expand-lg bg-light shadow">
          <div className="container-fluid">
            <span className="navbar-text fs-3">
              {this.props.name} Dashboard
            </span>
            <div className="collapse navbar-collapse justify-content-end">
              <button className="btn btn-danger" onClick={this.logOutHandler}>
                <i className="bi bi-box-arrow-right"></i> Log Out
              </button>
            </div>
          </div>
        </nav>
      );
    }
  }
}

export default NavComp;
