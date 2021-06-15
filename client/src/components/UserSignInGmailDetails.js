import React from "react";
import { useGoogleAuth } from "./context/googleAuth";
//Ce fichier représente les données que l'on peut recupéré de l'utilisateur lorqu'il est authentifié avec gmail
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
