import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="Star Wars Logo" style={{ width: "150px", height: "auto" }} />
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <div className="dropdown">

				<button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
                    </div>
                </Link>
            </div>
        </nav>
    );
};
