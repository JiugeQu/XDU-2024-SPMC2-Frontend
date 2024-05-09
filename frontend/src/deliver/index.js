import Axios from "axios";

const BASE_URL = "http://localhost:8081";
//const BASE_URL = "http://127.0.0.1:4523/m1/4275135-0-default";
const TIME_out = 20000;

const instance = Axios.create({
	baseURL: BASE_URL,
	timeout: TIME_out,
	headers: {
		"Content-Type": "application/json; charset=utf-8",
	},
});
instance.interceptors.request.use(
	(config) => {
		if (config && config.headers) { // 多一步判断
		config.headers["Authorization"] =
			"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoyLCJpZCI6MSwidXNlcm5hbWUiOiJtaXpvcmUiLCJleHAiOjE3MjE4NDcwNDR9.I8HmPZYllGnjcoEAn6o5TSJm2kbxMYkTuOzaRSx18bU";
		}
		const token = localStorage.getItem("token");
		config.headers["token"] = token;
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
instance.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default instance;

