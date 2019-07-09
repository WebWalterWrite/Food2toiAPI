import React from 'react';
import { ParaxStarter } from "../parallax/Parallax";
import { Div } from "../homepage/homepage.styled";
import { RecipeBox, Recipe } from "./recipes.styled";



const RecipesResult = ({data}) =>{

    return(
        <ParaxStarter>
        <Div>
            <h1>La boîte à recettes</h1>
            <RecipeBox>
                {data.map( ({recipe: {image, label}}) =>(
                <Recipe>
                    <div>
                        <img src={image} width="200px" alt="" />
                    </div>
                    <h2>{label}</h2>
                </Recipe>
                 )) }
            </RecipeBox>
        </Div>
        </ParaxStarter>
    )
};

export default RecipesResult;

