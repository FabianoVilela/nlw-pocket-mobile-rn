import axios from "axios";

export const api = axios.create({
	baseURL: "http://192.168.3.106:3334",
	timeout: 700,
});
