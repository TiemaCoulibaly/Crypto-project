import React from "react";
import TuseGraphCurrency from "../hooks/TuseGraphCurrency";
import GraphCurrency from "./GraphCurrency";

const chartCard = (name) => {
	let currency = name;

	const { Graph, isLoad } = TuseGraphCurrency(currency.name);

	/*
	 */
	return isLoad ? (
		"chargement..."
	) : (
		<>
			<GraphCurrency
				name={currency.name}
				one={Graph.currency.one}
				two={Graph.currency.two}
				three={Graph.currency.three}
				four={Graph.currency.four}
				five={Graph.currency.five}
			/>
		</>
	);
};

export default chartCard;
