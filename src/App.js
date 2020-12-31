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

function App() {
	return (
		<div>
			<div className="for_bg_image">
				<Navbar />
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
