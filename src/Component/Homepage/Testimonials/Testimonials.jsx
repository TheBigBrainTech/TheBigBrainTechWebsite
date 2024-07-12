import React, {useEffect, useState} from 'react';
import {FaRegStar, FaStar} from 'react-icons/fa';
import testimonialsData from '../../../Assets/Data/Testimonials.json';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        try {
            setTestimonials(testimonialsData.testimonials);
        } catch (error) {
            console.log('Error Getting Data: ', error);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Auto-scroll every 3 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-500"/>);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500"/>);
            }
        }
        return stars;
    };

    return (
        <div>
            <section className="section">
                <div className="container-fluid">
                    <h1 className="section-title text-gray-600 text-center p-2">What Our Grads Has To Say About Us</h1>
                </div>
            </section>

            <div id="default-carousel" className="relative w-full pt-10 pb-10" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            data-carousel-item
                        >
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded shadow">
                                <img
                                    src={testimonial.imgSrc}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                <div className="flex mt-2">{renderStars(testimonial.rating)}</div>
                                <p className="mt-4 text-gray-600">{testimonial.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            data-carousel-slide-to={index}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
