import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

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
	return (
		<figure>
			<h2>
				{" "}
				<img
					src={image}
					alt={symbol}
					style={{
						width: "25px",
						height: "25px",
						marginRight: "10px",
					}}
				/>
				{name}
			</h2>

			<h3>{price}$</h3>
			<div className="chart" style={{ width: "100%", height: "22vh" }}>
				<Line
					data={chartData}
					options={{
						responsive: true,
					}}
				/>
			</div>
			<figcaption>{variation}%</figcaption>
		</figure>
	);
};
export default CryptoItem;
