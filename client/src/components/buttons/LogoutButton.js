import React from "react";
import { useGoogleAuth } from "../context/googleAuth";

import { GoogleLoginButton } from "react-social-login-buttons";

import "./logoutButton.scss";

const LogoutButton = () => {
	const { isSignedIn, signOut } = useGoogleAuth();

	return (
		<>
			{isSignedIn && (
				<div className="btn-logout">
					<GoogleLoginButton
						text="LogOut"
						size="36px"
						onClick={signOut}
					/>
				</div>
			)}
		</>
	);
};

export default LogoutButton;
