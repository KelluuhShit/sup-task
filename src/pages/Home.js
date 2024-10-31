import React, { useState, useEffect } from 'react';
import DefaultButton from '../components/DefaultButton';
import Loader from '../components/Loader';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Create an Image object to preload the background image
        const backgroundImage = new Image();
        backgroundImage.src = 'https://images.pexels.com/photos/8473001/pexels-photo-8473001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        
        // Set loading to false once the image is fully loaded
        backgroundImage.onload = () => {
            setLoading(false);
        };

        // Clean up the image object
        return () => {
            backgroundImage.onload = null;
        };
    }, []);

    // Render loader while loading
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#0B192C]">
                <Loader />
            </div>
        );
    }

    return (
        <div 
            className="text-white p-8 text-center min-h-screen flex flex-col justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/8473001/pexels-photo-8473001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
        >
            <div className="absolute inset-0 bg-[#0B192C] bg-opacity-90"></div> {/* Full-screen overlay */}
            <div className="relative z-10 p-8 rounded-md"> {/* Content inside the overlay */}
                <h1 className="text-5xl font-bold mb-4">Welcome to Supertasker</h1>
                <p className="mt-4 text-lg">Your one-stop platform for surveys, courses, and more!</p>
                
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Features</h2>
                    <div className="flex flex-row justify-around flex-wrap mt-4">
                        <a href="/surveys" className="text-[#FF6500] hover:underline text-lg">Surveys</a>
                        <a href="/courses" className="text-[#FF6500] hover:underline text-lg">Courses</a>
                        <a href="/blog" className="text-[#FF6500] hover:underline text-lg">Blog Articles</a>
                        <a href="/affiliate" className="text-[#FF6500] hover:underline text-lg">Affiliate Marketing</a>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-3xl font-bold mb-4">Get Started Today!</h3>
                    <p className="text-lg mb-4">Join our community to access surveys, courses, and more!</p>
                    <div className="flex justify-center mt-4">
                        <a href="/login">
                            <DefaultButton 
                                label="Get Started" 
                                onClick={() => console.log("Get Started Clicked")}
                                className="bg-[#FF6500] hover:bg-[#e55a00] transition duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
