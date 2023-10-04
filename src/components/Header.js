import { useContext, useEffect } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link  } from "react-router-dom";
import useOfflinePage from "../utils/useOfflinePage";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

//All the react code is kept inside the src folder
//It is a JS object
//Another way of writing the css 

const styleHeader ={
    backgroundColor : "beige"
}
 
 //Header Component
const Header = () =>{
    //Hooks can only be called inside the body of a component 
    //Never define the hooks inside a if else block, functions, for loop
    //A good pratice is to define them on the top always
    //useState makes the component to rerender and on the re-render, it is a new btnName2 variable formed with the updated value (here "Logout ")
    const [btnName2, setBtnName] = useState("Login");
    console.log("Header Render");

    const {loggedInUser} = useContext(userContext);
    //console.log(data);

    //two arguments are: a callback function and a dependency array
    //The dependency array is not mandatory, only the callback function is mandatory 
    //if no dependency array => useEffect is called after every render of the component
    //if dependency array is empty = [] => useEffect is only called on the initial render(just once )
    //if dependency array is [btnName2] => usEffect is called on the initial render &  every time btnName2 is updated 
    useEffect(()=>{
        console.log("useEffect called"); 
    },[btnName2]);

    const offlineStatus = useOfflinePage();

    //Subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);


    return (
        //If we want to write any javascript in JSX then we write it in {}
        <div className="flex justify-between bg-orange-100 shadow-xl mb-2" >
            <div className="w-24">
                <img 
                src=   {LOGO_URL}  />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4 py-1">
                    { offlineStatus ?  <div class="h-4 w-4 rounded-full bg-red-500"></div> :<div className="h-4 w-4 rounded-full bg-green-600"> </div> }
                    </li>
                    {/* <div class="w-24 h-24 bg-red-500 rounded-full"></div> */}
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li>           
                    <li className="px-4">
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact Us
                        </Link>                       
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">
                            Grocery Store
                        </Link>
                    </li>
                    <li className="font-sans block mt-4 lg:inline-block lg:mt-0 align-middle text-black hover:text-gray-700">
                        <Link to="/cart" className="relative flex py-1" viewbox="0 0 24 24">
                            <img className="flex-1 w-6 h-6 fill-current"
                                src={CART_URL}/>    
                            <div  className="px-1">
                                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 
                                                h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                {cartItems.length}
                                </span>
                                
                            </div>                   
                        </Link>
                    </li>
                    <li className="px-4">
                        <button 
                        className="login"
                        onClick={()=>{
                                    btnName2 === "Login" 
                                    ? setBtnName("Logout") 
                                    : setBtnName("Login");
                                }}>{btnName2 }
                        </button>
                    </li>
                    
                    <li className="px-4 font-bold">{loggedInUser} </li>        
                </ul>
        </div>
        </div>
        
    )
}

//Exporting the header
export default Header;