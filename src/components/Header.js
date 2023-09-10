import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link  } from "react-router-dom";
import useOfflinePage from "../utils/useOfflinePage";

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

    //two arguments are: a callback function and a dependency array
    //The dependency array is not mandatory, only the callback function is mandatory 
    //if no dependency array => useEffect is called after every render of the component
    //if dependency array is empty = [] => useEffect is only called on the initial render(just once )
    //if dependency array is [btnName2] => usEffect is called on the initial render &  every time btnName2 is updated 
    useEffect(()=>{
        console.log("useEffect called"); 
    },[btnName2]);

    const offlineStatus = useOfflinePage();


    return (
        //If we want to write any javascript in JSX then we write it in {}
        <div className="header" style={styleHeader }>
            <div className="logo-container">
                <img 
                className="logo"
                src=   {LOGO_URL}  />
            </div>
            <div className="nav-items">
                <ul>
                <li>
                    { offlineStatus ?  <span className="dot" style={{backgroundColor : "red"}}></span> :<span className="dot" style={{backgroundColor : "green"}}> </span> }
                    </li>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>           
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>                       
                    </li>
                    <li>
                        <Link to="/grocery">
                            Grocery Store
                        </Link>
                    </li>
                    <li>
                        <img 
                        className="cart-logo"
                        src="https://i.pinimg.com/originals/df/70/fc/df70fc7f957c5811ff783ad0efdd4966.jpg" />
                    </li>
                    <button 
                    className="login"
                    onClick={()=>{
                                btnName2 === "Login" 
                                ? setBtnName("Logout") 
                                 : setBtnName("Login");
                            }}>{btnName2 }</button>
                </ul>
        </div>
        </div>
        
    )
}

//Exporting the header
export default Header;