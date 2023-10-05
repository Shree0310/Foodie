import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

//Whenever we need something that we need to reuse then create a new component for it
const RestaurantCard = (props) =>{
    const {resData} = props;
    
    const {cloudinaryImageId, name, locality, cuisines, avgRating, id} = resData?.info
    //console.log({resData});
    //console.log(resData);
    return (
        // Another way of writing inline CSS
        <div data-testid="resCard" className="flex m-4 p-4 w-80 h-[370px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 shadow-xl rounded-xl">
           
                <div className="container">
                            <img className="flex justify-center rounded-xl w-80 h-60 " src={CDN_URL + cloudinaryImageId}
                            />
                            <h4 className="font-bold py-0 text-base">{name}</h4>
                               <div className="flex flex-wrap">
                               <img className="w-4 h-4" src="https://www.clipartmax.com/png/small/307-3078264_star-rating-icon-rating-star-single-png.png" 
                                alt="Star Rating Icon - Rating Star Single Png @clipartmax.com"/>
                               <p >{avgRating}</p> 
                               </div>
                            <h5 className="truncate text-sm">{cuisines.join(",")}</h5>  
                            <h5 className="py-1 text-xs">{locality}</h5>            
                            {/* <h6 className="text-sm">Delivery time: {resData.info.sla.deliveryTime}mins</h6> */}
                        </div>
            
                </div> 
    )
}

//Higher order Component
//input restaurantCard ==>> Output restaurantCardWithOffers

export const withOfferLabel = (RestaurantCard)=>{

    //The new component that higher order component is returning
    return (props)=>{
        //component returns some JSX
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Offer</label>
                <RestaurantCard {...props}/>
            </div>
        );

    };
}

export default RestaurantCard;