import { useContext, useEffect } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOfflinePage from "../utils/useOfflinePage";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { colors } from "../utils/designSystem";


//All the react code is kept inside the src folder
//It is a JS object
//Another way of writing the css 

const styleHeader ={
    backgroundColor : "beige"
}
 
 //Header Component
const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    //Hooks can only be called inside the body of a component 
    //Never define the hooks inside a if else block, functions, for loop
    //A good pratice is to define them on the top always
    //useState makes the component to rerender and on the re-render, it is a new btnName2 variable formed with the updated value (here "Logout ")
    console.log("Header Render");

    const {loggedInUser} = useContext(userContext);
    const user = useSelector((store)=> store.user);
    //console.log(data);

    //two arguments are: a callback function and a dependency array
    //The dependency array is not mandatory, only the callback function is mandatory 
    //if no dependency array => useEffect is called after every render of the component
    //if dependency array is empty = [] => useEffect is only called on the initial render(just once )
    //if dependency array is [btnName2] => usEffect is called on the initial render &  every time btnName2 is updated 


    const handleAuthAction =()=>{
        if(user){
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate("/"); 
                dispatch(removeUser());
              }).catch((error) => {
                // An error happened.
                console.error("sign out error happened");
              });
        }else{
            navigate("/login");
        }
        
    }

    const offlineStatus = useOfflinePage();

    //Subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img className="h-12 w-auto" src={LOGO_URL} alt="Foodie" />
                        </Link>
                        <Link 
                            to="/location" 
                            className="ml-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Location</span>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center">
                            {offlineStatus ? 
                                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div> : 
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            }
                            <span className="text-xs text-gray-500">
                                {offlineStatus ? "Offline" : "Online"}
                            </span>
                        </div>
                        
                        <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                            Home
                        </Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                            Contact
                        </Link>
                        <Link to="/grocery" className={`text-sm font-medium ${isActive('/grocery') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                            Grocery
                        </Link>
                        
                        <Link to="/cart" className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                        
                        <button 
                            onClick={handleAuthAction}
                            className="text-sm font-medium px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                        >
                            {user ? (user.isDemo ? "Sign Up" : "Logout") : "Login"}
                        </button>
                        
                        {user && (
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold">
                                    {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {user.displayName || user.email}
                                </span>
                            </div>
                        )}
                    </nav>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <Link to="/cart" className="mr-4 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                        
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="/" 
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-orange-500' : 'text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-orange-500' : 'text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link 
                            to="/grocery" 
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/grocery') ? 'text-orange-500' : 'text-gray-700 hover:bg-gray-50'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Grocery
                        </Link>
                        
                        <button 
                            onClick={() => {
                                handleAuthAction();
                                setMobileMenuOpen(false);
                            }}
                            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                        >
                            {user ? (user.isDemo ? "Sign Up" : "Logout") : "Login"}
                        </button>
                        
                        {user && (
                            <div className="px-3 py-2 flex items-center space-x-3">
                                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-semibold">
                                    {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-gray-700 truncate">
                                    {user.displayName || user.email}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

//Exporting the header
export default Header;