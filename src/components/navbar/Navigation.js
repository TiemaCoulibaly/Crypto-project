import React from "react";
//import { NavLink } from "react-router-dom";
import LogoutButton from "../buttons/LogoutButton";
import { useGoogleAuth } from "../context/googleAuth";
import "./navigation.scss";
import {useState} from 'react';

const Navigation = () => {
	const { isSignedIn, googleUser } = useGoogleAuth();

	const [showLinks,setShowLinks]= useState(false)

	const handleShowLinks = () =>{
		setShowLinks(!showLinks)
	}

	console.log(showLinks);

	return (
		 <header>
			<nav className={`navbar ${showLinks? "show-nav":"hide-nav"}`}>
				{/* <ul>
					<li> */}
						{/* <NavLink exact to="/"> */}
						<div>
						<a href="/">
							<img
								src="images/crystalcoin.png"
								alt="cristal-logo"
							/>
						</a>
						</div>
						{/* </NavLink> */}
					{/* </li> */}
					<ul className="nav-ul">
					<li className="list-item ">
						<a href="/" className="navbar_link">Home</a>
						{/* <NavLink to="/">Home</NavLink> */}
					</li>
					<li className="list-item">
					<a href="/currency" className="navbar_link">Currency</a>
						{/* <NavLink to="/currency">Currency</NavLink> */}
					</li>
					{isSignedIn ? (
						<>
							<li className="list-item">
								<a href="/portfolio" className="navbar_link">Portfolio</a>
								{/* <NavLink to="/portfolio">Portfolio</NavLink> */}
							</li>
							<p>Bonjour, {googleUser.profileObj.name}</p>
							<LogoutButton />
						</>
					) : (
						<li className="list-item">
							<a href="/login" className="navbar_link">Login</a>
							{/* <NavLink to="/login">Login</NavLink> */}
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
