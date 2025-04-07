import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartNotification = () => {
    const [visible, setVisible] = useState(false);
    const cartItems = useSelector(store => store.cart.items);
    const prevTotalRef = useRef(0);
    
    // Calculate total quantity of items in cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    useEffect(() => {
        // Only show notification when total items increases
        if (totalItems > prevTotalRef.current) {
            console.log("Showing notification! Items:", totalItems, "Previous:", prevTotalRef.current);
            setVisible(true);
            
            // Auto-hide after 5 seconds
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);
            
            return () => clearTimeout(timer);
        }
        
        // Update previous total
        prevTotalRef.current = totalItems;
    }, [totalItems]);
    
    // Force display for debugging
    if (process.env.NODE_ENV === 'development') {
        useEffect(() => {
            // Force notification to show on initial load in development
            if (totalItems > 0 && !visible) {
                console.log("Forcing notification visibility in development");
                setVisible(true);
            }
        }, []);
    }
    
    console.log("Cart notification rendering:", { visible, totalItems });
    
    if (!visible) return null;
    
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#22c55e', // Green-500
            color: 'white',
            padding: '16px',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ fontWeight: 600 }}>
                {totalItems === 1 ? '1 item added' : `${totalItems} items added`}
            </div>
            <Link to="/cart" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none'
            }}>
                VIEW CART
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px', marginLeft: '4px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </Link>
        </div>
    );
};

export default CartNotification; 