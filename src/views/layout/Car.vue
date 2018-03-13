<template>
    <mt-popup
        class="car-box"
        v-model="$store.state.carVisible"
        position="bottom">
        <div class="car-top">
            <div class="car-clear" @click=" clearCar ">
                <img src="./icon/clear.png" alt="">
                <span>清空意向表</span>
            </div>
        </div>
        <div class="car-list">
            <ul v-if="$store.state.car.length" style="overflow: auto;max-height: 60vh">
                <li v-for="(k,i) in $store.state.car" :key="k.id">
                    <div class="name">
                        <p class="title">{{ k.title }}</p>
                        <p class="des">{{ $Func.objJoin(k.request,',') }}</p>
                    </div>
                    <div class="num">
                        <button :disabled="k.num <= 0" :class="'num-action'+ (k.num <= 0?'':' active')"  @click=" $store.commit('setGoodNum',{i:i,v:k.num-1}); ">-</button>
                        <span class="val">{{ k.num }}</span>
                        <button class="num-action active" @click=" $store.commit('setGoodNum',{i:i,v:k.num+1}); " >+</button>
                    </div>
                </li>
            </ul>
            <div v-else style="padding: 12px;text-align: center;color: #929292;font-size: 14px;">意向表还是空的!</div>
        </div>
        <div class="car-bottom">
            <span @click="submitGood">提交意向表</span>
        </div>
    </mt-popup>
</template>

<script>

    export default {
        data() {
            return {
                popupVisible:true,

            };
        },
        methods: {
            clearCar(){
                let self = this;
                if( self.$store.state.car.length){
                    self.$messagebox.confirm('确定要清空意向表?').then(action => {
                        self.$store.commit('clearCar');
                    });
                }else {
                    self.$toast('意向表还没有商品！');
                }
            },
            submitGood(){
                let self = this;
                if( ! self.$store.state.car.length){
                    self.$toast('意向表还没有商品！');
                    return;
                }

                self.$store.commit('switchCarVisible');
                self.$router.push('/contact');

            }
        },
        mounted: function () {

        },
        components: {

        },
    }
</script>
<style lang="less" scoped>
    .car-box{
        background: #efeff0;
        width: 100%;
        bottom: 72px;
        .car-top{
            display: flex;
            height: 42px;

            justify-content: flex-end;
            align-items: center;
            .car-clear{
                display: flex;
                align-items: center;
                span{
                    font-size: 12px;
                    margin:0  0.4rem;
                }
                img{
                    height: 24px;
                }
            }
        }
        .car-list{
            background: #fff;
            li{
                display: flex;
                padding: 12px 18px;
                align-items: center;
                border-bottom:1px solid #f9f9f9;
                .name{
                    flex: 1;
                    .title{
                        font-size: 20px;
                    }
                    .des{
                        font-size: 12px;
                    }
                }
                .num{
                    display: flex;
                    align-items: center;
                    justify-content:space-between;
                    width: 20%;
                    .num-action{
                        width: 24px;
                        height: 24px;
                        text-align: center;
                        line-height: 22px;
                        border-radius: 50%;
                        border: 1px solid #000;
                        font-weight:bolder;

                        &.active{
                            background: #ecb736;
                            border:none;
                        }
                    }
                    .val{
                        font-weight:bolder;
                    }
                }
            }
        }
        .car-bottom{
            height: 56px;
            display: flex;
            justify-content: flex-end;
            span{
                line-height: 56px;
                text-align: center;
                font-weight: bolder;
                font-size: 18px;
                width: 30%;
                height: 100%;
                background: #f6c344;
            }
        }
    }

</style>