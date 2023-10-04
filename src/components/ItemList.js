import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (itemsData)=>{

  const dispatch = useDispatch();

  const handleAddItem = (x)=>{
    //Dispatch an action
    dispatch(addItem(x));
    
  }
  
    return (
        <div>
          {Object.keys(itemsData).map((key) =>
            itemsData[key].map((x) => (
              <div key={x.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
           <div className="w-9/12">
            <div className="py-2">
              <span>{x.card.info.name}</span>
              <span>
                - ₹
                {x.card.info.price
                  ? x.card.info.price / 100
                  : x.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-400">{x.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button onClick={()=>handleAddItem(x)}
                className="p-2 mx-16 rounded-lg bg-orange-400 text-white shadow-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + x.card.info.imageId} className="w-full" />
          </div>
              </div>
            ))
          )}
        </div>
      );
};

export default ItemList;