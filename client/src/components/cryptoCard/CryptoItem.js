import React from "react";

import ChartCard from "../currency/ChartCard.js";
import "./cryptoItem.scss";
const CryptoItem = ({ name, price, variation, image, symbol }) => {
	// condition lorsque la variation est inférieur a 0 on fait appel a la class red qui contient le css background red
	const vote = (vote) => {
		if (vote < 0) {
			return "red";
		}
	};
	return (
		<figure>
			<div className="top">
				<img
					src={image}
					alt={symbol}
					style={{
						width: "25px",
						height: "25px",
						marginRight: "10px",
					}}
				/>
				<h2> {name}</h2>
			</div>
			<h3> {price}$</h3>
			<ChartCard name={name.toLowerCase()} />

			<figcaption className={`tag ${vote(variation)}`}>
				{variation}%
			</figcaption>
		</figure>
	);
};
export default CryptoItem;
