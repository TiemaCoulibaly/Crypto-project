import React from "react";
import CryptoItem from "../cryptoCard/CryptoItem";
import useCryptoCurrentValue from "../hooks/useCryptoCurrentValue";

import "./home.scss";
const Home = () => {
	const { btcUsd, isLoading } = useCryptoCurrentValue();

	return isLoading ? (
		"En cours de chargement ..."
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
						<article>
							<h2>Derniers cours de cryptomonnaie</h2>
							<img src="images/finance.png" alt="finance" />
						</article>
						<article>
							<h2>Acheter de la cryptomonnaie</h2>
							<img src="images/saving.png" alt="saving" />
						</article>
						<article>
							<h2>Suivre la valeur de votre portfeuille </h2>
							<img src="images/wallet.png" alt="wallet" />
						</article>
					</article>
				</div>
			</main>
		</div>
	);
};

export default Home;
