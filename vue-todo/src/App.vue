<template>
    <Todo_Header></Todo_Header>
    <Todo_Input></Todo_Input>
    <Todo_List></Todo_List>
    <Todo_Footer></Todo_Footer>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
    name: "App",
    components: {
        Todo_Header: TodoHeader,
        Todo_Input: TodoInput,
        Todo_List: TodoList,
        Todo_Footer: TodoFooter,
    },
};
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
}

input {
    border-style: groove;
    width: auto;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
