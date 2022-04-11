import { createStore } from "vuex";

const storage = {
    fetch() {
        var arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    },
};

export default createStore({
    state: {
        todoItems: storage.fetch(),
    },
    mutations: {
        addItem(state, todoItem) {
            const obj = {
                complete: false,
                item: todoItem,
            };
            localStorage.setItem(obj.item, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeItem(state, Paylod) {
            localStorage.removeItem(Paylod.todoItems.item)
            state.todoItems.splice(Paylod.index, 1)
        },
    },
});
