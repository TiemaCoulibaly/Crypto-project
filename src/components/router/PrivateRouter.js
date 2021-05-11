import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGoogleAuth } from "../context/googleAuth";

const PrivateRouter = ({ component: Component, ...rest }) => {
	const { isSignedIn } = useGoogleAuth();

	return (
		<div>
			<Route
				{...rest}
				render={(props) =>
					isSignedIn ? (
						<Component {...props} />
					) : (
						<Redirect exact from="/" to="/login" />
					)
				}
			/>
		</div>
	);
};

export default PrivateRouter;
