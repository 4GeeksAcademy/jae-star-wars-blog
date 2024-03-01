import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
          alt="Star Wars Logo"
          style={{ width: "150px", height: "auto" }}
        />
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button
              className="btn btn-primary btn-lg dropdown-toggle me-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Action</li>
              <li className="dropdown-item">Another action</li>
              <li className="dropdown-item">Something else here</li>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
