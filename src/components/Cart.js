import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    //subscribing to some part of the store, seleting a portion of the store and subscribing to that oart of the store
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-orange-300 text-white rounded-lg"
                onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is Empty</h1>}
                <ItemList itemsData ={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;