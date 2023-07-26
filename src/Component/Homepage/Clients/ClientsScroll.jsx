import React, { useState, useEffect } from 'react';
import ImageData from '../../../Assets/Data/imageData.json';

const ImageMarquee = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageUrls = ImageData.Clients.map((client) => client.path);
    setImages(imageUrls);
  }, []);

  return (
    <div className="image-marquee-container">
      <h2 className="text-center my-3" style={{color:'darkgray'}}><strong>Our Clients / Partners</strong></h2>
      <div className="image-marquee-content">
        {images.length > 0 &&
          images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`something ${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
