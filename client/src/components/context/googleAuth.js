import React, { createContext, useContext } from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
	const googleAuth = useGoogleLogin({
		clientId:
			"438026711114-gh1eai0c9jvjbvb8fvtsi9svnu44kcsf.apps.googleusercontent.com", // clientID from Google.
	});

	return (
		<GoogleAuthContext.Provider value={googleAuth}>
			{children}
		</GoogleAuthContext.Provider>
	);
};

export const useGoogleAuth = () => useContext(GoogleAuthContext);
