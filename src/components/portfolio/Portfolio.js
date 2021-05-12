import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import useBtcUsd from "../hooks/useBtcUsd";

import "./portfolio.scss";

const Portfolio = () => {
  const btcUsd = useBtcUsd();
  console.log(btcUsd);

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
      <h2> My Wallet</h2>
      <p class="balance">
        <useBtcUsd /> USD{" "}
      </p>
    </div>
  );
};

export default Portfolio;
