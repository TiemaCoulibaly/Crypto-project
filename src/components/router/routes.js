import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Portfolio from "../portfolio/Portfolio";
import Currency from "../currency/Currency";
import NotFound from "../notfound/NotFound";

const routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/currency" component={Currency} />
			<Route exact path="/login" component={Login} />
			<Route exact path="*" component={NotFound} />
		</Switch>
	);
};

export default routes;
