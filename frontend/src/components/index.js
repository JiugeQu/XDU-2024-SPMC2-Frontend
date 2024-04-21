import Axios from "axios";

const BASE_URL = "http://127.0.0.1:4523";
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
			"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoxLCJpZCI6MSwidXNlcm5hbWUiOiJtaXpvcmUiLCJleHAiOjE3MjE2NjcyMjF9.i-BwwKlGD6Efo1FsoK7PPQOmiV2cdNoilwcQU-fCFIc";
		}
		const token = localStorage.getItem("token");
		config.headers["token"] = token;
		// config.headers["token"] =
		// 	"eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoxLCJpZCI6MSwidXNlcm5hbWUiOiJtaXpvcmUiLCJleHAiOjE3MjE2NjcyMjF9.i-BwwKlGD6Efo1FsoK7PPQOmiV2cdNoilwcQU-fCFIc";
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
