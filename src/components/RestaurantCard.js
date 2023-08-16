import { CDN_URL } from "../utils/constants";

//Whenever we need something that we need to reuse then create a new component for it
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, locality, cuisines, avgRating} = resData?.info
    //console.log({resData});
    return (
        // Another way of writing inline CSS
        <div className="card" style={{backgroundColor : "beige"}}>
                    <div className="card-container">
                        <img className="restaurant-img"src={CDN_URL + cloudinaryImageId}
                        />
                        <h4>
                            <b>{name}</b>
                        </h4>
                        <h5>
                            <b>{locality}</b>
                        </h5>
                        <h5>{cuisines.join(",")}</h5>
                        <p>
                            
                            <img 
                            className="star-image"
                            src="https://cdn4.vectorstock.com/i/1000x1000/71/83/star-review-icon-vector-26487183.jpg"/>
                            {avgRating} 
                             stars
                        </p>
                        <h6>
                            <b> Delivery time: {resData.info.sla.deliveryTime}mins</b>
                        </h6>

                    </div>

                </div> 
    )
}

export default RestaurantCard;