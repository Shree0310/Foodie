import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mockData";
import { useState, useEffect, useContext  } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOfflinePage from "../utils/useOfflinePage";
import Offline from "./Offline";
import { withOfferLabel } from "./RestaurantCard";
import userContext from "../utils/userContext";

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
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const RestaurantWithOffer = withOfferLabel(RestaurantCard);

    const {setUserInfo,loggedInUser} = useContext(userContext);

    //console.log(listOfRestaurants);

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
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
    }

    const offlineStatus = useOfflinePage();

   if(offlineStatus){
     return <Offline/>
   } 

    //whenever state variable updates, react triggers a reconciliation cycle(re-renders the component )
    
    //Using ternary operation
    return (listOfRestaurants === null ? <Shimmer/> :(
        <div className="body">
            <div>
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input className="border border-solid border-black"
                        //Binding to a local state variable searchText, but that forever remains empty string as initialised  
                        //Local state variable changes everytime we are typing anything
                        //And everytime the local state variable changes the component is re-rendered
                        value={searchText} 
                        size="50" type="text" 
                        data-testid = "searchInput"
                        //As soon as my input changes I want to update it with the updated value
                        onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button 
                        className="px-4 m-2 py-2 bg-orange-300 shadow-xl rounded-lg"
                        onClick={()=>{
                            //Filter the restaurant cards and update the UI
                            // const filteredSearchText = searchText.fetch 
                            //setSearchText(value); 
                            const searchFilterList = filteredRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ); 
                            setListOfRestaurant(searchFilterList);
                            console.log(searchText);
                        }}>Search</button>
                    </div>
                <div className="search m-4 px-4 py-4">
                <button 
                    className=" bg-orange-300 shadow-xl m-2 px-4 py-2 rounded-lg" 
                    onClick={
                        ()=>{
                            console.log("button clicked")
                            //filter logic
                            const filteredList = filteredRestaurants.filter(
                                (res) => res.info.avgRating>4
                             );
                             setListOfRestaurant(filteredList); 
                             //console.log(listOfRestaurants);
                            }
                        }>
                        Top Rated Restaurants
                 </button>
                </div>
                <div className="search m-4 px-4 py-4">
                    <label>User Name:</label>
                    <input className="border border-black p-2" value={loggedInUser}onChange={(e)=>setUserInfo(e.target.value )}/> 
                </div>

                </div>
            </div>
            <div className="flex flex-wrap">
                {/* restaurantCards */} 
                {
                    // Whenever we are looping, we need to have a key property that is unique to each
                    //Here the key is the ID which is unique for each restaurant
                    //Or we can use an index as the key but index as key is not recommended 
                    listOfRestaurants.map((restaurant) =>
                        (
                        <Link className="restaurant-link" key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
                        {/* if the restaurant has the aggregatedDiscountInfoV3 add a label to it */}
                            {restaurant.info.aggregatedDiscountInfoV3 ? 
                            (<RestaurantWithOffer resData= {restaurant }/>)
                             : (<RestaurantCard resData = {restaurant }/>
                             )}
                        </Link>
                         ))
                } 
            </div>

        </div>
    ))
}




//Exporting the body
export default Body;