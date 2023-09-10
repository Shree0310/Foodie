import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//RestaurantMenu component should be worried only about displaying the restaurant menu and 
// not about fetching the data acc to the single responsibility principle.
const RestaurantMenu = ()=>{

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
  
    if(resInfo === null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage, avgRating, locality  } = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards}  = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //itemCards[0].card.info;

    return (
        <div className="menu">
            <div className="menu-header-combined">
                <div className="menu-header">
                    <h3>{name}</h3>
                </div>
                    <div className="menu-sub-header">
                        <div>
                            <p>{cuisines.join(" , ")}</p>
                            <p>{locality}</p>
                        </div>
                        <div>
                            <h2>{avgRating}</h2>
                        </div>
                        
                                           
                    </div>                                                           
            </div>
            <div className="costForTwo">
                <p>{costForTwoMessage}</p>
            </div> 
            
           
            <div className="menu-items">
                <ul>
                        {itemCards.map(item => 
                            <li key={item.card.info.id}>{item.card.info.name} -{"Rs."} {(item.card.info.price)/100 || (item.card.info.defaultPrice)/100}</li>
                        )}

                    </ul>
            </div>
            
            
            
            
                
        </div>
    )
}

export default RestaurantMenu;