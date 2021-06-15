import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Portfolio from "../portfolio/Portfolio";
import Currency from "../currency/Currency";
import NotFound from "../notfound/NotFound";
import Auth from "../auth/Auth";
import Register from "../register/Register";
import ForgotPassword from "../forgotPassword/ForgotPassword";
import ResetPassword from "../resetPassword/ResetPassword";
import Private from "../private/Private";

// Routing
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
	return (
		<Switch>
			{/* <PublicRouter exact path="/" component={Home} /> */}
			
			{/* user auth */}
			
			{/* gmail auth */}
			<Route path="/home" component={Home} />
			<Route path="/portfolio" component={Portfolio} />
			{/* <PrivateRoute path="/" component={Home} /> */}
			<Route exact path="/login" component={Login} />
			<Route exact path="/currency" component={Currency} />
			<Route exact path="/auth" component={Auth} />
			<Route exact path="/register" component={Register} />
			<Route
				exact
				path="/forgotpassword"
				component={ForgotPassword}
			/>
			<Route
				exact
				path="/resetpassword:resetToken"
				component={ResetPassword}
			/>
			<Route exact path="/private" component={Private} />

			<Route exact path="*" component={NotFound} />
		</Switch>
	);
};

export default Routes;
