import React from "react";
// import { Route, Switch } from "react-router-dom";
import "./App.css";

// importing components
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Servic from "./Components/Servic/Servic";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";

// Error Image
import ErrImg from "./Images/ErrorPageSvg.svg";

function App() {
	return (
		<div className="ErrorPage">
			<img src={ErrImg} alt="ErrorPage" className="errorImg" />
			<h4 className="errorText">
				This Website is not Responsive for Small Devices, Please Open it on your
				Laptop Or Desktop...!!!
			</h4>
			<div className="for_bg_image">
				<Navbar forClass="active_page" />
			</div>
			<div className="all_pages_container">
				<Home />
				<About />
				<Servic />
				<Contact />
				<Footer />
				{/* <Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/service" component={Servic} />
					<Route exact path="/contact" component={Contact} />
				</Switch> */}
			</div>
		</div>
	);
}

export default App;
