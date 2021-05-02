import React from "react";
import "../login/login.scss";

const Login = () => {
	return (
		<>
			<div id="container">
				{/* zone de connexion */}

				<form>
					<h1>Connexion</h1>

					<label>
						<b>Nom d'utilisateur</b>
					</label>
					<input
						type="text"
						placeholder="Entrer le nom d'utilisateur"
						name="username"
						required
					/>

					<label>
						<b>Mot de passe</b>
					</label>
					<input
						type="password"
						placeholder="Entrer le mot de passe"
						name="password"
						required
					/>

					{/* input type="submit" src="http://127.0.0.1:5501/portfolio.html" id='submit' value='LOGIN' */}
					<button class="connexion">
						<a href="http://127.0.0.1:5501/portfolio.html">LOGIN</a>
					</button>
				</form>
			</div>
		</>
	);
};
export default Login;
