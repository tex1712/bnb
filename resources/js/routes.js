import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import ExampleComponent2 from "./components/ExampleComponent2";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home"
    },
    {
        path: "/example2",
        component: ExampleComponent2,
        name: "example2"
    }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;