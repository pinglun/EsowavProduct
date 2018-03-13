import Axios from 'axios';
import Config from '../config';
import { Toast } from 'mint-ui';

function buildApiUrl(url) {
    return `${Config.apiUrl}/${Config.apiPrefix}/${url}`;
}

function setToken() {
    Axios.defaults.headers['Authorization'] = sessionStorage.getItem(Config.tokenKey);
}

function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

function buildServerApiRequest(params, url, type, callback) {
    //setToken();

    let apiUrl = buildApiUrl(url);

    if ('get' == type) {
        //做一些加载的小动画挺好

        for (let i in params){
            apiUrl += ('/'+ params[i]);
        }

    }

    let result = Axios[type](apiUrl, params);

    if (isFunction(callback)) {//没有回调则返回es6 promise
        result.then(r => {
            //这里可以根据后台数据进一步做一些过滤或者报错之类的
            //比如没有权限操作，弹出提示清除token并跳转登录页面
            if(r.data.success){
                callback(r.data.data);
            }else {
                Toast(r.data.msg);
            }
        }).catch(e => {
            if (__DEV__)
                console.log(e);
            Toast('请求出错');
            // ElementUI.Notification.error({
            //     title: '请求错误',
            //     message: 'Network Error'
            // });
        });
    }else {
        return result;
    }

}


export function buildApiRequest(params, url, type, callback) {
    return buildServerApiRequest(params, url, type, callback);
}

export function getApiUrl(url) {
    //只是返回api地址而不做请求，用在上传组件之类的
    return buildApiUrl(url) + '?token=' + sessionStorage.getItem(Config.tokenKey);
}

