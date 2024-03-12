import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import Card from "./card";
//create your first component
const Home = () => {
	const Cartas = [{image:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg",
	title:"Titulo 1",
	text:"Este es un texto de prueba",
	link:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg"
},{image:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg",
title:"Titulo 2",
text:"Este es un texto de prueba, pero no mucho texto",
link:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg"
},{image:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg",
title:"Titulo 3",
text:"Este es un texto de prueba, con más texto",
link:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg"
},{image:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg",
title:"Titulo 4",
text:"Este es un texto de prueba, y otro con no mucho",
link:"https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg"
}
]
	return (
		<div>
		<Navbar />
		<Jumbotron />
		<div style={{display: "flex", justifyContent: "center"}}>
		{Cartas.map((carta,index)=>(
			<Card image={carta.image} title={carta.title} text={carta.text} link={carta.link} key={index}/>
		))}  
		</div>
		<Footer />
		</div>
	);
};

export default Home;
