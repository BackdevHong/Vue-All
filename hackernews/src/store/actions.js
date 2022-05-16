import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index"

export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then((responce) => {
				console.log(responce.data);
				context.commit("SET_NEWS", responce.data);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => {
				commit("SET_JOBS", data);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	FETCH_ASK({ commit }) {
		fetchAskList()
			.then(({ data }) => {
				commit("SET_ASK", data);
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
