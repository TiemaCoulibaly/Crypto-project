import React, { useState, useEffect } from "react";
import UseBtcUsd from "../hooks/useBtcUsd";
import UseWalletData from "../hooks/useWalletData";

import "./portfolio.scss";

const Portfolio = () => {
  const btcUsd = UseBtcUsd();
  const WalletBtc = UseWalletData();
  const WalletUsd = btcUsd * WalletBtc;
  console.log(WalletUsd);

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
      <h2> My BTC Wallet</h2>
      <p class="balance">Total : {WalletBtc} btc </p>
      <p>Au taux actuel de {btcUsd} dollars par BTC cela fait un total de : </p>
      <p class="balance">{WalletUsd} USD </p>
    </div>
  );
};

export default Portfolio;
