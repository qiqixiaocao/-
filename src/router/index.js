import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/index",
        },
        {
            //首页（发现页）
            path: "/index",
            component: () => import("../views/Find"),
        },
        {
            //登录
            path: "/login",
            component: () => import("../views/Login"),
        },
        {
            //注册
            path: "/userinfo",
            component: () => import("../views/Userinfo"),
        },
        {
            //歌手列表
            path: "/singer",
            component: () => import("../views/Singer"),
        },
        {
            //我的
            path: "/mine",
            component: () => import("../views/Mine"),
        },
        {
            //歌单
            path: "/musiclist",
            component: () => import("../views/MusicList"),
        },
        {
            //歌曲播放
            path: "/musicplayer",
            component: () => import("../views/MusicPlayer"),
        },
        {
            //MV播放
            path: "/mvplayer",
            component: () => import("../views/MVPlayer"),
        },
        {
            //云村
            path: "/cloudvillage",
            component: () => import("../views/CloudVillage"),
        },
    ],
    linkActiveClass: "active",
});

export default router;