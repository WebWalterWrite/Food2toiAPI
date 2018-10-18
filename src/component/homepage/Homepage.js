import React from 'react';
import PropTypes from 'prop-types';

// import video
import styles from './scss/homepage.all.scss'

import food from '../../cooking.mp4';
// Import HOC
import selectData from '../../hoc/selectData.hoc';

// Import API
import { getRecipes } from '../../utils/api';

const HomePage = ({ content }) =>{
   console.log(content)
    return(

        <section>
            {content.map( ({recipe}) => {
                return(
                <p>{recipe.label}</p>
                )
            })}

        <div className="shadow">
        <button>ENTER</button>
        </div>

        <video autoPlay id="video-background" muted>
        <source src={food} type="video/mp4"/>
        <source src={ food } type="video/ogg"/>
        </video>

        </section>
    )

}

const Home = selectData(HomePage, () => getRecipes('chicken','potatoes') );

export default Home;
