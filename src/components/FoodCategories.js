import React from 'react';
import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

const FoodCategories = ({ dishes }) => {
    if (!dishes || dishes.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Food Categories</h2>
            
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {dishes.map((dish) => (
                    <div key={dish.id} className="flex-shrink-0">
                        <Link 
                            to={dish.action?.link || '#'} 
                            className="block w-24 md:w-32 focus:outline-none"
                        >
                            <div className="relative rounded-full overflow-hidden h-24 w-24 md:h-32 md:w-32 shadow-md mb-2">
                                {dish.imageUrl ? (
                                    <img 
                                        src={dish.imageUrl} 
                                        alt={dish.name}
                                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-400">No image</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-center text-sm font-medium text-gray-700 truncate">
                                {dish.name}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCategories; 