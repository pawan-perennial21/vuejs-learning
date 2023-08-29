import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AlbumDetails from "../components/AlbumDetail.vue";
import Login from "../components/Form/Login.vue";
import Register from "../components/Form/Register.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/albumDetails/:id",
        name: "albumDetails",
        component: AlbumDetails,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});

export default router;
