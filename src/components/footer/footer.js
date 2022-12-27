import React from 'react';

import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark justify-content-center  ">
      <div className="container-fluid">
        <Link
          className="navbar-brand nav-logo display-2 d-flex ms-auto justify-content-center col-md-12"
          to="/"
        >
          NOTFLIX
        </Link>
      </div>
    </nav>
  );
};
export default Footer;
