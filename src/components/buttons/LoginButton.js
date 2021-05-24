import React from "react";
import {
	GoogleLoginButton,
	FacebookLoginButton,
} from "react-social-login-buttons";
import { useGoogleAuth } from "../context/googleAuth";
import useFacebook from "react-easy-facebook";

const LoginButton = () => {
	const { signIn } = useGoogleAuth();
	const { login } = useFacebook({
		appId: "762468841120222",
	});

	return (
		<>
			<GoogleLoginButton onClick={signIn} />
			<FacebookLoginButton onClick={login} />
		</>
	);
};

export default LoginButton;
