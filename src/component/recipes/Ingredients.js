import React, {useState, useEffect}  from "react";

// import component
import { ParaxStarter } from "../parallax/Parallax";
import { ingredients } from "./data.js";
import IngredientsList from './IngredientsList';
//import Api
import { getRecipes } from '../../utils/api';

// import data & utils functions
import { Cart, NavIngredients } from './ingredients.styled';
import { storeData } from '../../utils/functions';

// import styles & images
import { Div } from "../homepage/homepage.styled";
import starterBack from "../../assets/images/starterbackground.jpg";



const Ingredients = ({data: fn}) => {
	
	// conteneur ingrédients séléctionnées
	const [cart, setCart ] = useState([]);

	//Ingredients choisis
	const [type, setType] = useState('vegetables');



	// Stocker dans les ingrédients choisis
	const storeProducts = e => {
		
		let productId = e.currentTarget.dataset.id;
		
		let item =  'ingredients' //e.currentTarget.dataset.type;
		
		const findProduct = arr => arr.find( ({id}) => id === productId) 

		let product =  findProduct(ingredients);
		storeData(item, product);
			
		setCart(JSON.parse(localStorage.getItem(item)));	
	};

	// Rechercher dans l'API les recettes.
	const searchRecipes = async () => {
		const list = cart.map(({api_name})=> api_name).join(',')
	
		const result = await getRecipes(list);

		if(result){
		 fn(result)
		}
	};


	/**
	 * @description -  vider le local storage
	 */
	const clearProducts = () =>{
		localStorage.clear();
		setCart([])
	}
	useEffect( () =>{
		const data = localStorage.getItem('ingredients');
		data && setCart(JSON.parse(data));
	}, [] );


	return (
		<ParaxStarter img={starterBack}>
			<Div>
				<h1>La boite à ingrédients...</h1>
			</Div>
			<section>
				<NavIngredients>
					<ul>
						<li onClick={ () => setType('starchy')}>Féculents</li>
						<li onClick={ () => setType('vegetables')}>Legumes</li>
						<li onClick={ () => setType('meats')}>Viandes</li>
						<li onClick={ () =>setType('herbs')}>Herbes arômatiques</li>
						<li onClick={ ()=> setType('sauces')}>Sauces & Condiments</li>
					</ul>
				</NavIngredients>
				<IngredientsList data={{t:type, fn: storeProducts}}/>	
			</section>

			<Div>
				<Cart>
					{cart.length > 0 ? cart.map( ({image},k) => {
					return(
						<img key={k} src={image}  alt="légumes" width="100" />		
					)
					})		
				: 'aucun ingrédients'}
			
				{cart.length > 0 && 
				<div>
				 <button onClick={searchRecipes}>Rechercher</button>
				 <button onClick={clearProducts}>Effacer</button>
				</div>	
				}
				</Cart>	
			</Div>
		</ParaxStarter>
	);
};

export default Ingredients;
