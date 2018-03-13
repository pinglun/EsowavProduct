import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['~/views/layout/App.vue'], resolve),
            meta: {
                title: '首页',
                keepAlive: true
            },
            children: [
                {
                    path: '/animation',
                    name: 'animation',
                    meta: {
                        title: '影视动画',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/animation/Index.vue'], resolve),
                    children: [
                        {
                            path: '/animation-propagate',
                            name: 'animationPropagate',
                            meta: {
                                title: '影视动画-宣传片',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/animation/Propagate.vue'], resolve),
                        },
                        {
                            path: '/animation-2d',
                            name: 'animation2d',
                            meta: {
                                title: '影视动画-二维动画',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/animation/2d.vue'], resolve),
                        },
                        {
                            path: '/animation-3d',
                            name: 'animation3d',
                            meta: {
                                title: '影视动画-三维动画',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/animation/3d.vue'], resolve),
                        },
                    ]
                },
                {
                    path: '/design',
                    name: 'design',
                    meta: {
                        title: '创意设计',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/design/Index.vue'], resolve),
                    children: [
                        {
                            path: '/design-ppt',
                            name: 'designPpt',
                            meta: {
                                title: '创意设计-ppt',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/design/Ppt.vue'], resolve),
                        },
                        {
                            path: '/design-book',
                            name: 'designBook',
                            meta: {
                                title: '创意设计-书籍',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/design/Book.vue'], resolve),
                        },
                        {
                            path: '/design-interaction',
                            name: 'designInteraction',
                            meta: {
                                title: '创意设计-交互设计',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/design/Interaction.vue'], resolve),
                        },
                        {
                            path: '/design-vi',
                            name: 'designVi',
                            meta: {
                                title: '创意设计-vi',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/design/Vi.vue'], resolve),
                        },
                        {
                            path: '/design-plan',
                            name: 'designPlan',
                            meta: {
                                title: '创意设计-活动策划',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/design/Plan.vue'], resolve),
                        }
                    ]
                },
                {
                    path: '/system',
                    name: 'system',
                    meta: {
                        title: '智慧系统',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/system/Index.vue'], resolve),
                    children: [
                        {
                            path: '/system-panorama',
                            name: 'systemPanorama',
                            meta: {
                                title: '智慧系统-360&720全景',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/system/Panorama.vue'], resolve),
                        },
                        {
                            path: '/system-ar',
                            name: 'systemAR',
                            meta: {
                                title: '智慧系统-AR增强现实',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/system/AR.vue'], resolve),
                        },
                        {
                            path: '/system-vr',
                            name: 'systemVR',
                            meta: {
                                title: '智慧系统-VR虚拟互动',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/system/VR.vue'], resolve),
                        },
                        {
                            path: '/system-dev',
                            name: 'systemDev',
                            meta: {
                                title: '智慧系统-系统开发',
                                keepAlive: true
                            },
                            component: resolve => require(['~/views/system/Dev.vue'], resolve),
                        },

                    ]
                },
                {
                    path: '/space',
                    name: 'space',
                    meta: {
                        title: '创客空间',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/space/Index.vue'], resolve),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    meta: {
                        title: '联系信息',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/submit/Contact.vue'], resolve),
                },
                {
                    path: '/goods_list',
                    name: 'goods_list',
                    meta: {
                        title: '确认意向表',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/submit/GoodsList.vue'], resolve),
                },
                {
                    path: '/result',
                    name: 'result',
                    meta: {
                        title: '提交结果',
                        keepAlive: true
                    },
                    component: resolve => require(['~/views/submit/Result.vue'], resolve),
                }
            ]
        },
        {
            path: '/details',
            name: 'details',
            meta: {
                title: '文章详情',
                keepAlive: false
            },
            component: resolve => require(['~/views/space/Details.vue'], resolve),
        }
    ]
})


