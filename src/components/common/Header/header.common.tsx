import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.common.scss';

const NavigationComponents = () => (
	<div className="navigation">
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/products">
					Products
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/about">
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/contact">
					Contact
				</NavLink>
			</li>
			<li>
				<button onClick={() => window.open('/shalom-handicraft-catalogue.pdf')}>Download Catalogue &gt;</button>
			</li>
		</ul>
	</div>
);

const Header: React.FC = () => {
	const [expand, setExpand] = useState<boolean>(false);
	return (
		<nav className="navbar">
			<Link to="/" className="navbar-brand">
				ShalomHandicrafts
			</Link>
			<button className="burger-container hide-lg" onClick={() => setExpand(!expand)}>
				<div className={expand ? 'active' : ''}>
					<div id="burger-1" className="burger-icon"></div>
					<div id="burger-2" className="burger-icon"></div>
					<div id="burger-3" className="burger-icon"></div>
				</div>
			</button>
			{window.screen.width >= 800 ? <NavigationComponents /> : expand ? <NavigationComponents /> : <></>}
		</nav>
	);
};

export default Header;
