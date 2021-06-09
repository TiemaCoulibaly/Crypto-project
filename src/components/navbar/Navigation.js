import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../buttons/LogoutButton";
import { useGoogleAuth } from "../context/googleAuth";
import "./navigation.scss";

const Navigation = () => {
	const { isSignedIn, googleUser } = useGoogleAuth();

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
						<NavLink to="/currency">Currency</NavLink>
					</li>
					{isSignedIn ? (
						<>
							<li className="list-item">
								<NavLink to="/portfolio">Portfolio</NavLink>
							</li>
							<p>Bonjour, {googleUser.profileObj.name}</p>
							<LogoutButton />
						</>
					) : (
						<li className="list-item">
							<NavLink to="/login">Login</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
