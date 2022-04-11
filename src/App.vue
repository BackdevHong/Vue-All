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
                <p>이민준 : 안녕하세요! 해당 프로젝트에서 메뉴와 Credit창에 디자인을 맡았습니다.</p>
            </div>
        </div>
    </div>
    <!-- 수정 -->
    <div class="modal" v-if="EditMode == true">
        <div class="box">
            <div class="header">
                <h1>수정</h1>
            </div>
            <div>
                <p>
                    수정할 사항을 아래 적어주세요!<br />
                    수정 사항을 수정하셨다면 적용 버튼을눌러주세요!
                </p>
                &nbsp;
                <p class="width">
                    <input type="text" maxlength="30" class="editValue" @input="EditItem = $event.target.value" />
                </p>
                <span class="Grant" @click="EditExit"> 적용 </span>
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
                <p class="dis">추가하고 싶은 Todo를 입력해주세요! 엔터키를 누르면 추가됩니다!</p>
                <div class="sub">
                    <input type="text" class="addItem" v-model="newTodoItem" v-on:keyup.enter="addTodo" v-on:input="length(newTodoItem)" maxlength="30" />
                    <div class="length">
                        <span :class="color"> {{ newTodoItem.length }}</span>
                        <span class="font"> / 30</span>
                    </div>
                </div>
                <transition-group name="items" tag="div" class="items">
                    <ul v-for="(todoItems, index) in $store.state.todoItems" v-bind:key="todoItems">
                        <li>
                            <span
                                v-bind:class="{
                                    textComplete: todoItems.complete,
                                }"
                            >
                                &nbsp;{{ todoItems.item }}</span
                            >
                            <i class="fa-solid fa-pen editItem" @click="EditModeOn(index)"></i>
                            <i
                                class="fa-solid fa-check checkbox"
                                v-bind:class="{
                                    checkCom: todoItems.complete,
                                }"
                                @click="checkItem(todoItems)"
                            ></i>
                            <i class="fa-solid fa-trash removeItem" @click="removeTodo(todoItems, index)"></i>
                        </li>
                    </ul>
                </transition-group>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            CreditOn: false,
            EditMode: false,
            newTodoItem: '',
            todoItems: [],
            items: [],
            color: 'blue',
            checked: [],
            editIndex: '',
            EditItem: '',
        };
    },
    methods: {
        Credit() {
            this.CreditOn = true;
        },
        Active() {
            this.CreditOn = false;
        },
        EditModeOn(index) {
            console.log(index);
            this.EditMode = true;
            this.editIndex = index;
        },
        EditExit() {
            this.EditMode = false;
            localStorage.removeItem(this.todoItems);
            this.items.splice(this.editIndex, 1);
            const obj = {
                complete: false,
                item: this.EditItem,
            };
            localStorage.setItem(obj.item, JSON.stringify(obj));
            this.items.push(obj);
        },
        length(a) {
            if (a.length <= 29) {
                this.color = 'blue';
            } else {
                this.color = 'red';
            }
        },
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$store.commit('addItem', this.newTodoItem);
                this.newTodoItem = '';
            }
        },
        checkItem(i) {
            i.complete = !i.complete;
            localStorage.removeItem(i.item);
            localStorage.setItem(i.item, JSON.stringify(i));
        },
        removeTodo(todoItems, index) {
            this.$store.commit('removeItem', { todoItems, index });
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dongle&display=swap');

* {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    scroll-behavior: smooth;
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

.main {
    padding: 13px 20%;
}

.modal {
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 3;
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

.dis {
    user-select: none;
    font-size: 15px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    color: rgba(0, 0, 0, 60%);
}

.sub {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 30%);
    user-select: none;
}

.addItem:focus {
    outline-style: none;
}

.addItem {
    width: 90%;
    height: 30px;
    margin-left: 10px;
    user-select: none;
}

.modal .box .header i {
    cursor: pointer;
    user-select: none;
}
.items ul li {
    border: 1px solid rgba(0, 0, 0, 30%);
    font-size: 20px;
    margin-top: 3px;
    padding: 10px;
    transition: ease-in;
}

.items ul hr {
    width: 100%;
}

.items-enter-active,
.items-leave-active {
    transition: all 1s;
}

.items-enter-from,
.items-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.length {
    user-select: none;
    font-family: 'Dongle', sans-serif;
    text-align: left;
}

.font {
    font-size: 15px;
}

.red {
    color: red;
    margin-left: 10px;
}

.blue {
    color: blue;
    margin-left: 10px;
}

.checkbox {
    float: left;
    margin-top: 5px;
    user-select: none;
}

.checkCom {
    color: lightgray;
}

.textComplete {
    width: 15%;
    text-decoration: line-through;
    color: lightgray;
}

.removeItem {
    float: right;
    margin-right: 10px;
    line-height: 30px;
    user-select: none;
}

.editItem {
    float: right;
    line-height: 30px;
    margin-left: 5px;
    user-select: none;
}

.editValue {
    border: 1px solid rgba(0, 0, 0, 30%);
    width: 90%;
}

.Grant {
    display: block;
    right: 420px;
    top: 280px;
    width: 50px;
    text-align: center;
    color: white;
    border: 1px solid rgb(98, 0, 238);
    background-color: rgb(98, 0, 238);
    border-radius: 3px;
    float: right;
    margin-bottom: 20px;
}

.width {
    width: 90%;
}

/* 리스트 아이템 트렌지션 효과 */
</style>
