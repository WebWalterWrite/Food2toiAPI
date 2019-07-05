import React from 'react';
import { Transition } from 'react-transition-group';

import { ingredients } from "./data.js";
import { Img, List } from './ingredients.styled';

// tableau viandes
const meats = ingredients.filter( ({type}) => type === 'm' );

// tableau légumes
const vegetables = ingredients.filter( ({type}) => type === 'v' );

// tableau sauces
const sauces = ingredients.filter( ({type})=> type === "s");


const ingredientsList = ({data: {t, fn}}) => {

    let type = t === "vegetables" ? vegetables : t === 'meats' ? meats : t === "sauces" && sauces ;


    return(
        

        <List>
        {type.map(({ image, name, id }, k) => {
            return (

             <div key={k}>
                <div  data-id={id} data-type="v" onClick={fn} >
                    <Img src={image}  alt="légumes" width="150" />
                </div>
                <p>{name}</p>
                </div>
            );
        })}
         </List>

       
    )
};

export default ingredientsList;