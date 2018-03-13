<template>
    <div>
        <TabBar
            :data="tabBarData"
        ></TabBar>
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view ></router-view>
        </keep-alive>
        <router-view v-else></router-view>
    </div>
</template>

<script>
    import TabBar from '~/components/tabBar/TabBar.vue';
    export default {
        data() {
            return {
                tabBarData : [
                    {path:'animation-propagate',name:'宣传片'},
                    {path:'animation-2d',name:'二维动画'},
                    {path:'animation-3d',name:'三维动画'}
                    ]
            };
        },
        methods: {},
        mounted: function () {

        },
        components: {
            TabBar
        },
    }
</script>
<style lang="less">

</style>