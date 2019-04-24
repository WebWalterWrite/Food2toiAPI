import React, { lazy, Suspense } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { ParaxTitle, ParaxChoice } from "../parallax/Parallax";

import {Choice, Div} from './homepage.styled';

import plat from "../../assets/images/food-1932466_1280.jpg";
import pasta from "../../assets/images/ingredients.jpg";
import starter from '../../assets/images/starterfood.jpg';
import main from '../../assets/images/mainfood.jpg';

const LazyStarter = lazy( () => import ('../recipes/Starter'));

const Homepage = () => {

  /*
		macbook pro => add 151 (header)
		mac => add 188
   */
  const isHeight = () => {
	  let h = window.innerHeight;
	  if(h === 821) 
	  return 151
	  if(h === 1073 ||h === 1152)
	  return 188
  };

  const scrolling = e => {
	let num = e.target.dataset.multiple;
		console.log(window.innerHeight)
		scroll.scrollTo(window.innerHeight * num + isHeight());
  };
    
    return (
			<section>
				<ParaxTitle img={pasta}>
					<Div>
						<h1>Envie d'une recette....</h1>
						<p>
							Tu as aucune idée de recette en tête pour une entrée, un
							plat ou un dessert <span role="img" aria-label="dépité"> 😩😩</span>.....mais tu sais quels
							ingrédients tu aimerez utiliser
							<span role="img" aria-label="happy"> 🤗🤗</span>!!.
						</p>
						<p>
							Selectionne simplement tes ingrédients  <br/>
							<span role="img" aria-label="vegetables"> 🥦 🥑 🥕 🥩 🍗</span>... et 
							choisi une recette parmi des centaines de recettes 
							<span role="img" aria-label="recipes"> 🥗 🍝 🥘</span> 
							...toutes aussi appètissantes les unes que les autres.
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
