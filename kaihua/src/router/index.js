import Vue from "vue";
import VueRouter from "vue-router";
const Home = () =>import ("../views/home/Home.vue");
const Recruitment = () =>import ("../views/Recruitment/Recruitment.vue");

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: "/",
            component: Home,
        },
        {
            name: "home",
            path: "/home",
            component: Home,
        },
        {
            name: "recruitment",
            path: "/recruitment",
            component: Recruitment,
        },
        {
            name: "product",
            path: "/product",
            component: () =>
                import ("../views/product/index.vue"),
        },
        {
            name: "mall",
            path: "/mall",
            component: () =>
                import ("../views/mall/index.vue"),
            meta: {
                istrun: true
            }
        },
    ],
    // 每次切换路由页面滚动条位置
      scrollBehavior() {
        return { x: 0, y: 0 };
      },
});
export default router;