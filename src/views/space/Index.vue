<template>
    <div class="space">
        <ArticleCard
                v-for="i in article"
                :key="i.id"
                :data="i"
        ></ArticleCard>
    </div>
</template>

<script>
    import ArticleCard from '~/components/articleCard/Index.vue';
    export default {
        data() {
            return {
                article:[]
            }
        },
        methods: {},
        mounted: function () {
            let self = this;
            self.article = [];
            self.$Api.GoodsBySlug({name:'space'},r=>{
                self.article = r.content;

            });
        },
        components: {
            ArticleCard
        },
    }
</script>
<style lang="less">
    .space{
        padding: 0.8rem;
    }
</style>