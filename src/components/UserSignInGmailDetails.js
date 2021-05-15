import React from "react";
import { useGoogleAuth } from "./context/googleAuth";

const UserDetails = () => {
	const { googleUser } = useGoogleAuth();
	return (
		<div>
			<h1>Bonjour, {googleUser.profileObj.name}</h1>
			<h2>Ton email: {googleUser.profileObj.email}</h2>
			<img src={googleUser.profileObj.name} alt="profile pics" />
		</div>
	);
};

export default UserDetails;
