import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 md:pr-8">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 leading-tight">
                            <span className="block">Delicious Food,</span>
                            <span className="block text-amber-700">Delivered Fast</span>
                        </h1>
                        
                        <p className="mt-2 text-base text-gray-600 max-w-lg">
                            Order from your favorite restaurants and enjoy a hassle-free delivery experience.
                        </p>
                        
                        <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                            <Link 
                                to="/location" 
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                            >
                                Find Restaurants
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    
                    <div className="mt-6 md:mt-0 md:w-1/2">
                        <div className="relative h-44 md:h-48 rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                                alt="Delicious Food" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection; 