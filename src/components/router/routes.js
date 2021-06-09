import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Portfolio from "../portfolio/Portfolio";
import Currency from "../currency/Currency";
import NotFound from "../notfound/NotFound";

import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

const Routes = () => {
	return (
		<Switch>
			<PublicRouter exact path="/" component={Home} />
			<PublicRouter exact path="/login" component={Login} />
			<PrivateRouter path="/home" component={Home} />
			<PrivateRouter path="/portfolio" component={Portfolio} />
			<Route path="/currency" component={Currency} />

			<PublicRouter exact path="*" component={NotFound} />
		</Switch>
	);
};

export default Routes;
