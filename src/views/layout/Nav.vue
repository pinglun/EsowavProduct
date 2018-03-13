<template>
    <mt-tabbar class="nav" v-model="selected">
        <template v-for="(v,k) in nav">
            <mt-tab-item :id="k" @click.native ="$router.push(v.path)">
                <div class="nav-icon">
                    <img  :src="selected == k ?require('./icon/'+ v.iconActiveName+'.png') : require('./icon/'+ v.iconName+'.png')" alt="">
                </div>
                {{ v.name }}
            </mt-tab-item>
            <div v-if="k == 'design'" style="flex: 1" @click="switchCarVisible">
                <img class="car " :class="$store.state.carVisible ? 'car-active' : '' " src="./icon/car.png" alt="" >
            </div>
        </template>
    </mt-tabbar>
</template>

<script>
    import Nav from '~/menu/index';

    export default {
        data() {
            return {
                selected:'animation',
                nav: Nav,
            };
        },
        methods: {
            switchCarVisible(){
                this.$store.commit('switchCarVisible');
            }
        },
        mounted: function () {

        },
        components: {
        },
    }
</script>
<style lang="less" scoped>
    .nav {
        position: fixed;
        height: 72px;
        background: #fff;
        border-top: 1px solid #f3f2f3;
        z-index: 5010;
        a{
            color: #000;
        }
        .nav-icon{
            display: block;
            margin: 4px auto 6px;
            height: 32px;
            img{
                height: 100%;
            }
        }
        &.mint-tabbar > .mint-tab-item.is-selected {
            background-color: #fff;
            color: #000;
        }
        .car{
            position: relative;
            top: -12px;
            height: 70px
        }
        .car-active{
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04)
        }
    }
</style>