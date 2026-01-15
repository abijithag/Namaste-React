import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Error from "./componets/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./componets/RestaurantMenu.";



const AppLayout = () => {
  return <div className="app-container">
    <Header/>
    <Outlet/>
  </div>;
};



const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      
    
    ]
  }


])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
