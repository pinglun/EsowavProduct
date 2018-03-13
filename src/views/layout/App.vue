<template>
    <div>
        <div class="main-content">
            <mt-spinner v-show="$store.state.routeLoading" color="#f08300" class="loading" type="fading-circle"></mt-spinner>
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view ></router-view>
            </keep-alive>
            <router-view v-else class="child-view"></router-view>
        </div>
        <Car></Car>
        <NavBar></NavBar>
    </div>
</template>

<script>
    import NavBar from './Nav.vue';
    import Car from './Car.vue';

    export default {
        data() {
            return {
            };
        },
        methods: {

        },
        mounted: function () {
                this.$router.push('/animation-propagate');
            },
        components: {
            NavBar,Car
        },
        }
</script>
<style lang="less">
    .main-content {
        margin-bottom: 76px;
        min-height: calc(~'100vh - 76px');
        .loading{
            z-index: 5000;
            position: fixed;
            top: 50%;
            margin-top: -14px;
            left: 50%;
            margin-left: -14px;
        }
    }


</style>