import React from "react";
import { ParaxStarter } from "../parallax/Parallax";
import starterBack from "../../assets/images/starterbackground.jpg";


const Country = () => {

    return(
        <ParaxStarter img={starterBack}>

        <h1>Recherche par type de cuisine</h1>
        </ParaxStarter>
    )
};

export default Country;