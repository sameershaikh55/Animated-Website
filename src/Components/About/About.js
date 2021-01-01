import React, { useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBullseye,
	faDumbbell,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// importing trainer images
import Tr_1 from "../../Images/about_page_tr_1.jpg";
import Tr_2 from "../../Images/about_page_tr_2.jpg";
import Tr_3 from "../../Images/about_page_tr_3.jpg";

// material ui icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

// import useWebAnimations, { fadeInRight } from "@wellyshen/use-web-animations";

const About = () => {
	// const { ref } = useWebAnimations({ ...fadeInRight });
	const iconsStyling = {
		margin: "5px",
		zoom: "0.9",
		cursor: "pointer",
		color: "rgb(102,252,241)",
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div id="aboutPage" className="about_container">
			<div
				data-aos="fade-down"
				data-aos-offset="200"
				data-aos-duration="1000"
				/*ref={ref}*/ className="about_boxes"
			>
				<div className="box">
					<FontAwesomeIcon
						icon={faTrophy}
						size="2x"
						color="#66fcf1"
						style={{ marginBottom: "14px" }}
					/>
					<h2 className="box_heading_styling"> Rewards </h2>
					<p className="box_lorem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit
						lectus, rutrum varius accumsan commodo.
					</p>
				</div>
				<div className="box">
					<FontAwesomeIcon
						icon={faDumbbell}
						size="2x"
						color="#66fcf1"
						style={{ marginBottom: "14px" }}
					/>
					<h2 className="box_heading_styling"> Modern Equipment </h2>
					<p className="box_lorem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit
						lectus, rutrum varius accumsan commodo.
					</p>
				</div>
				<div className="box">
					<FontAwesomeIcon
						icon={faBullseye}
						size="2x"
						color="#66fcf1"
						style={{ marginBottom: "14px" }}
					/>
					<h2 className="box_heading_styling"> Goal </h2>
					<p className="box_lorem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit
						lectus, rutrum varius accumsan commodo.
					</p>
				</div>
			</div>

			{/* states */}
			<div
				data-aos="flip-up"
				data-aos-offset="200"
				data-aos-duration="1000"
				className="states_container"
			>
				<div>
					<h2 className="states_number">98</h2>
					<p className="states_text">PROGRAMS</p>
				</div>
				<div>
					<h2 className="states_number">14</h2>
					<p className="states_text">LOCATIONS</p>
				</div>
				<div>
					<h2 className="states_number">10k+</h2>
					<p className="states_text">MEMBERS</p>
				</div>
				<div>
					<h2 className="states_number">30</h2>
					<p className="states_text">COACHES</p>
				</div>
			</div>

			{/* trainers */}
			<div
				data-aos="slide-up"
				data-aos-offset="230"
				data-aos-duration="1500"
				className="trainers_container"
			>
				<h1 className="trainers_heading"> Expert Trainers </h1>
				<div className="trainer_boxes_container">
					<div className="trainer_box">
						<img className="trainer_img" src={Tr_1} alt="trainer_1" />
						<div className="animation_box_container">
							<h2 className="trainer_name">Patrick Cortez</h2>
							<h4 className="trainer_speciality">Leader</h4>
							<p>
								non numquam eius modi tempora incidunt labore magnam voluptatem.
							</p>
							{/* social media icons portion */}
							<div className="social_media_icons">
								<FacebookIcon style={iconsStyling} />
								<InstagramIcon style={iconsStyling} />
								<TwitterIcon style={iconsStyling} />
								<PinterestIcon style={iconsStyling} />
							</div>
						</div>
					</div>
					<div className="trainer_box">
						<img className="trainer_img" src={Tr_2} alt="trainer_2" />
						<div className="animation_box_container">
							<h2 className="trainer_name">Gregory Powers</h2>
							<h4 className="trainer_speciality">Gym coach</h4>
							<p>
								non numquam eius modi tempora incidunt labore magnam voluptatem.
							</p>
							{/* social media icons portion */}
							<div className="social_media_icons">
								<FacebookIcon style={iconsStyling} />
								<InstagramIcon style={iconsStyling} />
								<TwitterIcon style={iconsStyling} />
								<PinterestIcon style={iconsStyling} />
							</div>
						</div>
					</div>
					<div className="trainer_box">
						<img className="trainer_img" src={Tr_3} alt="trainer_3" />
						<div className="animation_box_container">
							<h2 className="trainer_name">Patrick Cortez</h2>
							<h4 className="trainer_speciality">Dance trainer</h4>
							<p>
								non numquam eius modi tempora incidunt labore magnam voluptatem.
							</p>
							{/* social media icons portion */}
							<div className="social_media_icons">
								<FacebookIcon style={iconsStyling} />
								<InstagramIcon style={iconsStyling} />
								<TwitterIcon style={iconsStyling} />
								<PinterestIcon style={iconsStyling} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
