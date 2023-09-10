import { useState } from "react";


//User using functional component
//It is a normal javascript function
const User = (props)=>{
    const [count]= useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log("typing..")
        },1000);
        
        //to unmount whatever is mounted earlier 
        return ()=>{
            clearInterval(timer)
        }
          
    }, []);

    return ( <div className="user-card">
        <h1>Count : {count}</h1>
        <h2>Count2 : {count2}</h2>
        <h2>Name: {props.name}</h2>
        <h3>Location: Bangalore </h3>
        <h4>Contact: sourashree03@gmail.com  </h4>
    </div>
    );
};

export default User;   