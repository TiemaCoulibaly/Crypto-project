import { useState, useEffect } from "react";
import axios from "axios";

const TuseGraphCurrency = (currency) => {
  /* States */
  const [Graph, setGraph] = useState();
  const [isLoad, setIsLoad] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    if (!currency) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=4&interval=daily`
      );
      //    console.log("a");
      //    console.log(response.data.prices[0][1]);
      //    console.log(response.data.prices[1][1]);
      //    console.log(response.data.prices[2][1]);
      //    console.log(response.data.prices[3][1]);
      //   console.log(response.data.prices[4][1]);
      //   console.log("b");

      setGraph({
        currency: {
          one: response.data.prices[0][1],
          two: response.data.prices[1][1],
          three: response.data.prices[2][1],
          four: response.data.prices[3][1],
          five: response.data.prices[4][1],
        },
      });
      setIsLoad(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, [currency]);

  /*Check isLoading */
  return { isLoad, Graph };
};

export default TuseGraphCurrency;
