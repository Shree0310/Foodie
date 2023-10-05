import UserClass from "./UserClass";

const Contact = ()=>{
    return (
        <div className="">
            <h1 className="text-center font-bold text-3xl p-4 m-4 underline decoration-orange-400 ">Contact Us</h1>
            <form >
                <div className="text-center">
                <div >
                    <label>Name: </label>
                    <input type="text" className="border border-blue-400" placeholder="Name"/> <br/><br/>
                </div>
                <div >
                    <label>Message: </label>
                    <input type="text" className="border-blue-400" placeholder="Type your message here.."/> <br/><br/>
                </div>
                <div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400">Submit</button>
                </div>
                </div>
                
            </form>
        </div>
    )
}

export default Contact;