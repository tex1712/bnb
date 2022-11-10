import VueRouter from 'vue-router';
import Bookables from "./components/bookables/Bookables";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;