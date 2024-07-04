import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Blog from "../components/Blog";
import Shop from "../shop/Shop";
import About from "../About/About";
import SingleBook from "../shop/SingleBook";
import Dashboardlayout from "../dashboard/Dashboardlayout";
import Dashboard from "../dashboard/Dashboard";
import Upload from "../dashboard/Upload";
import ManageBooks from "../dashboard/ManageBooks"
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp"
import Login from "../components/Login"
import PrivateRoute from "../privateRouting/PrivateRoute";
import Logout from "../components/Logout";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
          path:'/book/:id',
          element:<SingleBook/>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
      }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<Dashboardlayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<Upload/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-book/:id",
          element:<EditBooks/>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path:"sign-up",
      element:<SignUp/>
    },{
      path:"login",
      element:<Login/>
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);

  export default router