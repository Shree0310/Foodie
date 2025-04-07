import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemsData, cartItems, getItemQuantity }) => {
    const dispatch = useDispatch();

    return (
        <div className="divide-y divide-gray-200">
            {itemsData.map(item => {
                const itemInfo = item.card.info;
                const itemQuantity = getItemQuantity ? getItemQuantity(itemInfo.id) : 0;
                
                return (
                    <div 
                        data-testid="foodItems"
                        key={itemInfo.id} 
                        className="p-4 hover:bg-gray-50 transition-colors duration-150 flex justify-between items-center"
                    >
                        <div className="flex-1 pr-4">
                            <div className="flex items-center">
                                {itemInfo.isVeg ? (
                                    <span className="flex-shrink-0 w-4 h-4 border border-green-600 flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                    </span>
                                ) : (
                                    <span className="flex-shrink-0 w-4 h-4 border border-red-600 flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                    </span>
                                )}
                                <h3 className="text-lg font-medium text-gray-900">{itemInfo.name}</h3>
                            </div>
                            
                            <div className="mt-1">
                                <span className="text-gray-900 font-medium">
                                    ₹{itemInfo.price ? itemInfo.price/100 : itemInfo.defaultPrice/100}
                                </span>
                            </div>
                            
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">{itemInfo.description}</p>
                        </div>
                        
                        <div className="relative w-24 h-24 flex-shrink-0">
                            {itemInfo.imageId && (
                                <img 
                                    src={CDN_URL + itemInfo.imageId} 
                                    alt={itemInfo.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            )}
                            
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                {itemQuantity > 0 ? (
                                    <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden">
                                        <button 
                                            className="px-2 py-1 bg-white text-green-600 hover:bg-gray-100"
                                            onClick={() => dispatch(removeItem(itemInfo.id))}
                                            aria-label="Remove item"
                                        >
                                            <span className="text-lg">−</span>
                                        </button>
                                        <span className="px-3 py-1 text-gray-700">{itemQuantity}</span>
                                        <button 
                                            className="px-2 py-1 bg-white text-green-600 hover:bg-gray-100"
                                            onClick={() => dispatch(addItem(itemInfo))}
                                            aria-label="Add item"
                                        >
                                            <span className="text-lg">+</span>
                                        </button>
                                    </div>
                                ) : (
                                    <button 
                                        className="py-1 px-4 bg-white text-green-600 border border-green-600 rounded-md hover:bg-green-50"
                                        onClick={() => dispatch(addItem(itemInfo))}
                                    >
                                        ADD
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;