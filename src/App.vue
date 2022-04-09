<template>
    <!-- 모달 -->
    <div class="modal" v-if="CreditOn == true">
        <div class="box">
            <div class="header">
                <h1>Credit</h1>
                <i class="fa-solid fa-xmark" @click="Active"></i>
            </div>
            <div>
                <p>홍인성 : 안녕하세요! 해당 프로젝트에 총괄역을 맡고있습니다. 전반적인 시스템과 TodoList부분에 디자인 부분을 맡았습니다. 앞으로 더 많은 프로젝트에 만나뵙겠습니다.</p>
                <p>이민준 : 안녕하세요! 해당 프로젝트에서 메뉴와 Credit창에 디자인을 맡았습니다. ( 사실 실질적인 개발자는 접니ㄷ ) 앞으로도 잘 부탁드리겠습니다.</p>
            </div>
        </div>
    </div>

    <header>
        <p>TODO LIST</p>
        <ul class="menu">
            <li @click="Credit">Credit</li>
        </ul>
    </header>
    <main>
        <div>
            <div class="main">
                <div class="sub">
                    <input type="text" class="addItem" placeholder="추가하고 싶은 Todo를 입력하세요. 엔터키를 누르면 추가됩니다." v-model="newTodoItem" v-on:keyup.enter="addItem" />
                    <hr />
                    <div class="items">
                        <ul v-for="items in todoItems" v-bind:key="items">
                            <li>{{ items }}</li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            CreditOn: false,
            newTodoItem: '',
            todoItems: [],
            items: [],
        };
    },
    methods: {
        Credit() {
            this.CreditOn = true;
        },
        Active() {
            this.CreditOn = false;
        },
        addItem() {
            if (this.newTodoItem != '') {
                var obj = {
                    complete: false,
                    item: this.newTodoItem,
                };
                localStorage.setItem(obj.item, JSON.stringify(obj));
                this.items.push(obj);
                this.newTodoItem = '';
            }
        },
    },
    created: function () {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                this.items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap');

* {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
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
    font-weight: 600;
    user-select: none;
}

header div {
    font-size: 30px;
}

ul.menu {
    display: flex;
    align-items: center;
}

ul.menu li {
    display: inline-block;
    list-style: none;
    font-size: 20px;
    line-height: 1;
    transition: 0.4s;
    cursor: pointer;
    user-select: none;
}

ul.menu li:nth-last-child(1) {
    padding-left: 20px;
}

ul.menu li:hover {
    color: #00ffd5cf;
}

main {
    padding: 13px 20%;
}

.modal {
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
}

.modal .box {
    margin: 120px 20%;
    padding: 40px;
    border-radius: 9px;
    background: rgba(255, 255, 255);
}

.modal .box .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    font-size: 32px;
}

.modal .box .header i {
    cursor: pointer;
    user-select: none;
}

.main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #964b00;
}

.sub {
    background-color: #fff4a2;
    width: 95%;
    height: 95vh;
    margin-top: 20px;
}

.sub hr {
    width: 95%;
    background-color: black;
    height: 3px;
}

.addItem {
    font-family: 'Song Myung';
    width: 95%;
    height: 40px;
    background: none;
    color: black;
    font-size: 20px;
    font-weight: 600;
}
</style>
