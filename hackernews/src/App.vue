<template>
    <div id="app">
        <spinner :loading="loadingStatus"></spinner>
        <tool-bar></tool-bar>
        <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Spinner from './components/Spinner.vue';

export default {
    components: {
        ToolBar,
        Spinner,
    },
    data() {
        return {
            loadingStatus: this.$store.state.spin,
        };
    },
    created() {
        this.$store.dispatch('FETCH_SPIN', true);
        console.log('test complete');
    },
};
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
}

.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
