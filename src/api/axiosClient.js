import axios from "axios";

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_BASE_API,
	headers: {
		"Content-type": "application/json",
	},
});

// Interceptors

axiosClient.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem("access_token");

		if (!!token) {
			config.headers.authorization = `Bearer ${token}`;
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		const { config, status, data } = error.response;
		const URLS = ["/user/m/login", "/auth/local"];
		if (URLS.includes(config.url) && status === 401) {
			throw new Error(data.msg);
		}
		console.log("error :", data.msg);
		// throw new HttpException();
		return Promise.reject(error);
	}
);

export default axiosClient;
