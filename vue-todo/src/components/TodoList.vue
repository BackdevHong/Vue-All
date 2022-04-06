<template>
    <ul>
        <li v-for="todoItem in todoItems" v-bind:key="todoItem" class="shadow">
            {{ todoItem }}
            <span class="removeBtn" v-on:click="removeTodo">
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
                    this.todoItems.push(localStorage.key(i));
                }

                // console.log(localStorage.key(i));
            }
        }
    },
    // methods: {
    // 	removeTodo: Function(){

    // 	}
    // },
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
</style>
