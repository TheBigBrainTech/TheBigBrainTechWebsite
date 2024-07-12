import React from 'react';
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div>
                <section className="pb-20">
                    <Navigation/>
                </section>
                <div>
                    <div
                        className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                            <div className="relative">
                                <div className="absolute">
                                    <div className="">
                                        <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                            Looks like you&apos;ve found the
                                            doorway to the great nothing
                                        </h1>
                                        <p className="my-2 text-gray-800">Sorry about that! Please visit our homepage to
                                            get
                                            where you need to go.</p>
                                        <Link to="/">
                                            <button
                                                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-yellow-500 text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50">Take
                                                me there!
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="FirstError"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://png.pngtree.com/png-vector/20220129/ourmid/pngtree-isolated-2d-vector-illustration-of-home-without-wifi-connection-vector-png-image_44283276.jpg"
                                alt="SecondError"/>
                        </div>
                    </div>
                </div>
                <section className="pt-20">
                    <Footer/>
                </section>
            </div>
        </>
    )
}
export default ErrorPage
