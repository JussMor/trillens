import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewEmployee from "../components/NewEmployee.vue";
import ViewEmployee from "../components/ViewEmployee.vue";
import EditEmployee from "../components/EditEmployee.vue";
//import Navbar  from "../components/Navbar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/videost",
    name: "Videos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Videos.vue")
  },
  {
    path: "/new ",
    name: "NewEmployee ",
    component: NewEmployee,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/:employee_id",
    name: "view-employee",
    component: ViewEmployee
  },
  {
    path: "/edit/:employee_id",
    name: "edit-employee",
    component: EditEmployee
  }
];

const router = new VueRouter({
  routes
});

export default router;
