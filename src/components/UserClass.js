import React from "react";
//User usimg Class based compoenent
//It is a normal Javascript class
//loading a class based component on a web page, means we are creating a new  instance of the class 
class UserClass extends React.Component{ 
    //whenever an instance of this class is created, the constructor is called 
    //First the constructor is called then the render is called
    constructor(props){

        super(props);
        console.log(props);

    //So, this is the best place to create the state variables inside the constructor
    //state is a big object which will contain all the state variables
    //only those state variables will be updated that are updated inside  setState
    this.state ={
       userInfo: {
        name : "something",
        location: "default",
        avatar_url: "avatar_url"
       }
    };

    //console.log(this.props.name + "Child constructor is called");
    }

    async componentDidMount(){
        //componnetDidMount is used to make api calls 
        //console.log(this.props.name+ "Child component is Mount");
        const data = await fetch("https://api.github.com/users/Shree0310");
        const json = await    data.json();
        console.log(json);

        this.setState({
             userInfo:json
        }) 
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        //destructuring
        //const {name,location,contact} = this.props;
        const {name,location,blog,avatar_url} = this.state.userInfo;

       // console.log(this.props.name+ "Child render is called");
        //returns some JSX
        return ( <div className="user-card">
        {/* <button onClick={()=>{
            //NEVER UPDATE STATE VARIABLES DIRECTLY
             this.setState({
                count: this.state.count +1
             })
        }}>Increase count</button> */}
         <h1 className="font-bold text-3xl p-4 m-4">About Us</h1>
        <img  src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact: {blog}  </h4>
        
    </div>
    );
    }
}

export default UserClass;