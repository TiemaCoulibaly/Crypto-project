import React, { useState, useEffect } from "react";
import useCryptoPrice from "../hooks/useCryptoPrice";
import useWalletData from "../hooks/useWalletData";

import "./portfolio.scss";

const Portfolio = () => {
  const { data } = useWalletData();

  const { walletUsd, isLoading } = useCryptoPrice(data ? data[0].wallet : null);
  console.log(walletUsd, isLoading);

  return isLoading ? (
    "chargement"
  ) : (
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
      <p class="balance">Total : {walletUsd.bitcoin.usd} </p>
      <p class="balance">Total : {walletUsd.litecoin.usd} </p>
      <p class="balance">Total : {walletUsd.binancecoin.usd} </p>
      <p class="balance">Total : {walletUsd.ethereum.usd} </p>
      <p class="balance">Total : {walletUsd.tether.usd} </p>
      <p>Au taux actuel de dollars par BTC cela fait un total de : </p>
      <p class="balance"> USD </p>
    </div>
  );
};

export default Portfolio;
