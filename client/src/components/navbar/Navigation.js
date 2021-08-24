import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../buttons/LogoutButton";
import { useGoogleAuth } from "../context/googleAuth";
import "./navigation.scss";

import Private from "../private/Private";

const Navigation = () => {
	const { isSignedIn, googleUser } = useGoogleAuth();

	return (
		<header>
			<nav className="navbar">
				<NavLink exact to="/">
					<img src="images/crystalcoin.png" alt="cristal-logo" />
				</NavLink>

				<ul className="nav-ul">
					<NavLink to="/" className="list-item">
						Home
					</NavLink>

					<NavLink to="/currency" className="list-item">
						Currency
					</NavLink>

					{localStorage.getItem("authToken") || isSignedIn ? (
						<>
							<NavLink to="/portfolio" className="list-item">
								{" "}
								Portfolio
							</NavLink>
							{isSignedIn && (
								<p>Bonjour, {googleUser.profileObj.name}</p>
							)}
							<Private />
							<LogoutButton />
						</>
					) : (
						<NavLink to="/login" className="list-item">
							Login
						</NavLink>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
