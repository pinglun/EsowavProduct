<template>
    <div class="result">
        <div class="top">
            提交结果
        </div>
        <div class="success">
            提交成功
        </div>
        <div style="padding: .8rem">
            <mt-button @click="$router.push('/animation-propagate')" type="default" style="width: 100%;">继续逛逛</mt-button>
        </div>
        <img style="width: 100%" src="./img/logo.png" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {


        },
        mounted: function () {

        }
    }
</script>
<style lang="less" scoped>
    .result{
        .top{
            padding: 0 0.8rem;
            height: 3.4rem;
            line-height: 3.4rem;
            background: #fff;
            font-size: 18px;
            color: #898989;
            text-align: center;
        }
        .success{
            margin-top: 2rem;
            font-weight: bold;
            font-size: 26px;
            line-height: 18rem;
            text-align: center;
            background: #f1bd3a;
            color: #fff;
            height: 18rem;
        }
    }
</style>