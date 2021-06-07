import React from "react";
import CryptoItem from "../cryptoCard/CryptoItem";
import { CryptoList } from "../helpers/CryptoList";

import "./home.scss";
const Home = () => {
	return (
		<div>
			<main>
				<article>
					{CryptoList.map((crypto, key) => {
						return (
							<CryptoItem
								key={key}
								name={crypto.name}
								price={crypto.price}
								value={crypto.value}
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
