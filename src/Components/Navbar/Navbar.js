import React from "react";

// importing css file
import "./Navbar.css";
import "../../App.css";

const Navbar = () => {
	return (
		<div className="navbar_wrapper">
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
