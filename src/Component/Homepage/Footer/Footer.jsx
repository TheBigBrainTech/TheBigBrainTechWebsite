import React, { useEffect, useState } from 'react';
import Logo from '../../../Assets/images/logo/BigBrainTechLogoBlack.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from 'framer-motion';
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState('');
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        });
    }, [controls]);

    const handleSubscribe = () => {
        if (email.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        fetch('https://3c8j6npj5c.execute-api.us-east-1.amazonaws.com/NewsletterAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to subscribe. Please try again later.');
                }
                alert('Successfully subscribed!');
                setEmail('');
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to subscribe. Please try again later.');
            });
    };

    return (
        <div className="bg-white">
            <section className="p-6 bg-gray-100 flex justify-center items-center min-h-45 border-b-2">
                <div className="container mx-auto flex flex-wrap items-start justify-center space-x-6">
                    <motion.div
                        className="p-6 rounded-lg shadow-lg max-w-md w-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <h3 className="text-lg font-bold">Have Any Project in Mind?</h3>
                                <p>Collaborate with the Best: Hire Us to Turn Your Project Vision into Reality!</p>
                            </div>
                            <div className="w-full md:w-1/2 text-center">
                                <a className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400" href="/Hire">Hire Us</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full mt-4 md:mt-0 min-h-50"
                        initial={{ opacity: 0, x: 50 }}
                        animate={controls}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="font-bold text-center text-2xl text-gray-600 mb-4">Don&apos;t Miss Out On Offers and Discounts</p>
                        <div className="flex items-center">
                            <input
                                type="email"
                                className="form-control w-full px-3 py-2 border border-gray-300 rounded"
                                placeholder="Subscribe To Our Newsletter"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="bg-yellow-500 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-400"
                                type="button"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-center">
                            By sharing your email, you acknowledge our
                            <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8" className="text-blue-500"> Privacy Policy</a> and
                            <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8" className="text-blue-500"> Terms of Service</a>.
                        </p>
                    </motion.div>
                </div>
            </section>

            <footer className="py-8 bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 mb-8">
                            <div className="flex items-center mb-4">
                                <img src={Logo} alt="Logo" className="w-48 h-auto" />
                            </div>
                            <p className="px-3">
                                The BigBrain Tech takes pride in spearheading cutting-edge initiatives in education and professional
                                growth, specializing in high-demand skill sets. As the leading destination for comprehensive training, talent
                                acquisition, and career transitions, we foster an inclusive community of ambitious professionals who
                                are actively shaping their career paths. Our commitment is to facilitate individuals in pursuing rewarding
                                careers that align with their passions and ambitions, enabling them to flourish and make a meaningful
                                impact in their chosen industries.
                            </p>

                        </div>
                        <div className="w-full lg:w-2/12 mb-8">
                            <h4 className="text-lg font-bold mb-4">Company</h4>
                            <ul className="text-black">
                                <li><Link to="/about-us">About</Link></li>
                                <li><Link to="/Support">Support</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/Questions">FAQ&apos;s</Link></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12">
                            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    <a href="tel:+15714600670">(571)-460-0670</a>
                                </div>
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-envelope mr-2"></i>
                                    <a href="mailto:info@thebigbraintech.com">info@thebigbraintech.com</a>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <p>Boston, MA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-8">
                        <ul className="flex space-x-4">
                            <li><a href="https://www.facebook.com/" className="text-blue-500"><FontAwesomeIcon icon={faSquareFacebook} /> Facebook</a></li>
                            <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den" className="text-blue-500"><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</a></li>
                            <li><a href="https://www.instagram.com/" className="text-blue-500"><FontAwesomeIcon icon={faSquareInstagram} /> Instagram</a></li>
                            <li><a href="https://www.linkedin.com/" className="text-blue-500"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="bg-gray-200 py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 The BigBrain Tech All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="http://thebigbraintech.com/" className="text-blue-500">Regulatory Information</a>
                        <a href="https://www.termsfeed.com/live/885853a7-633b-4aa6-8759-ba647a08d9f8" className="text-blue-500">EEO Statement and Legal Notices</a>
                        <p className="text-end">Made with <i className="fas fa-heart text-red-500"></i> in USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
