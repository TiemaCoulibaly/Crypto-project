import React from "react";

// import { Chart } from "chart.js";
import "./portfolio.scss";

const Portfolio = () => {
	//var ctx = document.getElementById("myChart").getContext("2d");
	// new Chart(ctx, {
	// 	type: "bar",
	// 	data: {
	// 		labels: ["Bitcoin", "Ethereum", "Bnb", "Usdt", "Other"],
	// 		datasets: [
	// 			{
	// 				label: "",
	// 				data: [19, 12, 5, 3, 2],
	// 				backgroundColor: [
	// 					"rgba(75, 192, 192, 0.2)",
	// 					"rgba(75, 192, 192, 0.2)",
	// 					"rgba(75, 192, 192, 0.2)",
	// 					"rgba(75, 192, 192, 0.2)",
	// 					"rgba(75, 192, 192, 0.2)",
	// 				],
	// 				borderColor: [
	// 					"rgba(75, 192, 192, 1)",
	// 					"rgba(75, 192, 192, 1)",
	// 					"rgba(75, 192, 192, 1)",
	// 					"rgba(75, 192, 192, 1)",
	// 					"rgba(75, 192, 192, 1)",
	// 				],
	// 				borderWidth: 1,
	// 			},
	// 		],
	// 	},
	// 	options: {
	// 		scales: {
	// 			y: {
	// 				beginAtZero: true,
	// 			},
	// 		},
	// 	},
	// });
	return (
		<>
			<div class="wallet">
				<p>
					<button>1D</button>
					<button>1M</button>
					<button>ALL</button>
				</p>
				<h2> My Wallet</h2>
				<p class="evolution"> +1,27% </p>
				<div class="graphWallet">
					<canvas id="myChart" width="400" height="400"></canvas>
				</div>
				<p class="balance">22,530$ </p>
			</div>
		</>
	);
};

export default Portfolio;
