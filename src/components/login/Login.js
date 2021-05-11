import React from "react";
import "../login/login.scss";

import LoginButton from "../buttons/LoginButton";

const Login = () => {
	//	const { user, setUser } = useContext(UserContext);

	//const responseGoogle = (response) => {
	//response.profileObj.name;
	//const data = response.profileObj.name;
	//console.log(response);
	//};

	return (
		<>
			<div id="container">
				<form>
					<h1>Connexion</h1>

					<label>
						<b>Nom d'utilisateur</b>
					</label>
					<input
						type="text"
						placeholder="Entrer le nom d'utilisateur"
						name="username"
					/>

					<label>
						<b>Mot de passe</b>
					</label>
					<input
						type="password"
						placeholder="Entrer le mot de passe"
						name="password"
					/>
				</form>
				<LoginButton />
			</div>
		</>
	);
};
export default Login;
