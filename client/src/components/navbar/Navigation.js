import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../buttons/LogoutButton";
import { useGoogleAuth } from "../context/googleAuth";
import "./navigation.scss";

import Private from "../private/Private";

const Navigation = () => {
	const { isSignedIn, googleUser } = useGoogleAuth();

	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks);
	};

	return (
		<header>
			<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
				{/* <ul>
					<li> */}

				<NavLink exact to="/">
					<img src="images/crystalcoin.png" alt="cristal-logo" />
				</NavLink>
				{/* </li> */}
				<ul className="nav-ul">
					{/* <li className="list-item ">
						<a href="/" className="navbar_link">
							Home
						</a>
					</li> */}
					<NavLink to="/" className="list-item">
						Home
					</NavLink>

					{/* <li className="list-item">
						<a href="/currency" className="navbar_link">
							Currency
						</a>
					</li> */}
					<NavLink to="/currency" className="list-item">
						Currency
					</NavLink>

					{localStorage.getItem("authToken") || isSignedIn ? (
						<>
							<NavLink to="/portfolio" className="active">
								{" "}
								Portfolio
							</NavLink>
							{/* <li className="list-item">
								<a
									href="/portfolio"
									aria-current="page"
									className="active">
									Portfolio
								</a>
							</li> */}
							{isSignedIn && (
								<p>Bonjour, {googleUser.profileObj.name}</p>
							)}
							<Private />
							<LogoutButton />
						</>
					) : (
						<li className="list-item">
							<NavLink to="/login">Login</NavLink>
						</li>
					)}
				</ul>
				<button className="navbar_burger" onClick={handleShowLinks}>
					<span className="burger-bar"></span>
				</button>
			</nav>
		</header>
	);
};

export default Navigation;
