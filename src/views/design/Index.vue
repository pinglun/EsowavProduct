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
                    {path:'design-ppt',name:'PPT设计制作'},
                    {path:'design-book',name:'书籍画册'},
                    {path:'design-interaction',name:'交互设计'},
                    {path:'design-vi',name:'VI设计'},
                    {path:'design-plan',name:'活动策划'}
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