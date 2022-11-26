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
				<div className="list_container">
					<ul className="nav_list">
						<li>
							<p>00</p>
							<Link to="/" className="nav_link">HOME</Link>
						</li>
						<li>
							<p>01</p>
							<Link to="/destination" className="nav_link">DESTINATION</Link>
						</li>
						<li>
							<p>02</p>
							<Link to="/crew" className="nav_link">CREW</Link>
						</li>
						<li>
							<p>03</p>
							<Link to="/technology" className="nav_link">TECHNOLOGY</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
    </>
  );
}

export default Navbar;