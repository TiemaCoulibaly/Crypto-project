import React from "react";
import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../config";

import "./private.scss";

const Private = () => {
	const [error, setError] = useState("");
	const [privateData, setPrivateData] = useState("");
	let history = useHistory();

	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			history.push("/");
		}

		const fetchPrivateData = async () => {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem(
						"authToken"
					)}`,
				},
			};

			try {
				const { data } = await axiosInstance.get(
					"/api/private",
					config
				);
				setPrivateData(data.data);
			} catch (error) {
				localStorage.removeItem("authToken");
				setError("");
			}
		};

		fetchPrivateData();
	}, [history]);

	const logoutHandler = () => {
		localStorage.removeItem("authToken");
		history.push("/");
	};

	return error ? (
		<span className="error-message">{error}</span>
	) : (
		<>
			<button onClick={logoutHandler} className="logout">
				Logout
			</button>
		</>
	);
};

export default Private;
