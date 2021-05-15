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
      <h2> Wallet 0 </h2>
      <p class="balance">
        {walletUsd.bitcoin.amount} btc = {walletUsd.bitcoin.usd.toFixed(2)} $
      </p>
      <p class="balance">
        {walletUsd.ethereum.amount} eth = {walletUsd.ethereum.usd.toFixed(2)} $
      </p>
      <p class="balance">
        {walletUsd.binancecoin.amount} bnb ={" "}
        {walletUsd.binancecoin.usd.toFixed(2)} $
      </p>
      <p class="balance">
        {walletUsd.litecoin.amount} ltc = {walletUsd.litecoin.usd.toFixed(2)} $
      </p>
      <p class="balance">
        {" "}
        {walletUsd.tether.amount} usdt = {walletUsd.tether.usd.toFixed(2)} $
      </p>
      <br />
      <p class="balance">Total: {walletUsd.total.usd.toFixed(2)} USD </p>
    </div>
  );
};

export default Portfolio;
