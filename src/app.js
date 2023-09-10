import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet  } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

//All the files should have only 100 lines of code not more than that
const styleCard = {
    backgroundColor : "light grey"
}

//Chunking
//Lazy Loading
//App Splitting
//Dynamic bundling
//On demand loading
const Grocery = lazy(()=>import("./components/Grocery"));

const About = lazy(()=>import("./components/About"));

//App Layout component
//App Layout is the root level component 
const AppLayout = ()=>{
     return (
      // Pushing the children according to the route
      //Whatever component is required this outlet is replaced by the component
        <div className="app">
             <Header/>
             <Outlet/>
        </div>
     )
}

const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/> 
      },
      {
        path: "/about",
        element: <Suspense fallback={<h2>Loading...</h2>}>
          <About/> 
        </Suspense>
        
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element:  <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery/>
        </Suspense>
      },
      {
        //":" signifies that the resId will be dynamic i.e different for different restaurants 
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
    
  },
  
  
])

//Defining the root
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering the AppLayout Component
root.render(<RouterProvider router={appRouter}/>);


 