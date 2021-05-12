import React, { useState, useEffect } from "react";
import axios from "axios";

const useBtcUsd = () => {
  /* States */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin%2Ctether&vs_currencies=usd`
      );
      console.log("Une seule requete");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, []);

  let chargement = "chargement...";

  /*Check isLoading */
  return isLoading ? chargement : data.bitcoin.usd;
};

export default useBtcUsd;
