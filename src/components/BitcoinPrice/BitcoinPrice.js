import React, { useState, useEffect } from "react";
import axios from "axios";

const BitcoinPrice = () => {
  /* States */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data ID with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  });

  /*Check isLoading */
  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    <div>
      <h3>Bitcoin price : {data.bitcoin.usd}$</h3>
    </div>
  );
};

export default BitcoinPrice;
