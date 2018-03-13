<template>
    <div class="article-card" @click="openDetails">
        <img :src="$Config.apiUrl +'/'+ data.image" alt="">
        <p>{{ data.title }}</p>
    </div>
</template>

<script>

    export default {
        name: 'ArticleCard',
        props: {
            data:Object,
        },
        data() {
            return {
            };
        },
        methods: {
            openDetails(){

                this.$router.push({name:'details',params:this.data})

            }
        },
        mounted: function () {

        },

    }
</script>
<style lang="less" scoped>
    .article-card{
        background-color: #fff;
        width: 100%;
        border-radius: 4px;
        padding: 0.4rem;
        margin-bottom: 0.4rem;
        img{
            width: 100%;
        }
        p{
            font-size: 14px;
        }
    }
</style>