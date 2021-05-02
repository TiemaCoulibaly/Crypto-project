import React from "react";
import { NavLink } from "react-router-dom";
import "../router/navigation.scss";

const Navigation = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink exact to="/">
							<img
								src="images/crystalcoin.png"
								alt="cristal-logo"
							/>
						</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/currency">Currency</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
