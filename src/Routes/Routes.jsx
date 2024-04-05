import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErroElemnt from "../Components/ErroElemnt";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/News/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErroElemnt></ErroElemnt>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/news/:id',
          element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
          loader:()=>fetch('/news.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);


export default router;