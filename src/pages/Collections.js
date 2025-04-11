import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';
import Shimmer from '../components/Shimmer';
import PageTransition from '../components/PageTransition';

const Collections = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        console.log("Collection page mounted with ID:", id);
        setLoading(false);
    }, [id]);

    if (loading) return <Shimmer />;

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Food Collection</h1>
                    <p className="text-gray-600 mb-8">Showing items for collection ID: {id}</p>
                    
                    <div className="bg-amber-50 p-6 rounded-lg">
                        <p className="mb-4">This collection is currently under development.</p>
                        <p>We're working on bringing you the best curated food collections!</p>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Collections; 