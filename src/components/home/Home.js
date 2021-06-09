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
						price={btcUsd.bitcoin.usd}
						value="455"
					/>
					<CryptoItem
						name="Ethereum"
						price={btcUsd.ethereum.usd}
						value="455"
					/>
					<CryptoItem
						name="Litecoin"
						price={btcUsd.litecoin.usd}
						value="455"
					/>
					<CryptoItem
						name="Binancecoin"
						price={btcUsd.binancecoin.usd}
						value="455"
					/>
					<CryptoItem
						name="Tether"
						price={btcUsd.tether.usd}
						value="455"
					/>
					{/* {CryptoList.map((crypto, key) => {
						return (
							<CryptoItem
								key={key}
								name={crypto.name}
								price={crypto.price}
								value={crypto.value}
							/>
						);
					})} */}
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
