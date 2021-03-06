import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
    state: {
        user: {},
        asks: {},
        list: [],
        spin: true,
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
    },
    mutations: mutations,
    actions: actions,
});
