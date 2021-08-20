import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./resetPassword.scss";
import { axiosInstance } from "../../../../config";

const ResetPassword = ({ match }) => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const resetPasswordHandler = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		if (password !== confirmPassword) {
			setPassword("");
			setConfirmPassword("");
			setTimeout(() => {
				setError("");
			}, 5000);
			return setError("Les mots de passe ne correspondent pas");
		}

		try {
			const { data } = await axiosInstance.put(
				`/api/auth/resetpassword/${match.params.resetToken}`,
				{
					password,
				},
				config
			);

			setSuccess(data.data);
		} catch (error) {
			setError(error.response.data.error);
			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};

	return (
		<div className="resetpassword-screen">
			<form
				onSubmit={resetPasswordHandler}
				className="resetpassword-screen__form">
				<h3 className="resetpassword-screen__title">
					Mot de passe oublié
				</h3>
				{error && <span className="error-message">{error} </span>}
				{success && (
					<span className="success-message">
						{success} <Link to="/login">Se connecter</Link>
					</span>
				)}
				<div className="form-group">
					<label htmlFor="password">Nouveau mot de passe :</label>
					<input
						type="password"
						required
						id="password"
						placeholder="Choisissez un nouveau mot de passe"
						autoComplete="true"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmpassword">
						Confirmez le nouveau mot de passe :
					</label>
					<input
						type="password"
						required
						id="confirmpassword"
						placeholder="Confirm new password"
						autoComplete="true"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Valider
				</button>
			</form>
		</div>
	);
};

export default ResetPassword;
