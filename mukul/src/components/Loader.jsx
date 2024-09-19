import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import One from '../assets/background.avif';
import Two from '../assets/img-robo.avif';
import Three from '../assets/front.avif';

const images = [Three, Two, One]; // Images array

const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleImages, setVisibleImages] = useState([false, false, false]); // Track visible images

    useEffect(() => {
        // Show the first image instantly
        setVisibleImages((prev) => {
            const newVisible = [...prev];
            newVisible[0] = true; // Show the first image immediately
            return newVisible;
        });

        // Start the loading process for the next images
        setIsLoaded(true);

        const showImages = async () => {
            for (let i = 1; i < images.length; i++) { // Start from the second image
                await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait before showing the next image
                setVisibleImages((prev) => {
                    const newVisible = [...prev];
                    newVisible[i] = true; // Show the next image
                    return newVisible;
                });
            }
        };

        if (isLoaded) {
            showImages();
        }
    }, [isLoaded]);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    initial={{ scale: 3, opacity: 0 }} // Start scaled out and hidden
                    animate={{ 
                        scale: 1, 
                        opacity: visibleImages[index] ? 1 : 0
                    }} // Scale to normal size and keep visible
                    transition={{ duration: 1.5, type: 'spring', stiffness: 10 }}
                    className="absolute inset-0 w-full h-full object-cover" // Stay at the center and full screen
                    style={{
                        zIndex: index,
                        opacity: index === 1 ? 0.7 : index === 2 ? 0.5 : 1 // Dim the second and third images
                    }}
                />
            ))}
        </div>
    );
};

export default Loader;
