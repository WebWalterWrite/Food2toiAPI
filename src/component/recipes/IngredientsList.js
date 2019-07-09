import React from 'react';

import { ingredients } from "./data.js";
import { Img, List } from './ingredients.styled';


// tableau légumes
const vegetables = ingredients.filter(({ type }) => type === 'v');

// tableau des herbes aromatiques
const herbs = ingredients.filter(({ type }) => type === 'h');

// tableau féculents
const starchy = ingredients.filter(({ type }) => type === 'f');
// tableau viandes
const meats = ingredients.filter(({ type }) => type === 'm');

// tableau sauces
const sauces = ingredients.filter(({ type }) => type === "s");



const ingredientsList = ({ data: { t, fn } }) => {

    let type = 
    t === "starchy" ? starchy : 
    t === 'vegetables' ? vegetables : 
    t === 'meats' ? meats : 
    t === 'sauces' ? sauces :
    t === 'herbs' && herbs;

    return (
        <List>
            {type.map(({ image, name, id }, k) => {
                return (

                    <div key={k}>
                        <div data-id={id} data-type="v" onClick={fn} >
                            <Img src={image} alt="légumes" width="150" />
                        </div>
                        <p>{name}</p>
                    </div>
                );
            })}
        </List>


    )
};

export default ingredientsList;