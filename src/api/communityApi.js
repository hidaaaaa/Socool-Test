import axiosClient from "./axiosClient";

const communityApi = {
	async getByUserId(values) {
		const url = `/communities?adminId=${values.id}`;
		return await axiosClient.get(url);
	},
	async createCommnutity(values) {
		const url = "/communities";

		return await axiosClient.post(url, values);
	},
	async getById(values) {
		const url = `/communities?id=${values.id}`;
		return await axiosClient.get(url);
	},
	async getPostByIdCommunity(values) {
		const url = `/community-posts?idCommunity=${values.id}`;
		return await axiosClient.get(url);
	},
};

export default communityApi;
