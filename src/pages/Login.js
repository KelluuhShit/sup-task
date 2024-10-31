// src/pages/Login.js
import React, { useState } from 'react';
import logo from '../assets/AppIcon.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        // Handle login logic here
    };

    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center text-white"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/8473001/pexels-photo-8473001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B192C] opacity-90"></div>

            {/* Login Container */}
            <div className="relative z-10 flex flex-row flex-wrap p-8 ">
                
                {/* Supertasker Features */}
                <div className="bg-[#0B192C] bg-opacity-70 p-16 shadow-lg w-full md:w-1/2 text-left">
                    <div className="flex justify-center align-center">
                        <img 
                            src={logo} 
                            alt="Supertasker Logo" 
                            className="w-24 h-24 mb-4 mx-auto md:mx-0 animate-rotate" 
                        />
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <span className="text-[#FF6500] font-semibold">Surveys</span> - Earn rewards by completing surveys.
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-[#FF6500] font-semibold">Courses</span> - Learn and grow with curated courses.
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-[#FF6500] font-semibold">Blog Articles</span> - Stay updated with our informative articles.
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-[#FF6500] font-semibold">Affiliate Marketing</span> - Make passive income through referrals.
                        </li>
                    </ul>
                </div>

                {/* Login Form */}
                <div className="bg-[#0B192C] bg-opacity-80 p-16 shadow-lg w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
                    <form onSubmit={handleSubmit} className="text-left">
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
                            Login
                        </button>
                    </form>
                    <p className="mt-4">
                        Don't have an account?{' '}
                        <a href="/register" className="text-[#FF6500] hover:underline">
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
