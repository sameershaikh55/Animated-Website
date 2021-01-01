import React, { useEffect } from "react";
import "./Footer.css";

import Navbar from "../Navbar/Navbar";

// importing material ui icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

// importing AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
	const addressDetail = {
		zoom: "1.3",
		marginRight: "10px",
		color: "#66FCF1",
	};
	const addressInner = {
		marginTop: "5px",
		fontWeight: "bold",
		letterSpacing: "1.5px",
	};
	const followUsStyling = {
		marginRight: "5px",
		zoom: "1.1",
		marginTop: "18px",
		color: "#66FCF1",
	};

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1200"
			data-aos-offset="120"
			className="footer_page_container"
		>
			<div className="footer_boxes_wrapper">
				<div className="footer_box1">
					<div>
						<h2 className="box1_headings">Support</h2>
						<p className="box1_para">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</div>
					<div className="footer_box1_inner_policy">
						<h2 className="box1_headings">Policy</h2>
						<p className="box1_para">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
				<div className="footer_box2">
					<div className="contact_side_container">
						<h2 className="footer_box2_contact_heading">Contact</h2>
						<ul className="ul_container">
							<li className="li_inner_box2">
								<LocationOnIcon style={addressDetail} />
								<p style={addressInner}>Saddar Town, Karachi, Pakistan</p>
							</li>
							<li className="li_inner_box2">
								<PhoneIcon style={addressDetail} />
								<p style={addressInner}>0334-8586945</p>
							</li>
							<li className="li_inner_box2">
								<MailIcon style={addressDetail} />
								<p style={addressInner}>example@gmail.com</p>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="follow_us_heading">Follow Us</h2>
						<FacebookIcon style={followUsStyling} />
						<TwitterIcon style={followUsStyling} />
						<InstagramIcon style={followUsStyling} />
						<PinterestIcon style={followUsStyling} />
					</div>
				</div>
			</div>
			<Navbar />
			<div className="footer_copyright_container">
				<footer className="footer_copyright_inner">
					© 2020 Copyright: SAMEER_SHAIKH
				</footer>
			</div>
		</div>
	);
};

export default Footer;
