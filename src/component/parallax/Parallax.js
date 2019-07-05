import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Parallax } from "react-parallax";

// import assests and styles
import garlic from "../../assets/images/garlic-744611_640.png";
import tomato from "../../assets/images/tomato-2915838_640.png";
import { Div } from "./parallax.styled";

// import component
import { LayerImg } from "./Layer";

/**
 * @description - Page accueil
 * @param {object} - Contenu
 * @param {img} - background image
 */
export const ParaxTitle = ({ children, img }) => (
  <Parallax
   	bgImage={img}
	  strength={-500} 
  	style={{ height: "100vh" }}>
    {children}
  </Parallax>
);
/**
 * @description - Page Choix recettes entrée / plat
 * @param {object} - Contenu
 * @param {img} - background image
 */
export const ParaxChoice = ({ children, img }) => (
  <Parallax
    bgImage={img}
    bgImageAlt="pasta"
    style={{ height: "100vh" }}
    renderLayer={ percentage => {
      let percent = percentage * 2;
      return (
        <Fragment>
          <Div
            transform={`translate(0px,${percent * 40}px)`}
            opacity={`${percent * 1}`}
          >
            {children}
          </Div>
          {/* Image ail */}
          <LayerImg
            left={-15}
            bottom={percent * 40}
            transform={`rotate(${percent * 45}deg)`}
            width={40}
            blur={2}
            img={garlic}
          />

          {/* Image tomate */}
          <LayerImg
            right={-30}
            bottom={percent * 30}
            transform={`rotate(${percent * 90}deg)`}
            width={60}
            img={tomato}
            blur={6}
          />

        </Fragment>
      );
    }}
  >
    <div style={{ height: "100vh" }} />
  </Parallax>
);

/**
 * @description - Page entrée
 * @param {object} - Contenu
 * @param {img} - background image
 */
export const ParaxStarter = ({ children, img }) => (
  <Parallax
   	bgImage={img}
	  strength={-200} 
  	style={{ height: "100vh" }}>
    {children}
  </Parallax>
);


ParaxTitle.propTypes= ({
	img: PropTypes.string,
	children: PropTypes.object,
});


ParaxChoice.propTypes = ({
	img: PropTypes.string,
	children: PropTypes.array,
});


