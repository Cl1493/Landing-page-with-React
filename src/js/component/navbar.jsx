import React from "react";

const Navbar = () => {
	return (
        <nav className="navbar bg-body-tertiary container-fluid text-bg-dark p-3  d-flex flex-column flex-md-row">
            <p className="mt-3"><strong>Start Bootstrap</strong></p>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link link-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-light" aria-disabled="true">Contact</a>
                </li>
            </ul>
        </nav>

	);
};

export default Navbar;