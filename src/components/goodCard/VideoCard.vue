<template>
    <div>
        <div class="goods-card" v-if="data.content.length">
            <span class="top-category" :style="theme == 'yellow' ? '' : 'background: #43a4fc;'">{{ data.name }}</span>

            <ul class="card">
                <li v-for="(v,i) in data.content">
                    <img @click="playVideo(v.video_url,v.image)" style="width:100%;" :src="$Config.apiUrl+'/'+v.image" alt="">
                    <p>{{ v.title  }}</p>
                </li>
            </ul>


            <!--<mt-swipe :show-indicators="false" style="height: 10rem;padding: 1rem 1rem 0;">-->

                <!--<mt-swipe-item v-for="(v,i) in Math.ceil(data.content.length/2)" :key="i">-->
                    <!--<div style="display: flex">-->
                        <!--<div class="good" v-if="data.content[(i+1)*2-2]">-->
                            <!--<img @click="playVideo(data.content[(i+1)*2-2].video_url)" style="width:100%;" :src="$Config.apiUrl+'/'+data.content[(i+1)*2-2].image" alt="">-->
                            <!--<p>{{ data.content[(i+1)*2-2].title  }}</p>-->
                        <!--</div>-->
                        <!--<div style="width: 0.6rem" ></div>-->
                        <!--<div class="good">-->
                            <!--<template v-if="data.content[(i+1)*2-1]">-->
                                <!--<img @click="playVideo(data.content[(i+1)*2-2].video_url)" style="width:100%;" :src="$Config.apiUrl+'/'+data.content[(i+1)*2-2].image" alt="">-->
                                <!--<p>{{ data.content[(i+1)*2-2].title  }}</p>-->
                            <!--</template>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</mt-swipe-item>-->
            <!--</mt-swipe>-->
            <img @click="modelVisible = true" class="car" :src="theme == 'yellow' ? require('./icon/car_yellow.png') : require('./icon/car_blue.png')" alt="">
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
                        <div>
                            <label class="mint-radiolist-title">时长:<input class="input-s" type="text" v-model="request.time">秒(s)</label>
                        </div>
                        <mt-radio
                                title="精度要求:"
                                v-model="request.dpi"
                                :options="['普通', '高清', '4K高清','特殊规格']">
                        </mt-radio>
                        <mt-radio
                                title="素材情况:"
                                v-model="request.material"
                                :options="['有素材', '需补充素材', '制作全新素材']">
                        </mt-radio>
                        <div>
                            <label class="mint-radiolist-title">其他备注:</label>
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
                    v-model="videoVisible"
                    :closeOnClickModal="false"
                    class="my-model"
                    popup-transition="popup-fade">
                <div>
                    <div class="top">
                        {{ data.name }}
                        <span @click="closeVideo()">×</span>
                    </div>
                    <div class="content">
                        <video controls="controls" :src="videoSrc" :poster="poster" style="width: 100%"></video>
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
            theme:{
                type: String,
                default:'yellow',
            },
            data: Object,
        },
        data() {
            return {
                request:{
                    time:60,
                    dpi:'4K高清',
                    material:'有素材',
                    remarks:''
                },
                videoVisible:false,
                videoSrc: '',
                poster:'',
                modelVisible:false
            };
        },
        methods: {
            closeVideo(){
                this.videoVisible = false;
                setTimeout(()=>{this.videoSrc = '';},300)
            },
            playVideo(url,poster){
                if(!url){
                    this.$toast('暂无视频');
                    return;
                }

                this.poster = this.$Config.apiUrl+'/'+poster;

                this.videoSrc = this.$Config.apiUrl+'/'+url;
                setTimeout(()=>{this.videoVisible = true;},300)

            },
            addGoodToCar(isSubmit){
                let self = this;
                let good = self.data;
                let hasGood = self.$Func.arrayObjHasVal(self.$store.state.car,'categoryId',self.data.id);
                if(hasGood != -1 ){//购物车已存在商品
                    self.$store.commit('setGoodRequest',{
                        i:hasGood,
                        r:self.request,
                    });
                    // self.$store.state.car[hasGood].requestStr = self.$Func.objJoin(self.request,',');
                    // self.$store.state.car[hasGood].request = self.request;

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
        .top-category{
            position: relative;
            z-index: 5;
            color: #fff;
            top: 6px;
            left: 1rem;
            padding: 0.4rem 0.6rem 0.2rem;
            background: #f08300;

        }
        .good {
            flex: 1;
            text-align: center;
            position: relative;
            height: 9rem;
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