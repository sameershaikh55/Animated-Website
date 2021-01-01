import React, { useEffect } from "react";

// importing AOS web animation
import AOS from "aos";
import "aos/dist/aos.css";

// importing css file
import "./Navbar.css";
import "../../App.css";

const Navbar = ({ forClass }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			id="homePage"
			data-aos="fade-down"
			data-aos-duration="600"
			className="navbar_wrapper"
		>
			<div className="navbar_container">
				<div>
					<h1 className="brand_name">Fitness-Gym</h1>
				</div>
				<div>
					<ul>
						<li>
							<a id={forClass} className="navbar_nav" href="#homePage">
								Home
							</a>
						</li>
						<li>
							<a className="navbar_nav" href="#aboutPage">
								About
							</a>
						</li>
						<li>
							<a className="navbar_nav" href="#servicPage">
								Service
							</a>
						</li>
						<li>
							<a className="navbar_nav" href="#contactPage">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
