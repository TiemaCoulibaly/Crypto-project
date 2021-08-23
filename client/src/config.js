import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://crystal-crypto.herokuapp.com/",
});
