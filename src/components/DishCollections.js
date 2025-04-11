import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useDishCollection from "../utils/useDishCollection";
import Shimmer from "./Shimmer";
import PageTransition from "../components/PageTransition";
import { CDN_URL } from '../utils/constants';

const DishCollections = () => {
    const { dishId } = useParams();
    const dishInfo = useDishCollection(dishId);

    const collections = dishInfo?.data?.collections || [];
    const items = collections.length > 0 ? collections[0]?.dishes || [] : [];

    useEffect(() => {
        items.map(item => {
            console.log("item:", item)
        })
    },[dishId])

    if (!dishInfo) {
        return <Shimmer />;
    }

    console.log("dishInfo in component:", dishInfo);

    // Extract the items from the API response structure


    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-2xl font-bold mb-4">
                    {dishInfo?.data?.collection?.name || "Food Collection"}
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {items.length > 0 ? (
                        items.map(item => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                {item.imageId && (
                                    <img 
                                        src={CDN_URL + item.imageId}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <div className="mt-2 font-semibold">
                                        ₹{item.price/100 || item.defaultPrice/100 || "Price unavailable"}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Show sample dishes if API doesn't return items
                        sampleDishes.map(item => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img 
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <div className="mt-2 font-semibold">₹{item.price}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="mt-8 text-center">
                    <Link to="/" className="text-amber-600 hover:text-amber-800 font-medium">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
};

// Keep the sample dishes for fallback
const sampleDishes = [
    {
        id: 1,
        name: "Chicken Biryani",
        description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
        price: 299,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hpooldqqhgkj37pzgrod"
    },
    {
        id: 2,
        name: "Hyderabadi Mutton Biryani",
        description: "Traditional recipe with tender mutton pieces marinated in yogurt and spices",
        price: 399,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qnyrkiqsfadpkdgbkwgz"
    },
    {
        id: 3,
        name: "Veg Biryani",
        description: "Mixed vegetables and basmati rice cooked with saffron and biryani spices",
        price: 249,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sygpzwellrfpqin3iyyv"
    }
];

export default DishCollections;