<template>
    <div class="contact">
        <div class="top">
            <div class="btn l" @click="$router.push('/animation');">
                返回
            </div>
            <div class="btn r" @click="submitInfo">
                确认
            </div>
            联系信息
        </div>
        <div style="background: #f8f8f8;font-size: 16px;color: #444140;padding: 0 0.8rem;height: 4rem;line-height: 4.2rem">联系人</div>
        <ul class="contact-ul">
            <li>
                <span>姓名：</span><input type="text" v-model="contactInfo.name">
            </li>
            <li class="sex">
                <span>性别：</span>
                <mt-radio
                        title=""
                        v-model="contactInfo.sex"
                        :options="['先生','女士']">
                </mt-radio>
            </li>
            <li>
                <span>单位名称：</span><input type="text" v-model="contactInfo.company">
            </li>
            <li>
                <span>联系电话：</span><input type="text" v-model="contactInfo.phone">
            </li>
            <li>
                <span>联系地址：</span><input type="text" v-model="contactInfo.address">
            </li>
            <li>
                <span>期望交付日期：</span><div class ="delivery-date">{{ contactInfo.delivery_date }}</div>
            </li>
            <Calendar
                    v-on:choseDay="clickDay"
                    v-on:changeMonth="changeDate"
                    :agoDayHide='(new Date()).valueOf()'
            >
            </Calendar>
        </ul>
    </div>
</template>

<script>
    import Calendar from '~/components/calendar/Index.vue';
    export default {
        data(){
          return{
              contactInfo:{
                  name:'',
                  sex:'',
                  company:'',
                  phone:'',
                  address:'',
                  delivery_date:'',
              },
          }
        },
        methods: {
            clickDay(data) {
                this.contactInfo.delivery_date = data;
                console.log(data); //选中某天
            },
            changeDate(data) {
                console.log(data); //左右点击切换月份
            },
            submitInfo(){
                if(!this.$Func.isPoneAvailable(this.contactInfo.phone)){
                    this.$toast('手机号必须是11位数字');
                    return;
                }
                this.$store.commit('setContactInfo',this.contactInfo);

                this.$Func.setUserInfo(this.contactInfo);

                this.$router.push('/goods_list');

            }
        },
        mounted: function () {
            let user = this.$Func.getUserInfo();
            if(user){
                this.contactInfo = user;
                this.$store.commit('setContactInfo',user);
            }
        },
        components: {
            Calendar
        },
    }
</script>
<style lang="less" scoped>

    .contact{
        .top{
            padding: 0 0.8rem;
            height: 3.4rem;
            line-height: 3.4rem;
            box-shadow: 0 0 2px rgba(0,0,0,.5);
            background: #fff;
            font-size: 18px;
            color: #898989;
            text-align: center;
            .l{
                float: left;
                color: #000;
            }
            .r{
                float: right;
                color: #f4c142;
            }
            .btn{

                font-weight: bolder;
                font-size: 18px;

            }
        }
        .contact-ul{
            li{
                height: 3.4rem;
                line-height: 3.4rem;
                background: #fff;
                padding: 0 0.8rem;
                overflow: hidden;
                display: flex;
                border-bottom: 1px solid #dcdcdd;
                span{
                    text-align: right;
                    min-width: 8rem;
                }
                input{
                    flex: 1;
                    padding: 0 13px;
                    border: none;
                    text-align: left;
                }
                .delivery-date{
                    flex: 1;
                    padding: 0 13px;
                    border: none;
                    text-align: left;
                }
                .mint-radiolist-title{
                    margin: 3px;
                }
                .mint-radiolist{
                    display: table;
                    margin-left: 0.4rem;
                }

            }
        }
    }
</style>