// src/pages/Survey.js
import React from 'react';

const Survey = () => {
    return (
        <div className="bg-[#1E3E62] text-white p-8">
            <h1 className="text-3xl font-bold">Survey Page</h1>
            <form className="mt-4">
                <label className="block mb-2">Question 1:</label>
                <input type="text" placeholder="Your answer" className="p-2 rounded bg-[#0B192C] border border-gray-500" />
                <button type="submit" className="mt-4 bg-[#FF6500] text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Survey;
