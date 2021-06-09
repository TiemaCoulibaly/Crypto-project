import { useState, useEffect } from "react";
import axios from "axios";

const useCryptoCurrentValue = () => {
	/* States */
	const [btcUsd, setBtcUsd] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	/* Fetch Data with axios + async/await */
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin%2Ctether&vs_currencies=usd`
			);
			// console.log("====================================");
			// console.log("use crypto value", response.data);
			// console.log("====================================");
			// setBtcUsd(response.data);
			setBtcUsd({
				bitcoin: {
					usd: response.data.bitcoin.usd,
				},
				ethereum: {
					usd: response.data.ethereum.usd,
				},

				litecoin: {
					usd: response.data.litecoin.usd,
				},
				binancecoin: {
					usd: response.data.binancecoin.usd,
				},
				tether: {
					usd: response.data.tether.usd,
				},
			});
			setIsLoading(false);
		};
		fetchData();
		// le [] empeche la requete de boucler à l'infini
	}, []);

	/*Check isLoading */
	return { isLoading, btcUsd };
};

export default useCryptoCurrentValue;
