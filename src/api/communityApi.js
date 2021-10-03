import axiosClient from "./axiosClient";

const communityApi = {
	async getByUserId(values) {
		const url = `/names?adminId=${values.id}`;
		return await axiosClient.get(url);
	},
	async createCommnutity(values) {
		const url = "/names";

		return await axiosClient.post(url, values);
	},
	async getById(values) {
		const url = `/names?id=${values.id}`;
		return await axiosClient.get(url);
	},
	async getPostByIdCommunity(values) {
		const url = `/community-posts?idCommunity=${values.id}`;
		return await axiosClient.get(url);
	},
};

export default communityApi;
