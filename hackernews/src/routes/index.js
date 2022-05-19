import { createWebHistory, createRouter } from "vue-router";
// import AskView from "../views/AskView.vue";
// import JobsView from "../views/JobsView.vue";
// import NewsView from "../views/NewsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView";

const routes = [
	{
		path: "/",
		redirect: "/news",
	},
	{
		path: "/News",
		name: "news",
		// component: NewsView,
		component: createListView("NewsView"),
	},
	{
		path: "/Ask",
		name: "ask",
		// component: AskView,
		component: createListView("AskView"),
	},
	{
		path: "/Jobs",
		name: "jobs",
		// component: JobsView,
		component: createListView("JobsView"),
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
