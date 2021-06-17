import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import "./portfolio.scss";

const GraphCurrency = ({ name, one, two, three, four, five }) => {
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["btc", "eth", "btc", "ltc", "usdt"],
			datasets: [
				{
					type: "doughnut",
					label: "",
					data: [one, two, three, four, five],
					backgroundColor: [
						"rgba(137, 166, 251)",
						"rgba(75, 192, 192, 1)",
						"rgba(120, 195, 251)",
						"rgba(22, 224, 189)",
						"rgba(152, 193, 217)",
					],
					borderColor: [
						"rgba(137, 166, 251)",
						"rgba(75, 192, 192, 1)",
						"rgba(120, 195, 251)",
						"rgba(22, 224, 189)",
						"rgba(152, 193, 217)",
					],
					borderWidth: 3,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<>
			<p>
				<div
					className="chart"
					style={{
						width: "600px",
						height: "auto",
					}}>
					<Line
						data={chartData}
						options={{
							plugins: {
								legend: {
									display: false,
								},
							},
						}}
					/>
				</div>
			</p>
		</>
	);
};
export default GraphCurrency;
