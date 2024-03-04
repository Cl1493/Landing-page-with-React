import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		<div>
		<Navbar />
		<Jumbotron />
		<Card />
		<Footer />
		</div>
	);
};

export default Home;
