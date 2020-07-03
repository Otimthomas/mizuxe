import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-light fixed-top-py-4">
			<div className="container">
				<Link onClick={() => {
					scroll.scrollToTop();
				}} className="navbar-brand">
					<img src="img/mlogo.png" height="50" width="50" alt=""/>
					<h3 className="d-inline align-Middle">Mizuxe</h3>
				</Link>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="#home" className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="#about" className="nav-link">About</Link>
						</li>
						<li className="nav-item">
							<Link to="#authors" className="nav-link">Meet The Authors</Link>
						</li>
						<li className="nav-item">
							<Link to="#contact" className="nav-link">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
