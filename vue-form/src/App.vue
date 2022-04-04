<template>
    <form v-on:submit.prevent="submitFrom">
        <div>
            <label for="username">id : </label>
            <input id="username" type="text" v-model="username" />
        </div>
        <div>
            <label for="password">password : </label>
            <input id="password" type="password" v-model="password" />
        </div>
        <button type="submit">login</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        submitFrom: function () {
            // event.preventDefault();
            // console.log(this.username, this.password);
            var url = "https://jsonplaceholder.typicode.com/users";
            var data = {
                username: this.username,
                password: this.password,
            };
            axios
                .post(url, data)
                .then(function (responce) {
                    console.log(responce);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>

<style></style>
