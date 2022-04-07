import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../views/MainPage.vue";
import ItemInfo from "../views/TodoItem.vue";

const routes = [
    {
        path: "/",
        name: "Main Page",
        component: MainPage,
    },
    {
        path: "/item/:id",
        name: "item",
        component: ItemInfo,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
