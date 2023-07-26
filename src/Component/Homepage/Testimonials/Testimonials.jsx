import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import TestimonialCard from './testimonialCards';
import testimonialsData from '../../../Assets/Data/Testimonials.json';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    try {
      setTestimonials(testimonialsData.testimonials);
    } catch (error) {
      console.log('Error Getting Data: ', error);
    }
  }, []);

  return (
    <div className="container-fluid Testimonials p-4">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center text-primary">
          People <i className="fas fa-heart heart"></i>
        </h3>
        <h1 className="text-primary text-center head">What we do</h1>

        {testimonials.length > 0 ? (
          <Carousel controls={false} indicators={false}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <TestimonialCard
                  imgSrc={testimonial.imgSrc}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  description={testimonial.description}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
