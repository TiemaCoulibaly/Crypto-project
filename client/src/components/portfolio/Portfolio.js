import useCryptoPrice from "../hooks/useCryptoPrice";
import useWalletData from "../hooks/useWalletData";
import GraphWallet from "./GraphWallet";

import ScaleLoader from "react-spinners/ScaleLoader";

import "./portfolio.scss";

const Portfolio = () => {
	const { data } = useWalletData();
	const { walletUsd, isLoading } = useCryptoPrice(
		data ? data[0].wallet : null
	);

	return isLoading ? (
		<>
			<div className="spinner">
				<ScaleLoader
					loading={isLoading}
					height={60}
					width={15}
					color="#52b6b2"
				/>
			</div>

			<span className="cors">
				You have to enable you cors & Download this google extension to
				see you portfolio graph
				<br></br>
				<u>
					{" "}
					https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr
				</u>
			</span>
		</>
	) : (
		<div className="wallet">
			<h2 className="balance">Composition de votre wallet Crypto</h2>
			<br />
			<h3>
				<GraphWallet
					name="Wallet Current Value USD"
					one={walletUsd.bitcoin.usd.toFixed(2)}
					two={walletUsd.ethereum.usd.toFixed(2)}
					three={walletUsd.litecoin.usd.toFixed(2)}
					four={walletUsd.tether.usd.toFixed(2)}
					five={walletUsd.tether.usd.toFixed(2)}
				/>{" "}
				<br />
			</h3>

			<span className="balance">
				{walletUsd.bitcoin.amount} btc ={" "}
				{walletUsd.bitcoin.usd.toFixed(2)} $
			</span>
			<span className="balance">
				{walletUsd.ethereum.amount} eth ={" "}
				{walletUsd.ethereum.usd.toFixed(2)} $
			</span>
			<span className="balance">
				{walletUsd.binancecoin.amount} bnb ={" "}
				{walletUsd.binancecoin.usd.toFixed(2)} $
			</span>
			<span className="balance">
				{walletUsd.litecoin.amount} ltc ={" "}
				{walletUsd.litecoin.usd.toFixed(2)} $
			</span>
			<span className="balance">
				{" "}
				{walletUsd.tether.amount} usdt ={" "}
				{walletUsd.tether.usd.toFixed(2)} $
			</span>
			<br />
			<span className="total">
				Total: {walletUsd.total.usd.toFixed(2)} USD{" "}
			</span>
		</div>
	);
};

export default Portfolio;
