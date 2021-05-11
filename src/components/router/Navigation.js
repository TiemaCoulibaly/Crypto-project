import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../buttons/LogoutButton";
import { useGoogleAuth } from "../context/googleAuth";
import "../router/navigation.scss";

const Navigation = () => {
	//const [isSignIn, setSignIn] = useState(false);
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
					{isSignedIn ? (
						<>
							<p>Bonjour, {googleUser.profileObj.name}</p>
							<li className="list-item">
								<NavLink to="/portfolio">Portfolio</NavLink>
							</li>
							<li className="list-item">
								<NavLink to="/currency">Currency</NavLink>
							</li>
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
