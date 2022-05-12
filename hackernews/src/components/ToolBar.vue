<template>
    <div class="Header">
        <ul>
            <li>
                <router-link to="/News">News</router-link>
            </li>
            <li>
                <router-link to="/Ask">Ask</router-link>
            </li>
            <li>
                <router-link to="/Jobs">Jobs</router-link>
            </li>
            <li>
                <router-link to="/User">User</router-link>
            </li>
            <li>
                <router-link to="/Item">Item</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
    list-style: none;
}
.Header {
    display: flex;
    width: 100%;
    height: 30px;
    line-height: 30px;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
}

.Header > ul {
    padding-left: 0;
}
.Header > ul > li {
    float: left;
    margin-left: 20px;
}

.Header .router-link-exact-active {
    color: cadetblue;
    text-decoration: none;
}

.Header a {
    text-decoration: none;
    color: black;
}
</style>
