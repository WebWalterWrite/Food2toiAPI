import React from "react";
import PropTypes from "prop-types";

// import video
import styles from "./scss/homepage.all.scss";

// Import HOC
import selectData from "../../hoc/selectData.hoc";

// Import API
import { getRecipes } from "../../utils/api";

const HomePage = ({ content }) => {
  console.log(content);
  return (
    <section>
      {content.map(({ recipe }) => {
        return <p>{recipe.label}</p>;
      })}
    </section>
  );
};

const Home = selectData(HomePage, () => getRecipes("chicken", "potatoes"));

export default Home;
