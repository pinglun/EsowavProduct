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
        <div v-else style="color: #9e9e9e;;text-align: center;font-size: 14px;margin: 4rem 0">{{ data.name }}分类暂无产品</div>
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