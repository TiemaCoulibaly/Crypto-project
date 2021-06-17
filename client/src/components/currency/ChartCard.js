import React from "react";
import TuseGraphCurrency from "../hooks/TuseGraphCurrency";
import GraphCurrency from "./GraphCurrency";

import ClipLoader from "react-spinners/ClipLoader";

const chartCard = (name) => {
	let currency = name;

	const { Graph, isLoad } = TuseGraphCurrency(currency.name);

	/*
	 */
	return isLoad ? (
		<div className="spinner">
			<ClipLoader loading={isLoad} size={50} color="#52b6b2" />
		</div>
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
