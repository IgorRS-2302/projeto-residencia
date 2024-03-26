import { lazy } from "react";

const Main = lazy(() => import("./views/main/Main"));
const Cadastro = lazy(() => import("./views/Cadastro/Cadastro"));
const Login = lazy(() => import("./views/login/Login"));
const Dashboard = lazy(() => import("./views/dashboard/dashboard"));

export const routes = [
  { path: "/", exact: true, name: "home" },
  { path: "/main", name: "Main", element: Main },
  { path: "/cadastro", name: "Cadastro", element: Cadastro },
  { path: "/login", name: "Login", element: Login },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
];
