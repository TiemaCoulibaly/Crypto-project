import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useGoogleAuth } from "../context/googleAuth";

const LoginButton = () => {
	const { signIn } = useGoogleAuth();

	return (
		<>
			<GoogleLoginButton onClick={signIn} />
		</>
	);
};

export default LoginButton;
