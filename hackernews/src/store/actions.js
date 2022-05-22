import {
    fetchUserInfo,
    fetchAskInfo,
    fetchList,
} from "../api/index";

export default {
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit("SET_USER", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_ASKS({ commit }, id) {
        fetchAskInfo(id)
            .then(({ data }) => {
                commit("SET_ASKS", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit("SET_LIST", data))
            .catch((error) => console.log(error));
    },

    FETCH_SPIN({ commit }, status) {
        commit("SET_SPIN", status);
    },
};
