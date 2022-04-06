<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo: function () {
            localStorage.clear();
        },
    },
};
</script>

<style scoped>
.clearAllContainer {
    width: 8.5em;
    height: 50px;
    line-height: 50px;
    background: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn {
    color: red;
    display: block;
}
</style>
