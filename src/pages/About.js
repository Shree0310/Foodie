import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { colors } from "../utils/designSystem";

const About = () => {
    console.log("About component rendering");
    return (
        <PageTransition>
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Foodie</h1>
                            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                                Connecting people with the food they love, when they want it.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Our Story */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Founded in 2023, Foodie began with a simple mission: to transform how people experience food delivery. 
                            What started as a small team with big ideas has grown into a platform that partners with thousands of restaurants 
                            to deliver exceptional food experiences directly to your door.
                        </p>
                        <p className="text-lg text-gray-600">
                            Today, we're proud to serve millions of customers, connecting them with their favorite restaurants 
                            and helping local businesses thrive in the digital economy.
                        </p>
                    </div>
                </div>
                
                {/* Our Values Section */}
                <div className="bg-white py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">Our Values</h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-amber-50 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Speed</h3>
                                <p className="text-gray-700">We understand that time matters. Our efficient delivery network ensures your food arrives hot and fresh, exactly when you need it.</p>
                            </div>
                            
                            <div className="bg-amber-50 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                                <p className="text-gray-700">We partner only with restaurants that meet our high standards, ensuring you receive nothing but the best culinary experiences.</p>
                            </div>
                            
                            <div className="bg-amber-50 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Affordability</h3>
                                <p className="text-gray-700">Great food shouldn't break the bank. We work to provide fair pricing and regular deals to make your favorite meals accessible.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Stats Section */}
                <div className="py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <p className="text-4xl font-bold text-amber-600">2500+</p>
                                <p className="text-gray-600 mt-2">Restaurant Partners</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-amber-600">50+</p>
                                <p className="text-gray-600 mt-2">Cities Served</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-amber-600">1M+</p>
                                <p className="text-gray-600 mt-2">Happy Customers</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-amber-600">15M+</p>
                                <p className="text-gray-600 mt-2">Orders Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* CTA Section */}
                <div className="bg-amber-500 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to satisfy your cravings?</h2>
                        <Link 
                            to="/" 
                            className="inline-block bg-white text-amber-600 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About; 