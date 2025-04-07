const PageTransition = ({ children }) => {
    return (
        <div 
            className="animate-fadeIn"
            style={{
                animation: 'fadeIn 0.3s ease-in-out',
            }}
        >
            {children}
        </div>
    );
};

export default PageTransition; 