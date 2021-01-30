import React, { Component } from 'react';

import './header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="header__nav">
				<p className="header__nav--item">🏠 Home </p>
				<p className="header__nav--item">🌮 Tacos </p>
				<p className="header__nav--item">👋 About </p>
			</div>
		);
	}
}

export default Header;
