import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Contact.css";

// importing material ui components
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

// importing AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	const addressDetail = {
		zoom: "1.3",
		marginRight: "10px",
		color: "#66FCF1",
	};

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="contactPage">
			<div
				data-aos="fade-up-right"
				data-aos-duration="1000"
				data-aos-offset="400"
				className="contact_us_page_container"
			>
				<div className="boxes_wrapper">
					<div className="right_side_of_form">
						<h1 className="feedback_heading"> Feedback </h1>
						<h4>
							We would love to hear your thoughts, suggestions, concerns or
							problems with anything so we can improve!
						</h4>
						<br />
						<hr />
						<br />
						<form>
							<h2 className="feedback_type_heading">Feedback Type</h2>
							<div className="radio_container">
								<div>
									<input
										className="radio_btn"
										type="radio"
										id="comments"
										name="fb_type"
									/>
									<label className="radio_btn_label" htmlFor="comments">
										Comments
									</label>
								</div>
								<div className="radio_btn_container">
									<input
										className="radio_btn"
										type="radio"
										id="suggestions"
										name="fb_type"
									/>
									<label className="radio_btn_label" htmlFor="suggestions">
										Suggestions
									</label>
								</div>
								<div className="radio_btn_container">
									<input
										className="radio_btn"
										type="radio"
										id="questions"
										name="fb_type"
									/>
									<label className="radio_btn_label" htmlFor="questions">
										Questions
									</label>
								</div>
							</div>
							<h2 className="textArea_heading">Describe Your Feedback:</h2>
							<textarea className="textArea" rows="6" cols="5" />
							<div>
								<label htmlFor="name">
									<h2 style={{ marginTop: "12px", marginBottom: "-16px" }}>
										Name
									</h2>
								</label>
								<br />
								<div className="fname_lname">
									<div>
										<input type="text" id="name" className="name" />
										<p style={{ marginLeft: "5px", fontSize: "14px" }}>
											First Name
										</p>
									</div>
									<div>
										<input type="text" id="name" className="name" />
										<p style={{ marginLeft: "5px", fontSize: "14px" }}>
											Last Name
										</p>
									</div>
								</div>
								<label htmlFor="email2">
									<h2 style={{ marginTop: "12px", marginBottom: "-16px" }}>
										E-mail
									</h2>
								</label>
								<br />
								<input
									type="email"
									id="email2"
									style={{
										width: "100%",
										height: "35px",
										borderRadius: "5px",
										border: "none",
										border: "0.1px solid black",
										outline: "0.5px",
										fontSize: "20px",
										paddingLeft: "5px",
									}}
								/>
							</div>
							<Button
								className="feedback_submit_btn"
								style={{
									marginTop: "20px",
									backgroundColor: "#66FCF1",
									letterSpacing: "2px",
									fontWeight: "bold",
								}}
								variant="contained"
							>
								Submit Feedback
							</Button>
						</form>
					</div>
					<div className="left_side_of_form">
						<div className="left_side_form_inner">
							<h1 className="contact_us_heading">Contact us</h1>
							<div className="left_side_form_details">
								<LocationOnIcon style={addressDetail} />
								<h4 className="address"> Saddar Town, Karachi, Pakistan </h4>
							</div>
							<div className="left_side_form_details">
								<PhoneIcon style={addressDetail} />
								<h4 className="address"> 0334-8586945 </h4>
							</div>
							<div className="left_side_form_details">
								<MailIcon style={addressDetail} />
								<h4 className="address"> example@gmail.com </h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
