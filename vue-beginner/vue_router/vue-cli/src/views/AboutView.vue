<template>
    <button v-on:click="getData">get user</button>
    <div class="about">
        <h1>This is an about page</h1>
        {{ users }}
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            users: [],
        };
    },
    methods: {
        getData: function () {
            var vm = this;
            axios
                .get("https://jsonplaceholder.typicode.com/users/")
                .then(function (responce) {
                    console.log(responce.data);
                    console.log(this);
                    vm.users = responce.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>
