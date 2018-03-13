<template>
    <div>
        <div class="goods-card" v-if="data.content.length">
            <span class="top-category" :style="theme == 'red' ? 'background: #c72f31;' : 'background: #43a4fc;'">{{ data.name }}</span>
            <ul class="card">
                <li v-for="(v,i) in data.content">
                    <img @click="playImg(v.album)" style="width:100%;" :src="$Config.apiUrl+'/'+v.image" alt="">
                    <p>{{ v.title  }}</p>
                </li>
            </ul>
            <!--<mt-swipe :show-indicators="false" style="height: 15rem;padding: 1rem 1rem 0;">-->
                <!--<mt-swipe-item v-for="(v,i) in Math.ceil(data.content.length/2)" :key="i">-->
                    <!--<div style="display: flex">-->
                        <!--<div class="good" v-if="data.content[(i+1)*2-2]">-->
                            <!--<img @click="playImg(data.content[(i+1)*2-2].album)" style="width:100%;" :src="$Config.apiUrl+'/'+data.content[(i+1)*2-2].image" alt="">-->
                            <!--<p>{{ data.content[(i+1)*2-2].title  }}</p>-->
                        <!--</div>-->
                        <!--<div style="width: 0.6rem" ></div>-->
                        <!--<div class="good">-->
                            <!--<template v-if="data.content[(i+1)*2-1]">-->
                                <!--<img @click="playImg(data.content[(i+1)*2-2].album)" style="width:100%;" :src="$Config.apiUrl+'/'+data.content[(i+1)*2-2].image" alt="">-->
                                <!--<p>{{ data.content[(i+1)*2-2].title  }}</p>-->
                            <!--</template>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</mt-swipe-item>-->
            <!--</mt-swipe>-->
            <img @click="modelVisible = true" class="car" :src=" theme == 'red' ? require('./icon/car_red.png') : require('./icon/car_blue.png')" alt="">
            <mt-popup
                    v-model="modelVisible"
                    :closeOnClickModal="false"
                    class="my-model"
                    popup-transition="popup-fade">
                <div>
                    <div class="top">
                        {{ data.name }}
                        <span @click="modelVisible = false">×</span>
                    </div>
                    <div class="content">
                        <!--<div>-->
                            <!--<label class="mint-radiolist-title">时长:<input class="input-s" type="text" v-model="request.time">秒(s)</label>-->
                        <!--</div>-->
                        <!--<mt-radio-->
                                <!--title="精度要求:"-->
                                <!--v-model="request.dpi"-->
                                <!--:options="['普通', '高清', '4K高清','特殊规格']">-->
                        <!--</mt-radio>-->
                        <!--<mt-radio-->
                                <!--title="素材情况:"-->
                                <!--v-model="request.material"-->
                                <!--:options="['有素材', '需补充素材', '制作全新素材']">-->
                        <!--</mt-radio>-->
                        <div>
                            <label class="mint-radiolist-title">其他要求:</label>
                            <textarea class="text" v-model="request.remarks">

                        </textarea>
                        </div>
                    </div>
                    <div class="bottom">
                        <span @click="addGoodToCar(false)">加入意向列表</span><span @click="addGoodToCar(true)" style="background: #ed7816;border-left: 1px solid #fff">提交意向</span>
                    </div>
                </div>
            </mt-popup>
            <mt-popup
                    v-model="imgVisible"
                    :closeOnClickModal="false"
                    class="my-model"
                    popup-transition="popup-fade">
                <div>
                    <div class="top">
                        {{ data.name }}
                        <span @click="imgVisible = false;">×</span>
                    </div>
                    <div class="content">
                        <mt-swipe :auto="4000" style="height: 13rem">
                            <mt-swipe-item v-for="i in imgs" :key="i">
                                <img style="width: 100%;" :src="$Config.apiUrl+'/'+i" alt="">
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                </div>
            </mt-popup>
        </div>
        <div v-else style="color: #9e9e9e;;text-align: center;font-size: 14px;margin: 2rem 0">{{ data.name }}分类暂无产品</div>
    </div>
</template>

<script>

    export default {
        name: 'goodsCard',

        props: {
            data: Object,
            theme:{
                type: String,
                default:'red',
            }
        },
        data() {
            return {
                imgs:[],
                imgVisible:false,
                request:{
                    // time:60,
                    // dpi:'4K高清',
                    // material:'有素材',
                    remarks:''
                },
                modelVisible:false
            };
        },
        methods: {
            playImg(imgs){
                if(!imgs){
                    this.$toast('暂无相册');
                    return;
                }

                this.imgs = [];
                this.imgs = imgs.split(',')
                this.imgVisible = true;
            },
            addGoodToCar(isSubmit ){
                let self = this;
                let good = self.data;
                let hasGood = self.$Func.arrayObjHasVal(self.$store.state.car,'categoryId',self.data.id);
                if(hasGood != -1 ){//购物车已存在商品
                    self.$store.commit('setGoodRequest',{
                        i:hasGood,
                        r:self.request,
                    });
                }else {
                    self.$store.commit('pushGoodToCar',{
                        categoryId:good.id,
                        title:good.name,
                        request:self.request,
                        num:1
                    });


                }
                self.modelVisible = false;

                if(isSubmit){
                    this.$router.push('/contact');
                    return;
                }
                self.$toast('商品已经添加到意向表');
            }
        },
        components: {

        },
        mounted: function () {

        },

    }
</script>
<style lang="less" scoped>
    .card{
        overflow-x: auto;
        padding: 4px;
        display: flex;
        li{
            list-style: none;
            text-align: center;
            font-size: 12px;
            flex: 1;
            float: left;
            padding: 0.6rem 0.8rem;
            p{
                padding: 0.4rem;
            }
        }
    }
    .goods-card{
        position: relative;
        margin-top: 20px;
        border-bottom: 1px solid #f3f4f4;
        border-top: 1px solid #f3f4f4;
        background: #fff;
        min-height: 60px;

        .top-category{
            position: relative;
            z-index: 5;
            color: #fff;
            top: 6px;
            left: 1rem;
            padding: 0.4rem 0.6rem 0.2rem;
            //background: #f08300;
        }
        .good {
            flex: 1;
            text-align: center;
            position: relative;
            height: 14rem;
            p{
                position: absolute;
                text-align: center;
                display: block;
                height: 26px;
                line-height: 26px;
                bottom: 0px;
                background: #fff;
                width: 100%;
                font-size: 12px;
            }
        }
        .car{
            width: 2.6rem;
            position: absolute;
            right: 0;
            bottom: 1rem;
        }
    }
</style>