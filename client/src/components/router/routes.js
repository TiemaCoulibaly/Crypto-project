import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Portfolio from "../portfolio/Portfolio";
import Currency from "../currency/Currency";
import NotFound from "../notfound/NotFound";

import Register from "../register/Register";
import ForgotPassword from "../forgotPassword/ForgotPassword";
import ResetPassword from "../resetPassword/ResetPassword";
// import Private from "../private/Private";

// Routing
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
	return (
		<Switch>
			{/* <PublicRouter exact path="/" component={Private} /> */}
			{/* <PrivateRoute exact path="/" component={Private} /> */}
			<PublicRouter exact path="/" component={Home} />
			<PrivateRoute exact path="/home" component={Home} />
			<PrivateRouter exact path="/home" component={Home} />
			<PrivateRoute exact path="/portfolio" component={Portfolio} />
			<PublicRouter exact path="/login" component={Login} />
			<PublicRouter exact path="/currency" component={Currency} />

			<PublicRouter exact path="/register" component={Register} />
			<PublicRouter
				exact
				path="/forgotpassword"
				component={ForgotPassword}
			/>
			<PublicRouter
				exact
				path="/resetpassword:resetToken"
				component={ResetPassword}
			/>
			{/* user auth */}
			{/* <PrivateRoute exact path="/home" component={Home} /> */}
			{/* gmail auth */}
			{/* <PrivateRouter exact path="/home" component={Home} /> */}
			{/* <PrivateRouter exact path="/portfolio" component={Portfolio} /> */}

			{/* <PrivateRouter exact path="/private" component={Private} /> */}

			<PublicRouter exact path="*" component={NotFound} />
		</Switch>
	);
};

export default Routes;
