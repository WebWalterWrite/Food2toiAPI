import React from "react";
import PropTypes from 'prop-types';

import { DivLayer } from './parallax.styled';


export const LayerImg = (
	{
		right,
		bottom,
		transform,
		opacity,
		left,
		img,
		width,
		blur
	}
) => {

	return (
	<DivLayer

		right= {right}
		left= {left}
		bottom= {bottom}
		opacity= {opacity}
		transform= {transform}
		width= {width}	
		blur={blur}
	>
	<img src={img} alt="" width="100%" />
</DivLayer>
	)
};

LayerImg.propTypes= ({
	right: PropTypes.number,
	bottom: PropTypes.number,
	transform: PropTypes.string,
	opacity: PropTypes.string,
	left: PropTypes.number,
	img: PropTypes.string,
	width: PropTypes.number,
	blur: PropTypes.number
});

