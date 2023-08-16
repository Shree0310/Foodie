import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
 



  



//All the files should have only 100 lines of code not more than that
const styleCard = {
    backgroundColor : "light grey"
}




  //console.log(resObj.info.name);

//App Layout component
//App Layout is the root level component 
const AppLayout = ()=>{
     return (
        <div className="app">
             <Header/>
             <Body/>
        </div>
     )
}

//Defining the root
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering the AppLayout Component
root.render(<AppLayout/>);


 