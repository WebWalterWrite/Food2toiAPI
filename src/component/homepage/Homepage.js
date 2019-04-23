import React, { lazy, Suspense } from "react";

import { ParaxTitle, ParaxChoice } from "../parallax/Parallax";

import {Choice, Div} from './homepage.styled';

import plat from "../../assets/images/food-1932466_1280.jpg";
import pasta from "../../assets/images/ingredients.jpg";
import starter from '../../assets/images/starterfood.jpg';
import main from '../../assets/images/mainfood.jpg';

const LazyStarter = lazy( () => import ('../recipes/Starter'));

const Homepage = () => {

    
  const scrolling = e => {
    let num = e.target.dataset.multiple;
		window.scrollTo({
			top: window.innerHeight * num + 188,
			behavior: "smooth"
			})
  };
    
    return (
			<section>
				<ParaxTitle img={pasta}>
					<Div>
						<h1>Envie d'une recette....</h1>
						<p>
							Vous avez aucune idée de recette en tête pour une entrée, un
							plat ou un dessert.....mais peut être que vous savez quels
							ingrédients vous aimeriez utiliser pour cette dernière !!!.
						</p>
						<p>
							Selectionner simplement vos ingrédients principaux et
							choisissez une recette parmi la liste établie en fonction de
							vos critères
						</p>
						<button data-multiple="1" onClick={scrolling}>
							continuer
						</button>
					</Div>
				</ParaxTitle>

				<ParaxChoice img={plat}>
					<h1>Je recherche une recette pour...</h1>
					<Choice>
						<div onClick={scrolling}>
							<h4 data-multiple="2">Une entrée</h4>
							<img src={starter} alt="une entrée" width="400" />
						</div>
						<div>
							<h4>Un plat</h4>
							<img src={main} alt="un plat" width="400" />
						</div>
					</Choice>
				</ParaxChoice>
{/* 
- créer 2 composants: composants starter et plat
- importer ses composants selon lazy load 
- Le composant contiendra sa liste respectif d'ingrédients.
*/}				<Suspense fallback={<div>Loading...</div>}>
				<LazyStarter/>
				</Suspense>
			</section>
		);
  }

export default Homepage;
