import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"; 
import { useState } from "react";


//RestaurantMenu component should be worried only about displaying the restaurant menu and 
// not about fetching the data acc to the single responsibility principle.
const RestaurantMenu = ()=>{

    const { resId } = useParams();

    const dummy = "Dummy Data"; 

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex] = useState(null); 
  
    if(resInfo === null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage, avgRating, locality  } = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards}  = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //itemCards[0].card.info;

    //console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item=>item.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    return (
        <div className="menu">
            <div className="menu-header-combined">
                <div className="flex justify-center font-bold text-lg m-6">
                    <h3>{name}</h3>
                </div>
                    <div className="menu-sub-header">
                            <p className="font-bold text-center">{cuisines.join(" , ")}</p>
                            <p className="text-center font-xs">{locality}</p>
                            {/* <h2 className="text-right">{avgRating}</h2> */}
                    </div>                                                           
            </div>
                <p className="text-center">{costForTwoMessage}</p>
            {/* Categories accordions */}
            <div>
                {categories.map((category,index)=>(
                 //Controlled Component   
                <RestaurantCategory 
                key = {category.card.card.title } 
                catData= {category.card.card}
                showItems = {index === showIndex ? true: false}
                closeItem = {showIndex ? false: true}
                setShowIndex = {() => setShowIndex(index)}
                />))}               
            </div>                                    
        </div>
    )
}

export default RestaurantMenu;