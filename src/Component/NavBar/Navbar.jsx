import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light text-primary flex-end" style={{padding:"40px 40px"}}>
          <a className="navbar-brand " href="#">   
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto nav-list">
              <li className="nav-item active">
              <Link className="nav-link sr-only " to="/">Home</Link>  
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Customers
                </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link " href="#">
                      Features
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link " href="#">
                      Partners
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link " href="#">
                      Company
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link " href="#">
                      Partners
                  </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/login">Login</Link>   
              </li> 
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
