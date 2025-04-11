import React from 'react';
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const WhatsOnMyMind = ({ dishes }) => {

    if (!dishes || dishes.length === 0) {
        return;
    }

    return (
        <div className=''>
            <p className="text-lg font-bold p-4">What's On Your Mind?</p>
            <div id='woym container' className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide scroll-snap-x w-full h-44'>
                {dishes.map((dish) => (
                    <div className='flex-shrink-0 snap-center transform transition-transform duration-300 hover:scale-105 overflow-hidden space-x-4' key={dish.id}>
                        <div className='rounded-lg overflow-hidden w-36 h-36'>
                            <Link
                                key={dish.id}
                                to={"/collections/" + dish.id}>
                                <img
                                    className='w-full h-full object-cover cursor-pointer'
                                    src={CDN_URL + dish.imageUrl}
                                    alt={dish.name}
                                    loading='lazy' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhatsOnMyMind;