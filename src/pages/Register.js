// src/pages/Register.js
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register Data:', formData);
        // Handle registration logic here
    };

    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center text-white"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/17794504/pexels-photo-17794504/free-photo-of-top-view-of-a-man-holding-a-smartphone-and-writing-in-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B192C] opacity-90"></div>

            {/* Register Container */}
            <div className="relative z-10 flex flex-row flex-wrap p-8">
                
                {/* Supertasker Benefits */}
                <div className="bg-[#0B192C] bg-opacity-70 p-16 shadow-lg w-full md:w-1/2 text-left">
                    <h2 className="text-3xl font-bold mb-4">Why Join Supertasker?</h2>
                    <ul className="space-y-4">
                        <li className="space-x-2">
                            <span className="text-[#FF6500] font-semibold">Surveys</span> - Earn rewards by participating in surveys.
                        </li>
                        <li className="space-x-2">
                            <span className="text-[#FF6500] font-semibold">Courses</span> - Access learning materials to boost your skills.
                        </li>
                        <li className="space-x-2">
                            <span className="text-[#FF6500] font-semibold">Blog Articles</span> - Stay informed with valuable insights.
                        </li>
                        <li className="space-x-2">
                            <span className="text-[#FF6500] font-semibold">Affiliate Marketing</span> - Earn through affiliate referrals.
                        </li>
                    </ul>
                </div>

                {/* Register Form */}
                <div className="bg-[#0B192C] bg-opacity-80 p-16 shadow-lg w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">Join Us Today</h1>
                    <form onSubmit={handleSubmit} className="text-left">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                required
                                className="bg-gray-800 border border-gray-600 text-white rounded-lg py-2 px-4 w-full"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="bg-gray-800 border border-gray-600 text-white rounded-lg py-2 px-4 w-full"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="bg-gray-800 border border-gray-600 text-white rounded-lg py-2 px-4 w-full"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#FF6500] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#FF8C42] transition duration-300 ease-in-out w-full"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4">
                        Already have an account?{' '}
                        <a href="/login" className="text-[#FF6500] hover:underline">
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
