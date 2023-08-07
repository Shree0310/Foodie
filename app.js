import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
     { id:"heading" }, 
     "Hello world from React"
     );
/**<div id= "parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>  
    </div>
     <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>  
    </div>
</div>
**/
const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id: "child"},
[ React.createElement("h1",{}, "I am learning React"),
React.createElement("h2",{}, "I'm loving React")]),

React.createElement("div", {id: "child2"},
[ React.createElement("h1",{}, "I am h1 tag"),
React.createElement("h2",{}, "I'm h2 tag")])
]); 

 

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
 

root.render(parent); 