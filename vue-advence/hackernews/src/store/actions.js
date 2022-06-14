import { fetchUserInfo, fetchAskInfo, fetchList } from "../api/index";

export default {
	async FETCH_USER({ commit }, name) {
		const response = await fetchUserInfo(name);
		commit("SET_USER", response.data);
		return response;
	},

	async FETCH_ASKS({ commit }, id) {
		const response = await fetchAskInfo(id);
		commit("SET_ASKS", response.data);
		return response;
	},

	async FETCH_LIST({ commit }, pageName) {
		const response = await fetchList(pageName);
		commit("SET_LIST", response.data);
		return response;
	},

	async FETCH_SPIN({ commit }, status) {
		return commit("SET_SPIN", status);
	},
};
