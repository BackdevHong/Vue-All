<template>
    <header>
        <p>TODO LIST</p>
        <div>
            <i class="fa-solid fa-bars" @click="MenuOn"></i>
        </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    methods: {
        MenuOn: () => {
            console.log("asdfasdf");
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
* {
    margin: 0;
    font-family: "Ubuntu", sans-serif;
}

header {
    background: linear-gradient(to right, #007fff, #0059b2);
    display: flex;
    padding: 13px 20%;
    justify-content: space-between;
    color: #fff;
}

header p {
    font-size: 30px;
}

header div {
    font-size: 30px;
}
</style>
