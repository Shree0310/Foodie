import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
// import { auth } from "../utils/firebase";
import { getAuth } from "firebase/auth";
import { app } from "../utils/firebase";

const SignUp = () =>{
    const navigate = useNavigate();
    const [ph, setPh] = useState("");    
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const auth = getAuth(app);

    useEffect(() => {
        // Initialize reCAPTCHA verifier on component mount
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              // reCAPTCHA solved
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
            setLoading(false);
            navigate("/"); // Navigate only after successful verification
          } catch (error) {
            console.error("Error verifying OTP:", error);
            setLoading(false);
          }
      }


    return (
        <div>
            <form onSubmit={(e)=>e.preventDefault()} className="md:w-4/12 p-12 mx-auto my-36 right-0 left-0">
            <h1 className="font-semibold text-3xl tracking-wider font-sans p-2">
                Sign up
            </h1>

            <h5 className="text-xs text-orange-400 font-bold p-2">
                    <span className="text-black font-light" >Or </span> 
                    <span className="cursor-pointer" onClick={()=>{navigate('/login')}}>Login to your account</span>
            </h5>
    
            <PhoneInput
                country={"in"} 
                value={ph} 
                onChange={setPh} 
                type="text" 
                placeholder="Phone Number" 
                className="px-2 mx-2 w-10/12 h-[70px] border-gray-300 text-gray-900"/>

                <button 
                variant="contained"
                className="py-4 my-4 mx-2 w-10/12 bg-orange-500 text-white" 
                onClick={sendOTP}
                disabled={loading}>
                        {loading ? "Sending OTP..." : "SEND OTP"}
                </button>
                <div id="recaptcha-container"></div>

            {otpSent && (
                    <input
                    onChange={(e)=> setOtp(e.target.value)}
                        type="text"
                        placeholder="One Time Password"
                        value={otp}
                        className="px-2 mx-2 w-10/12 h-[70px] border-gray-300 text-gray-900"
                    />
                    )}  

                {/* <input  
                type="text" 
                placeholder="One Time Password" 
                className="px-2 mx-2 w-10/12 h-[70px] border-gray-300 text-gray-900"/> */}

                {otpSent && (<button 
                className="py-4 my-4 mx-2 w-10/12 bg-orange-500 text-white" 
                onClick={()=>{
                    verifyOTP();
                    navigate("/");
                    }}
                    disabled={loading}>
                     {loading ? "Verifying OTP..." : "VERIFY OTP"}
                </button>
                )}

 
            </form>
            
        </div>
    )
}

export default SignUp;