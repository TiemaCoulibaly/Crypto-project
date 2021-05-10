import React, { useState, useEffect } from "react";
import axios from "axios";

const DollarWallet = (props) => {
  /* States */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://firebasestorage.googleapis.com/v0/b/crystal-users.appspot.com/o/random_user.json?alt=media&token=57dd2dd3-0e19-448c-b10e-6584493d73ba`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, []);

  /*Check isLoading */
  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    <div>
      {data[0].first_name}'s Wallet
      <br />
      Btc : {data[0].wallet.bitcoin} <br />
      Eth :{data[0].wallet.ethereum}
      <br />
      Bnb : {data[0].wallet.binance_coin} <br />
      Ltc : {data[0].wallet.litecoin}
      <br />
      Usdt :{data[0].wallet.tether}
      <br />
    </div>
  );
};

export default DollarWallet;
