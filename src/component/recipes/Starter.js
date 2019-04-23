import React from "react";

import { ParaxStarter } from "../parallax/Parallax";

import { Div } from "../homepage/homepage.styled";

import starterBack from "../../assets/images/starterbackground.jpg";
import vegetables from "./data.js";

const Starter = () => {
	console.log(vegetables);
	return (
		<ParaxStarter img={starterBack}>
			<Div>
				<h1>Envie d'une entrée....</h1>
				<p>
					Rien de tel, qu'une succulente entrée pour mieux attaquer le plat ou
					simplement ménager son corps pour son bien être...
				</p>
			</Div>
			<section>
				<h1>Choix des légumes</h1>
				{vegetables.map(({ image, name }, k) => {
					return (
						<div key={k}>
							<img src={image}  alt="légumes" width="250" />
							<p>{name}</p>
						</div>
					);
				})}
			</section>
		</ParaxStarter>
	);
};

export default Starter;
