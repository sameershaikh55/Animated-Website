import React, { useEffect } from "react";
import "./Programs.css";

// import services images
import Yoga from "../../../Images/service_yoga.jpg";
import Running from "../../../Images/service_running.jpg";
import Karate from "../../../Images/service_karate.jpg";
import Dance from "../../../Images/service_dance.jpg";
import WeightLoss from "../../../Images/service_weight_loss.jpg";
import PersonalTraining from "../../../Images/service_personal_training.jpg";
import Cardio from "../../../Images/service_cardio.jpg";
import CrossFit from "../../../Images/service_cross_fit.jpg";
import Box from "../../../Images/service_box.jpg";

// importing AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

const Programs = () => {
	// styling for elemnts of image
	const stylingData = {
		position: "absolute",
		marginTop: "-50px",
		paddingTop: "5px",
		paddingLeft: "24px",
		backgroundColor: "rgba(0,0,0,0.6)",
		width: "340px",
		height: "46px",
		color: "white",
		letterSpacing: "1.4px",
	};
	// ---------------------------------

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="programs_page_container">
			<h1
				data-aos="fade-down"
				data-aos-offset="200"
				data-aos-duration="1000"
				className="programs_heading"
			>
				Unlimited Classes
			</h1>
			<div>
				<div
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-duration="1000"
					className="programs_row"
				>
					<div className="program_card">
						<img className="programs_images" src={Yoga} alt="loading" />
						<h2 style={stylingData}>Yoga</h2>
					</div>
					<div className="program_card">
						<img className="programs_images" src={Running} alt="loading" />
						<h2 style={stylingData}>Running</h2>
					</div>
					<div className="program_card">
						<img className="programs_images" src={Karate} alt="loading" />
						<h2 style={stylingData}>Karate</h2>
					</div>
				</div>
				<br />
				<br />
				<div
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-duration="1000"
					className="programs_row"
				>
					<div className="program_card">
						<img className="programs_images" src={Dance} alt="loading" />
						<h2 style={stylingData}>Dance</h2>
					</div>
					<div className="program_card">
						<img className="programs_images" src={WeightLoss} alt="loading" />
						<h2 style={stylingData}>Weight Loss</h2>
					</div>
					<div className="program_card">
						<img
							className="programs_images"
							src={PersonalTraining}
							alt="loading"
						/>
						<h2 style={stylingData}>Personal Training</h2>
					</div>
				</div>
				<br />
				<br />
				<div
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-duration="1000"
					className="programs_row"
				>
					<div className="program_card">
						<img className="programs_images" src={Box} alt="loading" />
						<h2 style={stylingData}>Box</h2>
					</div>
					<div className="program_card">
						<img className="programs_images" src={Cardio} alt="loading" />
						<h2 style={stylingData}>Cardio</h2>
					</div>
					<div className="program_card">
						<img className="programs_images" src={CrossFit} alt="loading" />
						<h2 style={stylingData}>Cross Fit</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Programs;
