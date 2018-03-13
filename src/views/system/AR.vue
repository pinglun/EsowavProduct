<template>
  <div>
    <ARCard
            theme = 'blue'
            v-for="i in data"
            :key="i.id"
            :data="i">
      ></ARCard>
  </div>
</template>

<script>
    import ARCard from '~/components/goodCard/ARCard.vue';
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
            self.$Api.Goods({name:'system-ar'},r=>{
                for (let i =0;i<r.length;i++){
                    self.data.push(r[i])
                }
            });
        },
        components: {
            ARCard
        },
    }
</script>
<style lang="less">

</style>