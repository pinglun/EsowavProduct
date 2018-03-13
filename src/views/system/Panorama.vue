<template>
  <div>
    <ImgCard
            theme = 'blue'
            v-for="i in data"
            :key="i.id"
            :data="i">
      ></ImgCard>
  </div>
</template>

<script>
    import ImgCard from '~/components/goodCard/ImgCard.vue';
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
            self.$Api.Goods({name:'system-panorama'},r=>{
                for (let i =0;i<r.length;i++){
                    self.data.push(r[i])
                }

            });
        },
        components: {
            ImgCard
        },
    }
</script>
<style lang="less">

</style>