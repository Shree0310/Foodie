const ShimmerCard = () => {
    return (
        <div className="w-full sm:w-64 h-72 bg-white rounded-lg overflow-hidden shadow animate-pulse">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="flex justify-between">
                    <div className="h-6 bg-gray-200 rounded w-12"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
            </div>
        </div>
    );
};

const Shimmer = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            {/* Shimmer hero section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-white rounded-lg shadow p-8 animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                    <div className="h-12 bg-gray-200 rounded w-full"></div>
                </div>
            </div>
            
            {/* Shimmer filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="flex space-x-4">
                    <div className="h-10 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-10 bg-gray-200 rounded-full w-24"></div>
                    <div className="h-10 bg-gray-200 rounded-full w-24"></div>
                </div>
            </div>
            
            {/* Shimmer WhatsOnMyMind section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
                <div className="flex space-x-4 overflow-x-auto pb-4">
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <div key={item} className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-full"></div>
                    ))}
                </div>
            </div>
            
            {/* Shimmer restaurant cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array(12).fill('').map((_, index) => (
                        <ShimmerCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shimmer;