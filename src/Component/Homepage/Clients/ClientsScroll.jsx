import React, { useState, useEffect } from 'react';
import ImageData from '../../../Assets/Data/imageData.json';

const ImageGrid = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageUrls = ImageData.Clients.map((client) => client.path);
        setImages(imageUrls);
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-200 p-16">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center p-4">
                <h2 className="text-center my-3 md:text-left" style={{ color: 'darkgray' }}>
                    <strong>Where Our Students Work?</strong>
                </h2>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {images.length > 0 &&
                    images.slice(0, 18).map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={`something ${index}`}
                            className="h-12 w-auto object-contain"
                        />
                    ))}
            </div>
        </div>
    );
};

export default ImageGrid;
