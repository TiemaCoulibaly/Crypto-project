import React from "react";
import { useGoogleAuth } from "../context/googleAuth";
import useFacebook from "react-easy-facebook";
import {
	GoogleLoginButton,
	FacebookLoginButton,
} from "react-social-login-buttons";

import "./logoutButton.scss";

const LogoutButton = () => {
	const { isSignedIn, signOut } = useGoogleAuth();
	const { logout } = useFacebook({
		appId: "762468841120222",
	});

	return (
		<>
			{isSignedIn ? (
				<div className="btn-logout">
					<GoogleLoginButton
						text="LogOut"
						size="36px"
						onClick={signOut}
					/>
				</div>
			) : (
				<div className="btn-logout">
					<FacebookLoginButton
						text="LogOut"
						size="30px"
						onClick={logout}
					/>
				</div>
			)}
		</>
	);
};

export default LogoutButton;
