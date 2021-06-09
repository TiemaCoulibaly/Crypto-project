import React from "react";
import CryptoItem from "../cryptoCard/CryptoItem";
import useCryptoCurrentValue from "../hooks/useCryptoCurrentValue";

import "./home.scss";
const Home = () => {
	const { btcUsd, isLoading } = useCryptoCurrentValue();

	//valeur 1 crypto => btcUsd.bitcoin.usd.bitcoin
	//valeur des 5 crypto => btcUsd.bitcoin.usd

	// console.log("============btcUsd========================");
	// console.log(btcUsd.bitcoin.usd);

	return isLoading ? (
		"sa vient"
	) : (
		<div>
			<main>
				<article>
					<CryptoItem
						name="Bitcoin"
						price={btcUsd.bitcoin.usd.toFixed(2)}
						value={btcUsd.bitcoin.variation.toFixed(2)}
					/>
					<CryptoItem
						name="Ethereum"
						price={btcUsd.ethereum.usd.toFixed(2)}
						value={btcUsd.ethereum.variation.toFixed(2)}
					/>
					<CryptoItem
						name="Litecoin"
						price={btcUsd.litecoin.usd.toFixed(2)}
						value={btcUsd.litecoin.variation.toFixed(2)}
					/>
					<CryptoItem
						name="Binancecoin"
						price={btcUsd.binancecoin.usd.toFixed(2)}
						value={btcUsd.binancecoin.variation.toFixed(2)}
					/>
					<CryptoItem
						name="Tether"
						price={btcUsd.tether.usd.toFixed(2)}
						value={btcUsd.tether.variation.toFixed(2)}
					/>
				</article>

				<div className="details">
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
		</div>
	);
};

export default Home;
