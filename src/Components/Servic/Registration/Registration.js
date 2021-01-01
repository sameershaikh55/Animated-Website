import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Registration.css";

// import image
import RegistrationImage from "../../../Images/registration_form_img.jpg";

// importing AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

const Registration = () => {
	useEffect(() => {
		AOS.init({ offset: "500", duration: "1000" });
	}, []);
	return (
		<div data-aos="zoom-in-up" className="r_bg">
			<div className="registration_form_container">
				<div className="forms_left_side">
					<h1 className="form_heading">Register now</h1>
					<h4 style={{ marginBottom: "15px" }}>
						The First 7 Day Trial is Completely Free With The Teacher
					</h4>
					<br />
					<label className="inp_label" htmlFor="fname">
						First Name
					</label>
					<br />
					<input
						className="registration_input"
						type="text"
						id="fname"
						autoComplete="off"
					/>
					<br />
					<br />
					<label className="inp_label" htmlFor="lname">
						Last Name
					</label>
					<br />
					<input
						className="registration_input"
						type="text"
						id="lname"
						autoComplete="off"
					/>
					<br />
					<br />
					<label className="inp_label" htmlFor="email">
						Your Email
					</label>
					<br />
					<input
						className="registration_input"
						type="text"
						id="email"
						autoComplete="off"
					/>
					<br />
					<br />
					<label
						className="inp_label"
						htmlFor="phone"
						style={{ marginLeft: "-394px" }}
					>
						Phone Number
					</label>
					<br />
					<input
						className="registration_input"
						type="text"
						id="phone"
						autoComplete="off"
					/>
					<br />
					<br />
					<Button
						variant="contained"
						style={{
							width: "550px",
							marginTop: "8px",
							color: "white",
							// background:
							// 	"linear-gradient(20deg, rgba(102,252,241,9), rgba(102,252,241,0.5))",
							letterSpacing: "2px",
							background: "#1F2833",
							height: "40px",
							fontSize: "15px",
						}}
						// rgba(102,252,241,0.4)
					>
						Get Started
					</Button>
				</div>
				<div className="forms_right_side">
					<img
						className="registration_rSide_image"
						src={RegistrationImage}
						alt="loading"
					/>
				</div>
			</div>
		</div>
	);
};

export default Registration;
