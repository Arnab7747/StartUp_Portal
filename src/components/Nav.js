import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../components/nav.css";

export default function Nav() {
<<<<<<< HEAD
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
=======
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
            <img src="./Logo.png" alt="Bootstrap" width="10%" height="auto" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Azadi-Ka-Amrit-Mahotsav-Logo.png"
              alt="Bootstrap"
              width="10%"
              height="auto"
            />
            <img
              src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/08/11134138/Ministry-of-AYUSH-logo.jpg"
              alt="Bootstrap"
              width="10%"
              height="auto"
            />
          </a>
<<<<<<< HEAD
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="d-flex">
                <div className="nav-link active" aria-current="page" href="/">
                  <button id="log" onClick={() => loginWithRedirect()}>Register LogIn</button>
                </div>


=======
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="d-flex">
                {isAuthenticated ? (
                  <button
                    id="logout"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                ) : (
                  <div className="nav-link active" aria-current="page" href="/">
                    <button id="log" onClick={() => loginWithRedirect()}>
                      Register LogIn
                    </button>
                  </div>
                )}

                {isAuthenticated && (
                  <div >
                    <img className="userimg" src={user.picture} alt={user.name} />
                    
                    
                  </div>
                )}
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
              </li>
            </ul>
          </div>
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
<<<<<<< HEAD
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
=======
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
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
                  Schemes & Policies
                </a>
                <ul className="dropdown-menu">
                  <li>
<<<<<<< HEAD
                    <a className="dropdown-item" href='../components/Scheme.js'>
=======
                    <a className="dropdown-item" href="../components/Scheme.js">
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
                      Central Goverment Schemes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Ministry of Ayush Schemes
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
<<<<<<< HEAD
                    <a className="dropdown-item" href="/startups">
=======
                    <a className="dropdown-item" href="/">
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
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
<<<<<<< HEAD



=======
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
