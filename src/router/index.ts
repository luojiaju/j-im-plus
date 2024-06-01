// createWebHashHistory 是hash模式就是访问链接带有#
// createWebHistory  是history模式
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        name: "index",
        redirect: "/layout",
        component: () => import("@/layout/index.vue"),
        children: [
            {
                path: "/layout",
                name: "layout",
                redirect: '/layout/home',
                meta: {
                    icon: "cottage",
                    role: "all",
                    title: "控制台",
                    line: true,
                },
                component: () => import("@/pages/home/views/private/layout.vue"),
                children: [
                    {
                        path: "home",
                        name: "home",
                        meta: {
                            icon: "cottage",
                            role: "all",
                            title: "首页",
                            line: true,
                        },
                        component: () => import("@/pages/home/index.vue"),
                    },
                    {
                        path: "private",
                        name: "private",
                        redirect: "/layout/private/panel",
                        meta: {
                            icon: "cottage",
                            role: "all",
                            title: "私信",
                            line: true,
                        },
                        children: [
                            {
                                path: "panel",
                                name: "panel",
                                meta: {
                                    icon: "cottage",
                                    role: "all",
                                    title: "panel",
                                    line: true,
                                },
                                component: () => import("@/pages/home/views/private/panel/panel.vue"),
                                children: [
                                    {
                                        path: "@me/atme",
                                        name: "好友状态",
                                        component: () => import("@/pages/home/views/private/@me/atme.vue"),
                                    },
                                    {
                                        path: "@me/:id",
                                        name: "私聊",
                                        component: () => import("@/pages/home/views/private/panel/chat.vue"),
                                    },
                                    {
                                        path: "sp",
                                        name: "商店",
                                        component: () => import("@/pages/home/views/private/@me/shop.vue"),
                                    },

                                ]
                            },
                            {

                                path: "channels/:channelId/:subChannelId",
                                name: "channels",
                                meta: {
                                    icon: "cottage",
                                    role: "all",
                                    title: "@m",
                                    line: true,
                                },
                                component: () => import("@/pages/home/views/private/channels/channels.vue")
                            }

                        ]
                    },
                ]
            }, {
                path: "/shop",
                name: "shop",
                meta: {
                    icon: "shopping_cart",
                    role: "all",
                    title: "商城",
                },
                component: () => import("@/pages/shop/index.vue")
            }, {
                path: "/ai",
                name: "ai",
                meta: {
                    icon: "smart_toy",
                    role: "all",
                    title: "Ai",
                    line: true,
                },
                component: () => import("@/pages/ai/index.vue")
            }, {
                path: "/setting",
                name: "setting",
                meta: {
                    icon: "settings",
                    role: "all",
                    title: "设置",

                },
                component: () => import("@/pages/settings/index.vue"),
            }, {
                path: "/help",
                name: "help",
                meta: {
                    icon: "contact_support",
                    role: "all",
                    title: "帮助"
                },
                component: () => import("@/pages/help/index.vue"),
            },

        ]
    },
    {
        path: '/popup',
        name: 'PopupWindow',
        component: () => import("@/pages/demo/views/popup.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/pages/demo/views/popup.vue"),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("@/pages/demo/views/popup.vue"),
    },
];

const router = createRouter({
    // 不使用history模式，使用hash模式
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,

})


// BAD
router.beforeEach((_to, _from, next) => {
    // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' }){}
    // 如果用户未能验证身份，则 `next` 会被调用两次

    next()

})

export default router