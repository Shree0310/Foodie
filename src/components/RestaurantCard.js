import { CDN_URL } from "../utils/constants";
import { colors } from "../utils/designSystem";

//Whenever we need something that we need to reuse then create a new component for it
const RestaurantCard = (props) =>{
    const {resData} = props;
    
    const {cloudinaryImageId, name, locality, cuisines, avgRating, id, sla } = resData;
    //console.log({resData});
    //console.log(resData);
    return (
        <div className="group w-full sm:w-64 m-3 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            <div className="relative h-40 overflow-hidden">
                <img 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    src={CDN_URL + cloudinaryImageId} 
                    alt={name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 truncate mb-1">{name}</h3>
                <p className="text-sm text-gray-600 mb-2 truncate">{cuisines.join(", ")}</p>
                
                <div className="flex items-center justify-between mb-2">
                    <div className={`flex items-center px-2 py-1 rounded-md ${parseFloat(avgRating) >= 4.0 ? 'bg-green-100' : parseFloat(avgRating) >= 3.0 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${parseFloat(avgRating) >= 4.0 ? 'text-green-600' : parseFloat(avgRating) >= 3.0 ? 'text-yellow-600' : 'text-red-600'} mr-1`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className={`text-sm font-medium ${parseFloat(avgRating) >= 4.0 ? 'text-green-700' : parseFloat(avgRating) >= 3.0 ? 'text-yellow-700' : 'text-red-700'}`}>
                            {avgRating}
                        </span>
                    </div>
                    <div className="text-sm text-gray-600">{sla?.deliveryTime || "--"} mins</div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{locality}</span>
                </div>
            </div>
            
            <div className="bg-gray-50 px-4 py-2">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500 uppercase">View Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
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
        console.log(props.resData.aggregatedDiscountInfoV3.subHeader);


        return (
            <div className="relative">
                <div className="absolute -top-1 -left-1 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold py-1 px-3 rounded-br-xl rounded-tl-xl shadow-md">
                        {props.resData.aggregatedDiscountInfoV3.header}
                    </div>
                </div>
                <RestaurantCard {...props}/>
            </div>
        );

    };
}

export default RestaurantCard;