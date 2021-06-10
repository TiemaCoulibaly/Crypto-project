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
					<CryptoItem variation="0" />
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
