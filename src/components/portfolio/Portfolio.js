import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import BitcoinPrice from "../BitcoinPrice/BitcoinPrice";
import WalletData from "../WalletData/WalletData";

import "./portfolio.scss";

const Portfolio = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["Bitcoin", "Ethereum", "Bnb", "Usdt", "Other"],
      datasets: [
        {
          label: "Le cours des cryptomonnaies",
          data: [19, 12, 5, 3, 2],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <div class="wallet">
        <h3>
          <BitcoinPrice />
          <br />
          <WalletData />
        </h3>
        <p>
          <button>1D</button>
          <button>1M</button>
          <button>ALL</button>
        </p>
        <h2> My Wallet</h2>
        <p class="evolution"> +1,27% </p>
        <div class="graphWallet">
          <Bar
            data={chartData}
            options={{
              responsive: true,
            }}
          />
        </div>
        <p class="balance">22,530$ </p>
      </div>
    </>
  );
};

export default Portfolio;
