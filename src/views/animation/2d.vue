<template>
    <div>
        <VideoCard
                v-for="i in data"
                :key="i.id"
                :data="i">
            ></VideoCard>
    </div>
</template>

<script>
    import VideoCard from '~/components/goodCard/VideoCard.vue';
    export default {
        data() {
            return {
                data:[]
            };
        },
        methods: {},
        mounted: function () {
            let self = this;
            self.data = [];
            self.$Api.Goods({name:'animation-2d'},r=>{
                for (let i =0;i<r.length;i++){
                    self.data.push(r[i])
                }

            });
        },
        components: {
            VideoCard
        },
    }
</script>
<style lang="less">

</style>