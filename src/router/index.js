import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/index",
            meta: {
                showFooter: true
            }
        },
        {
            //首页（发现页）
            path: "/index",
            component: () =>
                import ("../views/Find"),
            meta: {
                showFooter: true
            }
        },
        {
            //登录
            path: "/login",
            component: () =>
                import ("../views/Login"),
            meta: {
                showFooter: false
            }
        },
        {
            //注册
            path: "/userinfo",
            component: () =>
                import ("../views/Userinfo"),
            meta: {
                showFooter: false
            }
        },
        {
            //歌手列表
            path: "/singer",
            component: () =>
                import ("../views/Singer/index"),
            meta: {
                showFooter: true
            }
        },
        {
            //歌手详情
            path: "/details",
            component: () =>
                import ("../views/Singer/details"),
            meta: {
                showFooter: false
            }
        },
        {
            //我的
            path: "/mine",
            component: () =>
                import ("../views/Mine"),
            meta: {
                showFooter: true
            }
        },
        {
            //歌单
            path: "/musiclist",
            component: () =>
                import ("../views/MusicList"),
            meta: {
                showFooter: false
            }
        },
        {
            //歌曲播放
            path: "/musicplayer",
            component: () =>
                import ("../views/MusicPlayer"),
            meta: {
                showFooter: false
            }
        },
        {
            //MV播放
            path: "/mvplayer",
            component: () =>
                import ("../views/MVPlayer"),
            meta: {
                showFooter: false
            }
        },
        {
            //云村
            path: "/cloudvillage",
            component: () =>
                import ("../views/CloudVillage"),
            meta: {
                showFooter: true
            }
        },
    ],
    linkActiveClass: "active",
});

export default router;