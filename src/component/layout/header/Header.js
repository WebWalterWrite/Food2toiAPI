import React, { PureComponent } from "react";

import { Title, Span, FontSpan } from './header.styled'


class Header extends PureComponent {

	render() {

		return (
			<header>
				<Title color="white"> 
					<Span>FOOD</Span>
					2TOI
          <FontSpan>.com</FontSpan>
				</Title>

			</header>
		);
	}
}

export default Header;
