import React from 'react';
import CustomNavbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import StatCounter from '../Counter/Counter';
import CategoryCards from '../selectCards/categoryCards';
import BootcampCards from '../BootcampCards/Bootcamps';
import ContactSection from '../inquiry/inquiry';
import Testimonials from '../Testimonials/Testimonials';
import Info from '../CompanyInfo/info';
import Clients from '../Clients/ClientsScroll';
import Footer from '../Footer/Footer';

function Homepage() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <StatCounter />
      <CategoryCards />
      <BootcampCards />
      <ContactSection />
      <Testimonials />
      <Info />
      <Clients />
      <Footer />
    </div>
  );
}

export default Homepage;
