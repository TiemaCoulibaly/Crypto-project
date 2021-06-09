import React, { useState, useEffect } from "react";
import axios from "axios";

const useCryptoPrice = (currency) => {
  /* States */
  const [GraphCurrency, setGraphCurrency] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    if (!currency) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`
      );
      console.log("Hello UseGraphCurrency");
      setGraphCurrency({
        bitcoin: {
          one: response.data.prices[0] || 0,
        },
      });
      setIsLoading(false);
      console.log(response.data.prices);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, [currency]);

  /*Check isLoading */
  return { isLoading, GraphCurrency };
};

export default useCryptoPrice;
