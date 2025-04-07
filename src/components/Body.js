import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOfflinePage from "../utils/useOfflinePage";
import Offline from "./Offline";
import { withOfferLabel } from "./RestaurantCard";
import userContext from "../utils/userContext";
import Footer from "./Footer";
import WhatsOnMyMind from "./WhatsOnMyMind";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser, enableDemoMode } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import PageTransition from "./PageTransition";

// Body Component
const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchError, setSearchError] = useState("");
    const [activeFilter, setActiveFilter] = useState("");

    const RestaurantWithOffer = withOfferLabel(RestaurantCard);
    const {setUserInfo, loggedInUser} = useContext(userContext);

    // Move both functions inside the component
    const handleSearch = () => {
        if (!searchText.trim()) {
            setListOfRestaurant(filteredRestaurants);
            setSearchError("");
            return;
        }
        
        const searchResults = filteredRestaurants.filter(
            restaurant => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                restaurant.info.cuisines.some(cuisine => 
                    cuisine.toLowerCase().includes(searchText.toLowerCase())
                )
        );
        
        if (searchResults.length === 0) {
            setSearchError(`No restaurants found matching "${searchText}"`);
        } else {
            setSearchError("");
        }
        
        setListOfRestaurant(searchResults);
    };

    const applyFilter = (filterType) => {
        if (!filteredRestaurants || filteredRestaurants.length === 0) {
            return;
        }
        
        if (activeFilter === filterType) {
            setActiveFilter("");
            setListOfRestaurant(filteredRestaurants);
            return;
        }
        
        setActiveFilter(filterType);
        
        let filtered = [];
        switch (filterType) {
            case "rating":
                filtered = filteredRestaurants.filter(res => parseFloat(res.info.avgRating) > 4.0);
                break;
            case "fast-delivery":
                filtered = filteredRestaurants.filter(res => res.info.sla?.deliveryTime < 30);
                break;
            case "offers":
                filtered = filteredRestaurants.filter(res => res.info.aggregatedDiscountInfoV3);
                break;
            default:
                filtered = [...filteredRestaurants];
                break;
        }
        
        setListOfRestaurant(filtered);
    };

    useEffect(() => {
        fetchData();
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                setUserInfo(displayName || email);
            } else {
                dispatch(removeUser());
                setUserInfo("");
            }
        });
        
        return () => unsubscribe();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const url = "https://swiggy.adiagr.in/dapi/restaurants/list/v5?lat=12.9650186&lng=77.7595472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const json = await response.json();
            
            console.log("API Response:", json);
            
            if (json?.data?.cards && Array.isArray(json.data.cards)) {
                const restaurants = json.data.cards.find(card => 
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                
                setListOfRestaurant(restaurants);
                setFilteredRestaurants(restaurants);
            } else {
                console.error("Expected data structure not found in API response:", json);
            }
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            setListOfRestaurant([]);
        } finally {
            setIsLoading(false);
        }
    };

    const offlineStatus = useOfflinePage();

    if (offlineStatus) {
        return <Offline />;
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-gray-50">
                {isLoading ? (
                    <Shimmer />
                ) : (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
                            <HeroSection />
                        </div>
                        
                        {/* Search Bar */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-grow">
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                            placeholder="Search for restaurants or cuisines..."
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    e.preventDefault();
                                                    handleSearch();
                                                }
                                            }}
                                        />
                                        {searchError && (
                                            <p className="mt-2 text-red-500">{searchError}</p>
                                        )}
                                    </div>
                                    <button
                                        className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
                                        onClick={handleSearch}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Filter Section */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                            <div className="flex flex-wrap gap-3">
                                <button
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                                    ${activeFilter === "rating" 
                                        ? "bg-amber-500 text-white" 
                                        : "bg-white text-gray-700 hover:bg-gray-100"}`}
                                    onClick={() => applyFilter("rating")}
                                >
                                    Top Rated
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                                    ${activeFilter === "fast-delivery" 
                                        ? "bg-amber-500 text-white" 
                                        : "bg-white text-gray-700 hover:bg-gray-100"}`}
                                    onClick={() => applyFilter("fast-delivery")}
                                >
                                    Fast Delivery
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                                    ${activeFilter === "offers" 
                                        ? "bg-amber-500 text-white" 
                                        : "bg-white text-gray-700 hover:bg-gray-100"}`}
                                    onClick={() => applyFilter("offers")}
                                >
                                    Offers
                                </button>
                            </div>
                        </div>

                        {/* What's on my mind section */}
                        <div id="whats-on-my-mind" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                            <WhatsOnMyMind />
                        </div>

                        {/* Restaurant List */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                {activeFilter ? 
                                    `${activeFilter === "rating" ? "Top Rated" : 
                                       activeFilter === "fast-delivery" ? "Fast Delivery" : 
                                       "Special Offers"} Restaurants` : 
                                    "All Restaurants"}
                            </h2>
                            
                            {listOfRestaurants.length === 0 ? (
                                <div className="text-center py-12 bg-white rounded-lg shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No restaurants found</h3>
                                    <p className="text-gray-500">
                                        Try changing your filters or search criteria
                                    </p>
                                    <button 
                                        onClick={() => {
                                            setListOfRestaurant(filteredRestaurants);
                                            setSearchText("");
                                            setActiveFilter("");
                                            setSearchError("");
                                        }}
                                        className="mt-4 px-4 py-2 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto">
                                    {listOfRestaurants.map(restaurant => (
                                        <Link 
                                            className="h-full w-full max-w-xs" 
                                            key={restaurant?.info.id} 
                                            to={"/restaurants/" + restaurant?.info.id}
                                        > 
                                            {restaurant.info.aggregatedDiscountInfoV3 ? 
                                                <RestaurantWithOffer resData={restaurant?.info} /> : 
                                                <RestaurantCard resData={restaurant?.info} />
                                            }
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                )}
                
                <Footer />
            </div>
        </PageTransition>
    );
};

export default Body;