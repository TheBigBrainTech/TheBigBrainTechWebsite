import React from "react";
import Logo from "../../Assets/images/logo/BigBrainLogoBlue.png";
import loginImg from "../../Assets/images/character/LoginPageBg.png";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div>
            <section>
                <Navigation />
            </section>
            <div className="relative min-h-screen">
                <img src={loginImg} className="w-screen h-[800px]  mt-20" alt="Sign In" />
                <div className="absolute top-0 right-0 mt-16 mr-16 w-full max-w-md">
                    <div className="bg-white p-12 rounded-lg shadow-lg mt-20 mr-20">
                        <div className="flex justify-center mb-6">
                            <button onClick={handleLogoClick} className="focus:outline-none">
                                <img
                                    src={Logo}
                                    alt="Company Logo"
                                    className="w-48"
                                />
                            </button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#!" className="text-sm text-blue-500 hover:text-blue-800">
                                Forgot password?
                            </a>
                        </div>
                        <div className="text-center text-sm mb-2">
                            <p className="text-gray-600">
                                Don&apos;t have an account?{" "}
                                <a href="/login/StudentLogin/StudentRegister" className="text-blue-500 hover:text-blue-800">
                                    Register
                                </a>
                            </p>
                        </div>
                        <div className="text-center mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default StudentLogin;
