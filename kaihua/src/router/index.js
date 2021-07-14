import Vue from "vue";
import VueRouter from "vue-router";
// const Search = () => import(/* webpackChunkName: "Search" */ "../pages/Search");
const Home = () => import(/* webpackChunkName: "Home" */ "../views/home/Home.vue");


const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => {});
};
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    // {
    //   name: "search",
    //   path: "/search",
    //   component: Search,
    // }
  ],
  // 每次切换路由页面滚动条位置
//   scrollBehavior() {
//     return { x: 0, y: 0 };
//   },
// });
// const permissionPaths = ["/shopcart", "/order", "/pay"];
// router.beforeEach((to, from, next) => {
//   if (
//     permissionPaths.indexOf(to.path) > -1 &&
//     !window.localStorage.getItem("token")
//   ) {
//     next("/login");
//   }
//   next();
});
export default router;
