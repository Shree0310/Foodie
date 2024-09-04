import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () =>{

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const email = useRef(null);
    const phone = useRef(null);
    const name = useRef(null); 

    const toggleLogin = () =>{
        setIsLoginForm(!isLoginForm)
    }
    const handleButtonClick = () =>{
        //Validate the form data
        const errorMessage = checkValidData(phone.current.value,email.current.value, name.current.value); 
        setErrorMessage(errorMessage);
        console.log(errorMessage);
    }
    return (
        <div>
            
            <form onSubmit={(e)=>e.preventDefault()} className="md:w-4/12 p-12 mx-auto my-36 right-0 left-0">
                <div className="">
                <h1 className="font-semibold text-3xl tracking-wider font-sans p-2">{isLoginForm ?  "Login" : "Sign up"}</h1>
                <h5 className="text-xs text-orange-400 font-bold p-2">
                    <span className="text-black font-light" >Or </span> 
                    <span className="cursor-pointer" onClick={toggleLogin}>{isLoginForm ? "create an account" : "Login to your account"}</span>
                </h5>
                <input ref={phone} type="text" placeholder="Phone Number" className="px-2 mx-2 w-10/12 h-[70px] border-gray-300 text-gray-900"/>
                
                { !isLoginForm && (<input ref={name} type="text" placeholder="Name" className="px-2 mx-2 w-10/12 h-20 border-gray-300 text-gray-900"/>)}
                { !isLoginForm && (<input ref={email} type="text" placeholder="Email" className="px-2 mx-2 w-10/12 h-20 text-gray-900 border-gray-300"/>)}
                { !isLoginForm && (<p className="p-2 text-blue-500 font-medium w-10/12">Have a referral code?</p>)}
                <p className="py-2 my-2 mx-2 text-red-600 text-sm">{errorMessage}</p>
                <button className="py-4 my-4 mx-2 w-10/12 bg-orange-500 text-white" onClick={handleButtonClick}>{isLoginForm ? "LOGIN" : "CONTINUE" }</button>
                </div>
                
            </form>

        </div>
    )
}

export default Login;