import { useState, useEffect } from "react";
import axios from "axios";

const useGraphCurrency = (currency) => {
  /* States */
  const [Graph, setGraph] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    if (!currency) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=4&interval=daily`
      );

      setGraph({
        bitcoin: {
          one: response.data.prices[0],
        },
      });
      setIsLoading(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, [currency]);

  /*Check isLoading */
  return { isLoading, Graph };
};

export default useGraphCurrency;
