
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <UserClass/>
        </div>
    )
}

export default About;



// import User from "./User";
// import UserClass from "./UserClass";
// import React from "react";
// import userContext from "../utils/userContext";

// //When we render the About Us component on the web page then it starts goinig line by line
// class About extends React.Component {
//     constructor(props){
//         super(props);
//         this.state= {

//         }
//         //console.log("Parent constructor called");
//     }

//     componentDidMount(){
//         //console.log("Parent component mounted")
//     }

//     render(){
//         //console.log("Parent render called");
//         return (
//             <div>
//                 <h1>About Class Component</h1>
//                 <div>
//                     Logged User
//                     <userContext.Consumer>
//                         {(data)=> console.log(data)}
//                     </userContext.Consumer>
//                 </div>
//                 <User name = {"Sourashree through props"}/>
//                 {/* When it comes accross this class based component an instance of this is created */}
//                 <UserClass name ={"Sourashree from Class based"} location={"Bangalore on class"} contact={"sourahsree03@gmail.com"}/>

//             </div>
           
//         );
//     }

// };

// export default About;