import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./home.scss";
const Home = () => {
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
		<div>
			<main>
				<article>
					<figure>
						<h2>Bitcoin</h2>
						<h3>40 000€</h3>
						<div
							class="chart"
							style={{ width: "100%", height: "22vh" }}>
							<Line
								data={chartData}
								options={{
									responsive: true,
								}}
							/>
						</div>
						<figcaption>+5,4%</figcaption>
					</figure>
					<figure>
						<h2>Ethereum</h2>
						<h3>20 000€</h3>
						<div
							class="chart"
							style={{ width: "100%", height: "22vh" }}>
							<Line
								data={chartData}
								options={{
									responsive: true,
								}}
							/>
						</div>
						<figcaption>+3,1%</figcaption>
					</figure>
					<figure>
						<h2>Dogecoin</h2>
						<h3>240 000€</h3>
						<div
							class="chart"
							style={{ width: "100%", height: "22vh" }}>
							<Line
								data={chartData}
								options={{
									responsive: true,
								}}
							/>
						</div>
						<figcaption>-1,2%</figcaption>
					</figure>
				</article>

				<div class="details">
					<h2>Pourquoi investir dans la crypto ?</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Deleniti minima labore expedita quas. Vitae, unde
						reiciendis laborum veniam mollitia quidem ratione quas
						autem quae maiores minus delectus pariatur neque facere
						necessitatibus. Laudantium soluta nulla ipsa tenetur
						fugiat iure voluptatibus, ratione quibusdam suscipit, ea
						alias sunt sint eius cupiditate consequatur! Officia,
						ipsum odio animi quis corporis illum veritatis beatae
						ullam veniam?
					</p>
				</div>
			</main>
			<footer>
				&copy; <span>Crystal</span>. All rights reserved
			</footer>
		</div>
	);
};

export default Home;
