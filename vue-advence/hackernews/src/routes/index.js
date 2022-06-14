import { createWebHistory, createRouter } from "vue-router";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
// import createListView from "../views/CreateListView";
import store from "../store/index.js";

const routes = [
	{
		path: "/",
		redirect: "/news",
	},
	{
		path: "/News",
		name: "news",
		component: NewsView,
		beforeEnter: (to, from, next) => {
			store.dispatch("FETCH_SPIN", true);
			store
				.dispatch("FETCH_LIST", to.name)
				.then(() => {
					store.dispatch("FETCH_SPIN", false);
					next();
					console.log("fetched");
				})
				.catch((error) => {
					store.dispatch("FETCH_SPIN", true);
					console.log(error);
				});
			// console.log("to", to);
			// console.log("from", from);
			// console.log("next", next);
		},
		// component: createListView("NewsView"),
	},
	{
		path: "/Ask",
		name: "ask",
		component: AskView,
		beforeEnter: (to, from, next) => {
			store.dispatch("FETCH_SPIN", true);
			store
				.dispatch("FETCH_LIST", to.name)
				.then(() => {
					store.dispatch("FETCH_SPIN", false);
					next();
					console.log("fetched");
				})
				.catch((error) => {
					store.dispatch("FETCH_SPIN", true);
					console.log(error);
				});
		},
		// component: createListView("AskView"),
	},
	{
		path: "/Jobs",
		name: "jobs",
		component: JobsView,
		beforeEnter: (to, from, next) => {
			store.dispatch("FETCH_SPIN", true);
			store
				.dispatch("FETCH_LIST", to.name)
				.then(() => {
					store.dispatch("FETCH_SPIN", false);
					next();
					console.log("fetched");
				})
				.catch((error) => {
					store.dispatch("FETCH_SPIN", true);
					console.log(error);
				});
		},
		// component: createListView("JobsView"),
	},
	{
		path: "/Item/:id",
		name: "item",
		component: ItemView,
	},
	{
		path: "/User/:id",
		name: "user",
		component: UserView,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
