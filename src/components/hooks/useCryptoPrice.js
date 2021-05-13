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
          usd: (wallet.tether || 0) * response.data.tether.usd,
        },
        binancecoin: {
          usd: (wallet.binance_coin || 0) * response.data.binancecoin.usd,
        },
        ethereum: {
          usd: (wallet.ethereum || 0) * response.data.ethereum.usd,
        },
        litecoin: {
          usd: (wallet.litecoin || 0) * response.data.litecoin.usd,
        },
        bitcoin: {
          usd: (wallet.bitcoin || 0) * response.data.bitcoin.usd,
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
