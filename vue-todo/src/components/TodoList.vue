<template>
    <ul>
        <li
            v-for="(todoItem, index) in todoItems"
            v-bind:key="todoItem.item"
            class="shadow"
        >
            <i
                class="checkbtn fa-solid fa-check"
                v-bind:class="{ checkbtnCompleted: todoItem.completed }"
                @click="completeCheck(todoItem)"
            ></i>
            <span v-bind:class="{ textCompleted: todoItem.completed }">{{
                todoItem.item
            }}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fa-solid fa-trash-can"></i>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            todoItems: [],
        };
    },
    created: function () {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    this.todoItems.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }

                // console.log(localStorage.key(i));
            }
        }
    },
    methods: {
        removeTodo: function (todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        completeCheck: function (todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
    },
};
</script>
<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #b3b3b3;
}

.checkbtn {
    line-height: 50px;
    color: black;
    margin-right: 5px;
}

.checkbtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: gray;
}
</style>
