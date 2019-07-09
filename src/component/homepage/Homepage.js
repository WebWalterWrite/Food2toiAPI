import React, { lazy, Suspense, useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { ParaxTitle, ParaxChoice } from "../parallax/Parallax";
import { Choice, Div, Title} from './homepage.styled';

const images = require.context("../../assets/images/", true);
const LazyIngredients = lazy( () => import ('../recipes/Ingredients'));
const LazyCountry = lazy ( () => import('../recipes/Country'));
const LazyRecipes = lazy( () => import('../recipes/RecipesResult'));

const Homepage = () => {

  /*
		macbook pro => add 151 (header)
		mac => add 188
   */
  const [view, setView ] = useState({
	  ingredients: false,
	  type: false
  });

  const [recipes, setRecipes ] = useState({
	  show:false,
	  result:[]
  });


  /**
   * @description - Retourne la hauteur de la fenetre en cours
   */
  const headerHeight = () => {
	  const h = window.innerHeight;
	  console.log(document.documentElement.clientHeight)
	  console.log(h)
	  if(h === 821 || h === 900) 
	  return 90
	  if(h === 1231 || 1350)
	  return 188
	  if(h == 719){
		console.log('yes')
	  return 250 
	  }
  };	

  /**
   * @description - Swith sur la visibilité du composant lors du click sur le type de recherche.
   * @param {*} val - propriété du view state
   */
  const switchView = (val, scroll) => {
	setView(prevState => ({...!prevState, [val]:!prevState[val]})
		 ) ;
	scrolling(scroll)
	
  };

  const showRecipes = async data => {
	  setRecipes(prevState => ({show:!prevState.show, result:data }));
	  scrolling(3)
  };

  /**
   * @description - Scroll jusqu'au prochain composant
   * @param {object || string} e - contient le mutliple pour calculer le scroll
   */
  const scrolling = (e) => {
	  
	    let num = e.target ? e.target.dataset.multiple : e;
		
		scroll.scrollTo(window.innerHeight * num + headerHeight());
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
							.....mais tu ne sais pas quels ingrédients tu aimerez utiliser
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
					<Title>Je recherche une recette par...</Title>
					<Choice>
						<div onClick={() => switchView('ingredients',2)}>
							<h4 data-multiple="2">ingrédients</h4>
							<img
								src={images("./ingredientsfood.jpg")}
								alt="ingrédients"
								width="300"
							/>
						</div>
						<div onClick={() => switchView('type',2)}>
							<h4>type</h4>
							<img
								src={images("./intlfood/intlfood1.jpg")}
								alt="un plat"
								width="300"
							/>
							{/* </CarrouselImg> */}
						</div>
					</Choice>
				</ParaxChoice>
{/* 
- créer 2 composants: composants ingredients et plat
- importer ses composants selon lazy load 
- Le composant contiendra sa liste respectif d'ingrédients.
*/}
				{
				view.ingredients ? <Suspense fallback={<div>Loading...</div>}>
					<LazyIngredients data={showRecipes}/>
				</Suspense>
				
				:
				view.type && <Suspense fallback={<div>Loading...</div>}>
					<LazyCountry />
				</Suspense>
				}
				
				{
				recipes.show && <Suspense fallback={<div>Loading</div>}>
					<LazyRecipes data={recipes.result}/>
				</Suspense>
				}
			</section>
		);
  }

export default Homepage;
