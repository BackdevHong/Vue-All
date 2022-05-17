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
		component: NewsView,
	},
	{
		path: "/Ask",
		component: AskView,
	},
	{
		path: "/Jobs",
		component: JobsView,
	},
	{
		path: "/Item/:id",
		component: ItemView,
	},
	{
		path: "/User/:id",
		component: UserView,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
