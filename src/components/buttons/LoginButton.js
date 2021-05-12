import React from "react";
import { useGoogleAuth } from "../context/googleAuth";
import "./loginButton.scss";

const LoginButton = () => {
	const { signIn } = useGoogleAuth();

	return (
		<>
			{/* <button className="google-icon-wrapper" onClick={signIn}>
				<img
					className="google-icon"
					src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
					alt="googleicon"
				/>
				Sign in
			</button> */}
			<div className="google-icon-wrapper">
				<input
					onClick={signIn}
					className="google-icon"
					type="image"
					src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
					alt="google-signin"
				/>
			</div>
		</>
	);
};

export default LoginButton;
