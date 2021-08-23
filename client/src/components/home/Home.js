import React from "react";
import CryptoItem from "../cryptoCard/CryptoItem";
import useCryptoCurrentValue from "../hooks/useCryptoCurrentValue";
import ScaleLoader from "react-spinners/ScaleLoader";

import "./home.scss";
const Home = () => {
	const { btcUsd, isLoading } = useCryptoCurrentValue();

	return isLoading ? (
		<div className="spinner">
			<ScaleLoader
				loading={isLoading}
				height={60}
				width={15}
				color="#52b6b2"
			/>
		</div>
	) : (
		<div>
			<main>
				<article>
					{btcUsd.map((crypto, key) => {
						return (
							<CryptoItem
								key={key}
								image={crypto.image}
								name={crypto.name}
								price={crypto.current_price.toFixed(2)}
								variation={crypto.price_change_percentage_24h.toFixed(
									2
								)}
							/>
						);
					})}
				</article>

				<div className="details">
					<h1>Ce que vous pouvez faire sur Crystal ?</h1>
					<article className="article-container">
						<article className="article-item">
							<h2>Derniers cours de cryptomonnaie</h2>
							<img src="images/finance.png" alt="finance" />
						</article>
						<article className="article-item">
							<h2>Acheter de la cryptomonnaie</h2>
							<img src="images/saving.png" alt="saving" />
						</article>
						<article className="article-item">
							<h2>Suivre la valeur de votre portefeuille </h2>
							<img src="images/wallet.png" alt="wallet" />
						</article>
					</article>
				</div>
			</main>
		</div>
	);
};

export default Home;
