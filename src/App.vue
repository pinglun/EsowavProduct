<template>
    <div id="app">
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view ></router-view>
        </keep-alive>
        <router-view v-else></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="less">
    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    #app {
        min-height: calc(~'100vh-76px');
        background-color: #f8f8f8;
    }

    a {
        color: #3c8dbc;
        text-decoration: none;
    }

</style>
