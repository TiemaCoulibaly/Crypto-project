import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useGoogleAuth } from "../context/googleAuth";

const PublicRouter = ({ component: Component, ...rest }) => {
	const { isSignedIn } = useGoogleAuth();
	let history = useHistory();

	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					!isSignedIn || !localStorage.getItem("authToken") ? (
						<Component {...props} />
					) : (
						history.push("/home")
						// <Redirect exact to="/home" />
					)
				}
			/>
		</div>
	);
};

export default PublicRouter;
