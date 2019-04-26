import React, { lazy, Suspense } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { ParaxTitle, ParaxChoice } from "../parallax/Parallax";

import {CarrouselImg, Choice, Div} from './homepage.styled';

const images = require.context("../../assets/images/", true);
const LazyStarter = lazy( () => import ('../recipes/Starter'));

const Homepage = () => {

  /*
		macbook pro => add 151 (header)
		mac => add 188
   */
  const isHeight = () => {
	  let h = window.innerHeight;
	  if(h === 821 || h === 900) 
	  return 151
	  if(h === 1073 || h === 1152)
	  return 188
  };

  const scrolling = e => {
	let num = e.target.dataset.multiple;
		console.log(window.innerHeight)
		scroll.scrollTo(window.innerHeight * num + isHeight());
  };
    
    return (
			<section>
				<ParaxTitle img={images("./ingredients.jpg")}>
					<Div>
						<h1>Envie d'une recette....</h1>
						<p>
							Tu as aucune idée de recette en tête pour une entrée, un plat
							ou un dessert{" "}
							<span role="img" aria-label="dépité">
								{" "}
								😩😩
							</span>
							.....mais tu sais quels ingrédients tu aimerez utiliser
							<span role="img" aria-label="happy">
								{" "}
								🤗🤗
							</span>
							!!.
						</p>
						<p>
							Selectionne simplement tes ingrédients <br />
							<span role="img" aria-label="vegetables">
								{" "}
								🥦 🥑 🥕 🥩 🍗
							</span>{" "}
							ou un type de cuisine
							<span role="img" aria-label="flag">
								{" "}
								🌮 🍱 🍜 🥘
							</span>
							... et choisi une recette parmi des centaines de recettes
							<span role="img" aria-label="recipes">
								{" "}
								🥗 🍝 🥘
							</span>
							...toutes aussi appètissantes les unes que les autres.
						</p>
						<button data-multiple="1" onClick={scrolling}>
							continuer
						</button>
					</Div>
				</ParaxTitle>
				<ParaxChoice img={images("./food-1932466_1280.jpg")}>
					<h1>Je recherche une recette par...</h1>
					<Choice>
						<div onClick={scrolling}>
							<h4 data-multiple="2">ingrédients</h4>
							<img
								src={images("./ingredientsfood.jpg")}
								alt="ingrédients"
								width="400"
							/>
						</div>
						<div>
							<h4>type</h4>
							<CarrouselImg>

							
							<img
								src={images("./intlfood/intlfood1.jpg")}
								alt="un plat"
								width="400"
							/>
							</CarrouselImg>
						</div>
					</Choice>
				</ParaxChoice>
				{/* 
- créer 2 composants: composants starter et plat
- importer ses composants selon lazy load 
- Le composant contiendra sa liste respectif d'ingrédients.
*/}{" "}
				<Suspense fallback={<div>Loading...</div>}>
					<LazyStarter />
				</Suspense>
			</section>
		);
  }

export default Homepage;
