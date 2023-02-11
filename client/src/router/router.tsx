import { createBrowserRouter } from "react-router-dom";
import {SingUp} from "../page/singup/SingUp"
import {SingIn} from "../page/singin/SingIn"
export const router = createBrowserRouter([
  { path: "/sing-in", element: <SingIn /> },
  { path: "/sing-up", element: <SingUp /> },
]);
