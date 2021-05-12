import React, { useState, useEffect } from "react";
import axios from "axios";

const WalletData = () => {
  /* States */
  const [dataW, setDataW] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://firebasestorage.googleapis.com/v0/b/crystal-users.appspot.com/o/random_user.json?alt=media&token=57dd2dd3-0e19-448c-b10e-6584493d73ba`
      );
      console.log(response.data);
      setDataW(response.data);
      setIsLoading(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, []);

  let chargement = "chargement...";

  /*Check isLoading */
  return isLoading ? chargement : dataW[0].wallet.bitcoin;
};

export default WalletData;
