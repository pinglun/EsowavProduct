import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      carVisible:false,
      routeLoading:false,
      contactInfo:{
          name:'',
          sex:'',
          company:'',
          phone:'',
          address:'',
          delivery_date:'' //这个值是储存在订单表
      },
      car:[]//{categoryId:1, title:'招商宣传片拍摄', request:{time:180,dpi:'4K',material:'有部分素材'}, num:5}
  },
  mutations: {
      switchCarVisible (state) {
          if(state.carVisible)
              state.carVisible = false;
          else
              state.carVisible = true;
      },
      pushGoodToCar(state,obj){
          state.car.push(obj);
      },
      setGoodNum(state,o){
          state.car[o.i].num = o.v;
      },
      setGoodRequest(state,o){
          state.car[o.i].request = o.r;
      },
      clearCar(state){
          state.car = [];
      },
      setContactInfo(state,info){
          state.contactInfo = info;
      }
  }
})


