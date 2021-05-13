import React, { useState, useEffect } from "react";
import axios from "axios";

const useCryptoPrice = (wallet) => {
  /* States */
  const [walletUsd, setWalletUsd] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    if (!wallet) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin%2Ctether&vs_currencies=usd`
      );
      console.log("Hello UseCryptoPrice");
      setWalletUsd({
        tether: {
          amount: wallet.tether || 0,
          usd: (wallet.tether || 0) * response.data.tether.usd,
        },
        binancecoin: {
          amount: wallet.binance_coin || 0,
          usd: (wallet.binance_coin || 0) * response.data.binancecoin.usd,
        },
        ethereum: {
          amount: wallet.ethereum || 0,
          usd: (wallet.ethereum || 0) * response.data.ethereum.usd,
        },
        litecoin: {
          amount: wallet.litecoin || 0,
          usd: (wallet.litecoin || 0) * response.data.litecoin.usd,
        },
        bitcoin: {
          amount: wallet.bitcoin || 0,
          usd: (wallet.bitcoin || 0) * response.data.bitcoin.usd,
        },
        total: {
          usd:
            (wallet.tether || 0) * response.data.tether.usd +
            (wallet.binance_coin || 0) * response.data.binancecoin.usd +
            (wallet.ethereum || 0) * response.data.ethereum.usd +
            (wallet.litecoin || 0) * response.data.litecoin.usd +
            (wallet.bitcoin || 0) * response.data.bitcoin.usd,
        },
      });
      setIsLoading(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, [wallet]);

  /*Check isLoading */
  return { isLoading, walletUsd };
};

export default useCryptoPrice;
