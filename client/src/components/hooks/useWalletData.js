import axios from "axios";
import { useState, useEffect } from "react";

//import { axiosInstance } from "../../config";

const useWalletData = () => {
	/* States */
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	/* Fetch Data with axios + async/await */
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://firebasestorage.googleapis.com/v0/b/crystal-users.appspot.com/o/random_user.json?alt=media&token=57dd2dd3-0e19-448c-b10e-6584493d73ba`
			);
			//console.log("Hello UseWalletData");
			setData(response.data);

			setIsLoading(false);
		};
		fetchData();
		// le [] empeche la requete de boucler à l'infini
	}, []);

	/*Check isLoading */
	return { isLoading, data };
};

export default useWalletData;
