import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import ChartCard from "../currency/ChartCard.js";
import "./cryptoItem.scss";
const CryptoItem = ({ name, price, variation, image, symbol }) => {
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["Bitcoin", "Ethereum", "Bnb", "Usdt", "Other"],
			datasets: [
				{
					label: "Le cours des cryptomonnaies",
					data: [19, 12, 5, 3, 2],
					backgroundColor: [
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
					],
					borderColor: [
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
					],
					borderWidth: 1,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);

	// condition lorsque la variation est inférieur a 0 on fait appel a la class red qui contient le css background red
	const vote = (vote) => {
		if (vote < 0) {
			return "red";
		}
	};
	return (
		<figure>
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
			<ChartCard name={name.toLowerCase()} />
			<h3>{price}$</h3>

			<figcaption className={`tag ${vote(variation)}`}>
				{variation}%
			</figcaption>
		</figure>
	);
};
export default CryptoItem;
