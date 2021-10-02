import axiosClient from "./axiosClient";

const userApi = {
	async login(data) {
		const url = "/auth/local";

		return await axiosClient.post(url, data);
	},
	async register(data) {
		const url = "/auth/local/register";

		return await axiosClient.post(url, data);
	},
	async getUserInfo() {
		const url = "/users/me";
		return await axiosClient.get(url);
	},
	async forgotPassword(values) {
		const link = "/auth/forgot-password";

		return await axiosClient.post(link, {
			email: values.email,
			url: "http:/localhost:3000",
		});
	},
	async resetPassword(values) {
		const url = "/auth/reset-password";
		return await axiosClient.post(url, values);
	},
};

export default userApi;
