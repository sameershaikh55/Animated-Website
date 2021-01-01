import React, { useEffect } from "react";

// importing AOS web animation
import AOS from "aos";
import "aos/dist/aos.css";

// importing css file
import "./Navbar.css";
import "../../App.css";

const Navbar = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
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
							<a>Home</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Service</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
