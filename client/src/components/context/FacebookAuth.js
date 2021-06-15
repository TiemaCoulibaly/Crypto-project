import React, { createContext, useContext } from "react";
import useFacebook from "react-easy-facebook";

const FacebookAuthContext = createContext();

export const FacebookAuthProvider = ({ children }) => {
	const facebookAuth = useFacebook({
		appId: "762468841120222", //client ID from facebook
	});

	return (
		<FacebookAuthContext.Provider value={facebookAuth}>
			{children}
		</FacebookAuthContext.Provider>
	);
};
export const useFacebookAuth = () => {
	useContext(FacebookAuthContext);
};
