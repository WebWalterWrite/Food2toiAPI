import React from "react";

// import component
import { ParaxStarter } from "../parallax/Parallax";

//import Api
import { getRecipes } from '../../utils/api';
// import data & utils functions
import { Vegetables } from './starter.styled';
import { storeData } from '../../utils/functions';

// import styles & images
import { Div } from "../homepage/homepage.styled";
import starterBack from "../../assets/images/starterbackground.jpg";
import vegetables from "./data.js";

const importAll = (r) => r.keys().map(r);
const img = importAll(require.context("../../assets/images/", true, /\.jpg$/));

const Starter = () => {
	
	console.log(img)
	const storeProducts = e => {
		let productId = e.currentTarget.dataset.id;
		let item = e.currentTarget.dataset.type;
		let product = vegetables.find( ({id}) => id === productId );

		storeData(item, product)
		getRecipes('salade');
	};	

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

				<Vegetables>
				{vegetables.map(({ image, name, id }, k) => {
					return (
						
						<div key={k} data-id={id} data-type="v" onClick={storeProducts} >
							<img src={image}  alt="légumes" width="150" />
							<p>{name}</p>
						</div>
					);
				})}
				</Vegetables>
			</section>
		</ParaxStarter>
	);
};

export default Starter;
