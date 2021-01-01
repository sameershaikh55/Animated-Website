import React, { useEffect } from "react";
import "./Servic.css";
import { Button } from "@material-ui/core";
import Registration from "./Registration/Registration";
import Programs from "./Programs/Programs";

// importing AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

const Servic = () => {
	// cards button styling
	const cardsBtnStylingData = {
		marginTop: "5px",
		marginBottom: "8px",
		letterSpacing: "2px",
		fontWeight: "bold",
		border: "0.5px solid rgba(0,0,0,0.9)",
		borderRadius: "5px",
	};
	useEffect(() => {
		AOS.init();
	}, []);
	// ---------------------
	return (
		<div>
			<div
				data-aos="fade-down-left"
				data-aos-offset="450"
				data-aos-duration="1500"
				className="s_bg"
			>
				<div className="servic_page_container">
					<h1 className="membership_card_heading">
						Choose your Membership Plan
					</h1>
					<div className="membership_cards_container">
						{/* first card */}
						<div className="membership_card">
							<h2 className="inner_card_heading"> Class drop-in </h2>
							<h1 className="card_amount"> $ 39.0 </h1>
							<h3> SINGLE CLASS </h3>
							<ul className="membership_card_inner_list">
								<li> Free riding </li>
								<li> Unlimited equipments </li>
								<li> Personal trainer </li>
								<li> Weight losing classes </li>
								<li> Month to mouth </li>
								<li> No time restriction </li>
							</ul>
							<Button variant="outlined" style={cardsBtnStylingData}>
								Enroll Now
							</Button>
						</div>
						{/* second card */}
						<div className="membership_card">
							<h2 className="inner_card_heading"> 12 Month unlimited </h2>
							<h1 className="card_amount"> $ 99.0 </h1>
							<h3> SINGLE CLASS </h3>
							<ul className="membership_card_inner_list">
								<li> Free riding </li>
								<li> Unlimited equipments </li>
								<li> Personal trainer </li>
								<li> Weight losing classes </li>
								<li> Month to mouth </li>
								<li> No time restriction </li>
							</ul>
							<Button variant="outlined" style={cardsBtnStylingData}>
								Enroll Now
							</Button>
						</div>
						{/* third card */}
						<div className="membership_card">
							<h2 className="inner_card_heading"> 6 Month unlimited </h2>
							<h1 className="card_amount"> $ 59.0 </h1>
							<h3> SINGLE CLASS </h3>
							<ul className="membership_card_inner_list">
								<li> Free riding </li>
								<li> Unlimited equipments </li>
								<li> Personal trainer </li>
								<li> Weight losing classes </li>
								<li> Month to mouth </li>
								<li> No time restriction </li>
							</ul>
							<Button variant="outlined" style={cardsBtnStylingData}>
								Enroll Now
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Registration />
			<Programs />
		</div>
	);
};

export default Servic;
