import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (itemsData) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
  
    return (
        <div className="divide-y divide-gray-200">
            {Object.keys(itemsData).map((key) =>
                itemsData[key].map((item) => (
                    <div 
                        data-testid="foodItems"
                        key={item.card.info.id} 
                        className="p-4 hover:bg-gray-50 transition-colors duration-150 flex justify-between items-center"
                    >
                        <div className="flex-1 pr-4">
                            <div className="flex items-center">
                                {item.card.info.isVeg ? (
                                    <span className="flex-shrink-0 w-4 h-4 border border-green-600 flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                    </span>
                                ) : (
                                    <span className="flex-shrink-0 w-4 h-4 border border-red-600 flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                    </span>
                                )}
                                <h3 className="text-lg font-medium text-gray-900">{item.card.info.name}</h3>
                            </div>
                            
                            <div className="mt-1">
                                <span className="text-gray-900 font-medium">
                                    ₹{item.card.info.price 
                                        ? (item.card.info.price / 100).toFixed(2) 
                                        : (item.card.info.defaultPrice / 100).toFixed(2)
                                    }
                                </span>
                            </div>
                            
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">{item.card.info.description}</p>
                        </div>
                        
                        <div className="relative w-24 h-24 flex-shrink-0">
                            {item.card.info.imageId && (
                                <img 
                                    src={CDN_URL + item.card.info.imageId} 
                                    alt={item.card.info.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            )}
                            
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                <button 
                                    onClick={() => handleAddItem(item)}
                                    className="bg-white text-green-600 border border-green-600 hover:bg-green-50 px-4 py-1 rounded-lg text-sm font-medium shadow-md transition-colors"
                                >
                                    Add +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ItemList;