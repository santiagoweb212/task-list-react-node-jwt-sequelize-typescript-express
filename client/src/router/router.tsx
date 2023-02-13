import { createBrowserRouter } from "react-router-dom";
import { SingUp } from "../page/singup/SingUp";
import { SingIn } from "../page/singin/SingIn";
import { Home } from "../page/home/Home";
import { Dashboard } from "../page/dashboard/Dashboard";
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sing-in", element: <SingIn /> },
  { path: "/sing-up", element: <SingUp /> },
  {path: "/user/:userid/dashboard", element: <Dashboard />}
  
]);
