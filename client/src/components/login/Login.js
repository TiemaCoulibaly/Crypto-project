import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./login.scss";

import { useHistory } from "react-router-dom";

import LoginButton from "../buttons/LoginButton";
import { axiosInstance } from "../../config";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	let history = useHistory();

	// Une fois que l'utilisateur est connecté, on ne veut pas qu'il aille sur les pages Register et Login

	useEffect(() => {
		if (localStorage.getItem("authToken")) {
			history.push("/home");
		}
	}, [history]);

	const loginHandler = async (e) => {
		e.preventDefault();

		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};

		try {
			const { data } = await axiosInstance.post(
				"/api/auth/login",
				{ email, password },
				config
			);

			localStorage.setItem("authToken", data.token);

			history.push("/");
		} catch (error) {
			setError(error.response.data.error);
			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};
	return (
		<>
			<div id="container">
				<form onSubmit={loginHandler}>
					<h1>Connexion</h1>
					{error && <span className="error-message">{error}</span>}

					<label>
						<b>Nom d'utilisateur</b>
					</label>
					<input
						type="email"
						required
						id="email"
						placeholder="Entrez votre addresse mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						tabIndex={1}
					/>

					<label>
						<b>Mot de passe: </b>{" "}
						<Link
							to="/forgotpassword"
							className="login-screen__forgotpassword"
							tabIndex={4}></Link>
					</label>
					<input
						type="password"
						required
						id="password"
						placeholder="Choisissez un mot de passe"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						tabIndex={2}
					/>
					<Link to="/register" className="btn-register">
						S'inscrire
					</Link>

					<span className="login-screen__subtext">
						Pas encore de compte ?{" "}
					</span>
					<button type="submit" tabIndex={3} className="register">
						Se connecter
					</button>
				</form>
				<LoginButton />
			</div>
		</>
	);
};
export default Login;
