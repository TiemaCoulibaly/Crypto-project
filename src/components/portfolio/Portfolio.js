import useCryptoPrice from "../hooks/useCryptoPrice";
import useWalletData from "../hooks/useWalletData";
import GraphWallet from "./GraphWallet";

import "./portfolio.scss";

const Portfolio = () => {
  const { data } = useWalletData();
  const { walletUsd, isLoading } = useCryptoPrice(data ? data[0].wallet : null);

  // const { btc } = useGraphCurrency("bitcoin");
  // console.log(btc);
  // const { eth } = useGraphCurrency("ethereum");
  // console.log(eth);


  return isLoading ? (
    "chargement"
  ) : (
    <div class="wallet">
      <p>
        <button>1D</button>
        <button>1M</button>
        <button>ALL</button>
      </p>
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

      <p className="balance">
        {walletUsd.bitcoin.amount} btc = {walletUsd.bitcoin.usd.toFixed(2)} $
      </p>
      <p className="balance">
        {walletUsd.ethereum.amount} eth = {walletUsd.ethereum.usd.toFixed(2)} $
      </p>
      <p className="balance">
        {walletUsd.binancecoin.amount} bnb ={" "}
        {walletUsd.binancecoin.usd.toFixed(2)} $
      </p>
      <p className="balance">
        {walletUsd.litecoin.amount} ltc = {walletUsd.litecoin.usd.toFixed(2)} $
      </p>
      <p className="balance">
        {" "}
        {walletUsd.tether.amount} usdt = {walletUsd.tether.usd.toFixed(2)} $
      </p>
      <br />
      <p className="balance">Total: {walletUsd.total.usd.toFixed(2)} USD </p>
    </div>
  );

};

export default Portfolio;
