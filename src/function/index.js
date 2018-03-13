export default {

    setUserInfo: function (data) {
        localStorage.setItem('EsowavShopUser', JSON.stringify(data))
    },
    getUserInfo: function () {
        return JSON.parse(localStorage.getItem('EsowavShopUser'))
    },
    arrayObjHasVal(arr,key,val) {
        for(let i =0;i<arr.length;i++){
            if (arr[i][key] == val){
                return i
            }
        }
        return -1;
    },
    objJoin(obj,str){
        let r = '';
        for(let i in obj){
            r += obj[i] + (i=='time' ? '秒':'') + str  ;
        }
        r = r.substring(0,r.length-1);
        return r;
    },
    isPoneAvailable(str) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
}
