/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Início",
    icon: "fas fa-home",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Meu Perfil",
    icon: "fas fa-female",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Roupa Feminina",
    icon: 'fas fa-user-tie',
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Roupa Masculina",
    icon: 'fas fa-tshirt',
    component: Maps,
    layout: "/admin"
  },
  ,
  {
    path: "/maps",
    name: "Calçados",
    icon: 'fas fa-socks',
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Joias",
    icon: "fas fa-ring",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "fas fa-ring",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "fas fa-ring",
    component: Register,
    layout: "/auth"
  },
];
export default routes;
