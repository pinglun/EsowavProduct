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
                    {path:'system-panorama',name:'360&720全景'},
                    {path:'system-ar',name:'AR增强现实'},
                    {path:'system-vr',name:'VR虚拟互动'},
                    {path:'system-dev',name:'系统开发'},
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