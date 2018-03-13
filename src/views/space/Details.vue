<template>
    <div class="details">
        <h1>{{ $route.params.title }}</h1>
        <div style="margin: 0.8rem 0">
            <span style="border-radius: 4px;border: 1px solid;padding: 2px 9px;">原创</span><span>{{ $route.params.updated_at }}</span>
        </div>
        <pre class="center-pre" style="white-space: pre-wrap;" v-html="$route.params.body"></pre>
        <img style="width: 100%" :src="$Config.apiUrl + '/' + i" alt="" v-for="i in $route.params.album.split(',')">
    </div>
</template>

<script>

    export default {
        methods: {},
        mounted: function () {

        },
        components: {

        },
    }
</script>
<style lang="less">
    .details{
        background: #fff;
        padding: 0.8rem;
        h1{
            font-size: 19px;
        }
        span{
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
            margin-right: 0.8rem;
            font-size: 12px;
            color: #454545;
        }
        .center-pre{
            overflow-x: hidden;
            img{
                width: 100%;
            }
        }
    }
</style>