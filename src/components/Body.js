import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mockData";
import { useState, useEffect  } from "react";
import Shimmer from "./Shimmer";

//Body Component
//Passing a prop to a component is just like passing an argument to a function
//Whenever we want to pass dynamic data we use props in react 
//Destructuring in JS?? 
//Config Driven UI  - website is driven by configs eg Location, controlling the data using the data,config comes from backend
const Body = () =>{

    //Local state variable = super powerful variable
    //Scope of the local state variable is inside the component 
    //useState maintains the state of your component
    //Nomenclature to add setOf in front of the variable name in the name of second variable which is a function
    //whenever state variable updates React re- renders the component
    //Hence React is Good at DOM manipulations 
    //The second function acts as a trigger and whenever it is called it checks the diff and rerenders the UI 
    //Array destructuring 
    //Hooks are just normal js functions given by React that have specifice use cases
    const  [listOfRestaurants, setListOfRestaurant] = useState([]);

    //It takes two arguments - 1. is a callback function, 2. dependency array
    //This useEffect callback function is called after the component renders 
    //If you want to do something after the erendering of the component then do it inside the useEffect
    //So it keeps the callback function to call it afterwards i.e after the component is rendered 
    useEffect(()=>{
        fetchData();
        console.log("useEffect called")
    }, []);

    const fetchData = async () =>{
        //We get fetch from Browser
         const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9650186&lng=77.7595472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json(); 
            //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
            //   console.log(json); 

            //Optional chaining
            setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //normal js variable
    // const listOfRestaurants = [];
 
    // let listOfRestaurants = [
          
    // ];

    //Conditional Rendering
    if(listOfRestaurants.length === 0){
         return (<h1>
            <Shimmer/>
         </h1>);
    }

    console.log("Body Rendered")
    return (
        <div className="body">
            {/* <div className="search">
                Search
                <input value="Search for restaurants and food" size="50" type="text"/>

            </div> */}
            <div>
                <div className="filter ">
                    <button 
                    className="filter-btn" 
                    onClick={
                        ()=>{
                            console.log("button clicked")
                            //filter logic
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating>4
                             );
                             setListOfRestaurant(filteredList); 
                             //console.log(listOfRestaurants);
                            }
                        }>
                        Top Rated Restaurants
                    </button>

                </div>
            </div>
            <div className="restaurant-container">
                {/* restaurantCards */} 
                {
                    // Whenever we are looping, we need to have a key property that is unique to each
                    //Here the key is the ID which is unique for each restaurant
                    //Or we can use an index as the key but index as key is not recommended 
                    listOfRestaurants.map((restaurant,index) =>
                        (
                        <RestaurantCard 
                        key = {index}
                        // Or
                        // key = {restaurant.info.id}
                        resData = {restaurant }/>
                         ))
                } 
            </div>

        </div>
    )
}




//Exporting the body
export default Body;