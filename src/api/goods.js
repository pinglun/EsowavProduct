import {buildApiRequest as A,getApiUrl as G} from './init'

export default {
    Goods: (p,c) => A(p,'goods','get',c),
    GoodsBySlug : (p,c) => A(p,'goods_by_slug','get',c),
    saveOrder : (p,c) => A(p,'save_order','post',c),

}


