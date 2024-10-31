// src/components/Loader.js
import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader">
                <div className="double-bounce1 bg-[#FF6500]"></div>
                <div className="double-bounce2 bg-[#1E3E62]"></div>
            </div>
        </div>
    );
};

export default Loader;