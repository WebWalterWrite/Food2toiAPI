import React from 'react';
import { ParaxStarter } from "../parallax/Parallax";
import { Div } from "../homepage/homepage.styled";



const RecipesResult = ({data}) =>{

    console.log(data)
    return(
        <ParaxStarter>
        <Div>
            <h1>recettes trouvées</h1>
        </Div>
        </ParaxStarter>
    )
};

export default RecipesResult;

