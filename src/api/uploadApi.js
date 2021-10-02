import axiosClient from "./axiosClient";

const uploadApi = {
	async uploadImage(values) {
		const url = `/upload`;
		return await axiosClient.get(url, values, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	},
};

export default uploadApi;
