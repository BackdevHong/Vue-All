import { createWebHistory, createRouter } from "vue-router";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

const routes = [
	{
		path: "/",
		redirect: "/news",
	},
	{
		path: "/News",
		name: "news",
		component: NewsView,
	},
	{
		path: "/Ask",
		name: "ask",
		component: AskView,
	},
	{
		path: "/Jobs",
		name: "jobs",
		component: JobsView,
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
