import React from "react";
import './Navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from './assets/logo.svg'

function Navbar() {
  return (
    <>
		<div className="container">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="line"></div>
			<nav>
				<ul className="nav_list">
					<li>
						<Link to="/" className="nav_link">00 HOME</Link>
					</li>
					<li>
						<Link to="/destination" className="nav_link">01 DESTINATION</Link>
					</li>
					<li>
						<Link to="/crew" className="nav_link">02 CREW</Link>
					</li>
					<li>
						<Link to="/technology" className="nav_link">03 TECHNOLOGY</Link>
					</li>
				</ul>
			</nav>
		</div>
    </>
  );
}

export default Navbar;