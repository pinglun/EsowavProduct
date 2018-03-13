<template>
    <div class="goods-list">
        <div class="top">
            <div class="btn l" @click="$router.push('/contact')">
                返回
            </div>

            联系信息
        </div>
        <img style="width: 100%" src="./img/step.jpg" alt="">
        <div class="line">联系人</div>
        <div class="esowav">
            <span class="c">{{ $store.state.contactInfo.address }}</span>
            <span class="info">{{ $store.state.contactInfo.name }}({{ $store.state.contactInfo.sex }})&nbsp;&nbsp;&nbsp;{{ $store.state.contactInfo.phone }}</span>
            <span class="info">{{ $store.state.contactInfo.company }}</span>
        </div>
        <div class="line">订单信息</div>
        <div class="car-list">
            <ul style="overflow: auto;max-height: 60vh">
                <li v-for="(k,i) in $store.state.car" :key="k.id">
                    <div class="name">
                        <p class="title">{{ k.title }}</p>
                        <p class="des">{{ $Func.objJoin(k.request,',') }}</p>
                    </div>
                    <div class="num">
                        <span class="val">{{ k.num }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="car-bottom">
            <span @click="submitOrder">提交意向表</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {
            submitOrder(){
                let self = this;

                let car = self.$store.state.car;
                if(!car.length){
                    self.$toast('请先添加产品！');
                    return;
                }

                self.$Api.saveOrder({car:car,contact:self.$store.state.contactInfo},r=>{
                    self.$toast('已经提交'+r+'款产品！');
                    self.$store.commit('clearCar');
                    self.$router.push('/result');
                });
            }

        },
        mounted: function () {

        }
    }
</script>
<style lang="less" scoped>
    .goods-list{
        .line{
            background: #efeff0;height: 2.6rem;font-size: 18px;color: #605e5d;text-align: center;line-height: 2.6rem
        }
        .esowav{
            background: #fff;
            text-align: center;
            padding: 2rem 0;
            font-size: 16px;
            color: #403c3b;
            .c{
                font-weight: bold;
            }
            span{
                margin-top: .4rem;
                display: block;
            }
        }
        .top{
            padding: 0 0.8rem;
            height: 3.4rem;
            line-height: 3.4rem;
            background: #f6c342;
            font-size: 18px;
            color: #605e5d;
            text-align: center;
            .l{
                float: left;
                color: #000;
            }

            .btn{

                font-weight: bolder;
                font-size: 18px;

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
            border-bottom: 1px solid #fff;
            span{
                line-height: 56px;
                text-align: center;
                font-weight: bolder;
                font-size: 20px;
                width: 30%;
                height: 100%;
                background: #f6c344;
            }
        }
    }
</style>