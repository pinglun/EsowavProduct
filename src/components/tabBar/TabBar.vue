<template>
    <div class="tab-bar">
        <span class="box"  v-for="(v,i) in data">
            <img class="img-tab-bar" @click="$router.push('/'+ v.path)" :src="$route.path == ('/'+ v.path) ? require('./icon/'+v.path+'-active.png') : require('./icon/'+v.path+'.png')" alt="">
            {{ v.name }}
        </span>
    </div>
</template>

<script>

    export default {
        name: 'TabBar',
        props: {
            data: Array,
        },
        data() {
            return {
            };
        },
        methods: {},
        mounted: function () {

        },

    }
</script>
<style lang="less" scoped>
    .tab-bar{
        display: flex;
        width: 100%;
        background: #fff;
        height: 116px;
        align-items: center;
        span{
            display: inline-block;
            flex: 1;
            text-align: center;
            font-size: 12px;
            img{
                margin: 4px auto;
                width: 3.2rem;
                height: 3.2rem;
                display: block;
                -webkit-transition: opacity 1s ease-in-out;
                -moz-transition: opacity 1s ease-in-out;
                -o-transition: opacity 1s ease-in-out;
                transition: opacity 1s ease-in-out;
            }
        }
    }
</style>