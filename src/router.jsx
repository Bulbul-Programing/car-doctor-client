import { createBrowserRouter } from "react-router-dom";
import Rout from "./Pages/Rout/Rout";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Service from "./Pages/Service/Service";
import About from "./Components/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rout></Rout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    
  ]);

export default router