import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    //subscribing to some part of the store, seleting a portion of the store and subscribing to that oart of the store
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    // Add a function to calculate the total
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = item.price ? item.price/100 : item.defaultPrice/100;
            return total + (itemPrice * item.quantity);
        }, 0);
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-orange-300 text-white rounded-lg"
                onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is Empty</h1>}
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-start py-4 border-b border-gray-200">
                        <div className="flex-grow">
                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                            <p className="text-gray-600">₹{item.price/100 || item.defaultPrice/100}</p>
                            {item.restaurantInfo && (
                                <p className="text-xs text-gray-500 mt-1">from {item.restaurantInfo.name}</p>
                            )}
                        </div>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden ml-4">
                            <button 
                                className="px-2 py-1 bg-white text-amber-500 hover:bg-gray-100"
                                onClick={() => dispatch(removeItem(item.id))}
                                aria-label="Remove item"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <span className="px-3 py-1 text-gray-700">{item.quantity}</span>
                            <button 
                                className="px-2 py-1 bg-white text-amber-500 hover:bg-gray-100"
                                onClick={() => dispatch(addItem(item))}
                                aria-label="Add item"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Delivery Fee</span>
                        <span>₹40.00</span>
                    </div>
                    <div className="flex justify-between font-bold mt-2 pt-2 border-t border-gray-200">
                        <span>Total</span>
                        <span>₹{(calculateTotal() + 40).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;