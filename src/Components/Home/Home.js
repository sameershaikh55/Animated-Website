import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

const Home = () => {
	const { ref } = useWebAnimations({ ...fadeIn });
	return (
		<div ref={ref} className="text_on_image">
			<h3> shape your body </h3>
			<h1 className="slogan">
				be <span className="slogan_word"> strong </span> <br /> training hard
			</h1>
			<p className="slogan_below">
				build good body shape for good and healthy life
			</p>
			<a href="#registrationPage" className="become_a_member_page">
				<Button
					style={{
						textTransform: "uppercase",
						marginTop: "15px",
						marginLeft: "9px",
						background: "#66fcf1",
						color: "rgb(31, 40, 51)",
						fontWeight: "bolder",
						borderRadius: "1%",
						letterSpacing: "1.3px",
						boxShadow: "4px 4px 6px rgba(0,0,0,0.3)",
					}}
					variant="contained"
				>
					become a member
				</Button>
			</a>
		</div>
	);
};

export default Home;
