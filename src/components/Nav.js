import React, { Component } from "react";
import imag from "./Logo.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src={imag} alt="Bootstrap" width="" height="46" />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Azadi-Ka-Amrit-Mahotsav-Logo.png"
                alt="Bootstrap"
                width=""
                height="40"
              />
              <img
                src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/08/11134138/Ministry-of-AYUSH-logo.jpg"
                alt="Bootstrap"
                width=""
                height="38"
              />
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="d-flex">
                <a className="nav-link active" aria-current="page" href="/">
                  Register |
                </a>

                <a className="nav-link active" aria-current="page" href="/">
                  LogIn
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>


                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Funding & Schemes
                  </a>
                </li>


                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Network
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>

  
                  </ul>

                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Get Featured
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Showcase Startup
                      </a>
                    </li>
                    

  
                  </ul>

                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>




              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
