import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark  ">
      <div className="container-fluid">
        <Link className="navbar-brand nav-logo display-2" to="/">
          NOTFLIX
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ps-5 collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav   ">
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/popular">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/top_rated">
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/upcoming">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
