import { createStore } from "vuex";
import { fetchNewsList } from "../api/index";
export default createStore({
	state: {
		news: [],
	},
	mutations: {
		SET_NEWS() {},
	},
	actions: {
		FETCH_NEWS(context) {
			fetchNewsList()
				.then((responce) => {
					console.log(responce.data);
					context.commit("SET_NEWS");
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
});
