import React from "react";
import { useGoogleAuth } from "../context/googleAuth";

import "./logoutButton.scss";

const LogoutButton = () => {
	const { signOut } = useGoogleAuth();
	return (
		<button className="btn-logout" onClick={signOut}>
			Logout
		</button>
	);
};

export default LogoutButton;
