import React, { useState, useEffect } from "react";
import UseCryptoPrice from "../hooks/useCryptoPrice";
import UseWalletData from "../hooks/useWalletData";

import "./portfolio.scss";

const Portfolio = () => {
  const btc = UseWalletData();
  console.log(btc);
  //console.log(btc[0].wallet.bitcoin);

  const btcUsd = UseCryptoPrice(btc);
  console.log(btcUsd);
  // console.log(btcUsd.bitcoin.usd);

  //  const WalletBtcUsd = btc[0].wallet.bitcoin * btcUsd.bitcoin.usd;
  // console.log(WalletBtcUsd);

  return (
    <div class="wallet">
      <h3>
        <br />
      </h3>
      <p>
        <button>1D</button>
        <button>1M</button>
        <button>ALL</button>
      </p>
      <h2> bitcoin Wallet</h2>
      <p class="balance">Total : {btc} btc </p>
      <p>Au taux actuel de dollars par BTC cela fait un total de : </p>
      <p class="balance">{btcUsd} USD </p>
    </div>
  );
};

export default Portfolio;
