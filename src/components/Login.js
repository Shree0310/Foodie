import { useRef, useState, useEffect } from "react";
import { checkValidData } from "../utils/validate";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import PhoneInput from "react-phone-input-2";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { enableDemoMode } from "../utils/userSlice";
import { useDispatch } from "react-redux";



const Login = () =>{

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef(null);
    const phone = useRef(null);
    const name = useRef(null); 
    const [ph, setPh] = useState("");    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [user, setUser] = useState(null);
    const [mobileNumber, setMobileNumber ] = useState(false);
    const dispatch = useDispatch();




    useEffect(() => {
        // Initialize reCAPTCHA verifier on component mount
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              // reCAPTCHA solved
              sendOTP();
            },
            "expired-callback": () => {
              // Handle reCAPTCHA expiration
            },
          },
          auth
        );

        return () => {
            window.recaptchaVerifier.clear();
          };
        }, [auth]); 


        const sendOTP = async () => {
        try {
            setLoading(true);
            const appVerifier = window.recaptchaVerifier;
      
            // Format the phone number correctly
            const formatPh = ph.startsWith("+") ? ph : `+${ph}`;
      
            const confirmationResult = await signInWithPhoneNumber(auth, formatPh, appVerifier);
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);
            setOtpSent(true);
            console.log("OTP sent successfully!");
          } catch (error) {
            console.error("Error sending OTP:", error);
            setLoading(false);
          }
      }

      const verifyOTP = async ()=> {
        try {
            setLoading(true);
            const confirmationResult = window.confirmationResult;
      
            const result = await confirmationResult.confirm(otp);
            console.log("OTP verified:", result);
            setUser(result.user);
            console.log(user);
            setLoading(false);
            navigate("/"); // Navigate only after successful verification
          } catch (error) {
            console.error("Error verifying OTP:", error);
            setLoading(false);
          }
      }

    const toggleLogin = () =>{
        setIsLoginForm(!isLoginForm)
    }
    const handleButtonClick = () =>{
        //Validate the form da
        const phoneValue = phone.current ? phone.current.value : "";
        // const emailValue = email.value ? email.current.value : "";
        // const nameValue = name.value ? name.current.value : "";
        
        const message = checkValidData(phoneValue); 
        setErrorMessage(message);

        if(message === null){

        }
    }

    const handleDemoMode = () => {
        console.log("Enabling demo mode...");  // Add logging
        dispatch(enableDemoMode());
        navigate("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={(e)=>e.preventDefault()} className="w-full">
                    <div className="mb-4">
                        <h1 className="font-semibold text-3xl tracking-wider font-sans p-2 mb-2">
                            {isLoginForm ? "Login" : "Sign up"}
                        </h1>
                        <h5 className="text-xs text-orange-400 font-bold p-2 mb-4">
                            <span className="text-black font-light">Or </span> 
                            <span className="cursor-pointer" onClick={()=>{navigate('/signup')}}>
                                {isLoginForm ? "create an account" : "Login to your account"}
                            </span>
                        </h5>

                        <PhoneInput
                            country={"in"} 
                            value={ph} 
                            onChange={setPh} 
                            type="text" 
                            inputProps={{
                                'aria-label': 'Phone Number', 
                                className: "px-2 mx-2 w-full h-[70px] border-gray-300 text-gray-900"
                            }}
                        />

                        {!otpSent && (<button
                            variant="contained"
                            className="py-4 my-4 mx-2 w-10/12 bg-orange-500 text-white" 
                            onClick={()=>{
                                sendOTP();
                                // navigate("/signup");
                                }}
                            disabled={loading}>
                                {isLoginForm ? "LOGIN" : "CONTINUE" }                       
                            </button>)}

                        {otpSent && (
                            <input
                            onChange={(e)=> setOtp(e.target.value)}
                                type="text"
                                placeholder="One Time Password"
                                value={otp}
                                className="px-2 mx-2 w-10/12 h-[70px] border-gray-300 text-gray-900"
                            />
                            )}  

                        {otpSent  && (

                            <button 
                        className="py-4 my-4 mx-2 w-10/12 bg-orange-500 text-white" 
                        onClick={()=>{
                            verifyOTP();
                            //navigate("/");
                            }}
                        disabled={loading}>
                         {loading ? "Verifying OTP..." : "VERIFY OTP"}
                    </button>                  
                    ) }
                  
                    <div id="recaptcha-container"></div>
                    
                </div>
                
                <p className="py-2 my-2 mx-2 text-red-600 text-sm">{errorMessage}</p>
                
                </form>

                <div className="mt-6 border-t pt-6">
                    <p className="text-center font-medium text-gray-600 mb-3">
                        Just browsing? Try our demo!
                    </p>
                    <button 
                        onClick={handleDemoMode}
                        className="w-full py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Experience Demo Mode
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        No login required - explore our app features instantly
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;