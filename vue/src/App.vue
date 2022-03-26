<template>
    <div>
        <div class="black-bg" v-if="model == 1" @click="model = 0">
            <div class="white-bg">
                <h4>역삼동원룸</h4>
                <p>작성자 : 홍인성</p>
            </div>
        </div>
        <div class="menu">
            <a v-for="(atag, i) in 메뉴들" :key="i">{{ atag }}</a>
        </div>
        <div v-for="(a, i) in products" :key="i">
            <img class="room-img" :src="image[i]" />
            <h4 @click="model = 1">{{ a }}</h4>
            <p>60만원</p>
            <button @click="report[i] += 1">허위 매물 신고</button> <span>신고수 : {{ report[i] }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            model: 0,
            메뉴들: ['Home', 'Shop', 'About'],
            products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
            price: ['60', '100', '150'],
            report: [0, 0, 0],
            image: ['./img/room0.jpg', './img/room1.jpg', './img/room2.jpg'],
        };
    },
    methods: {},
};
</script>

<style>
#app {
    font-family: Aver, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 50px;
}

.menu a {
    color: white;
    padding: 10px;
}

.room-img {
    width: 100%;
}

body {
    margin: 0;
}

div {
    box-sizing: border-box;
}

.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}

.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}
</style>
