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
			<PublicRouter exact path="/" component={Home} />
			<PublicRouter exact path="/login" component={Login} />
			<PrivateRouter path="/home" component={Home} />
			<PrivateRouter path="/portfolio" component={Portfolio} />
			<Route path="/currency" component={Currency} />
			<PublicRouter exact path="/auth" component={Auth} />
			<PublicRouter exact path="/register" component={Register} />
			<PublicRouter exact path="/forgotpassword" component={ForgotPassword} />
			<PublicRouter exact path="/resetpassword:resetToken" component={ResetPassword} />
			<PrivateRouter exact path="/private" component={Private} />

			<PublicRouter exact path="*" component={NotFound} />      
		</Switch>
	);
};

export default Routes;
