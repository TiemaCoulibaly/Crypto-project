import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../../../../config";

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
		history.push("/login");
	};

	return error ? (
		<span className="error-message">{error}</span>
	) : (
		<>
			{/* <div style={{ background: "green", color: "white" }}>
				{privateData}
			</div> */}
			<button onClick={logoutHandler}>Se déconnecter</button>
		</>
	);
};

export default Private;
