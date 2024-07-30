import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faShoppingCart,
    faUser,
    faUpload,
    faFileInvoiceDollar, faRectangleList, faHandshake, faTableColumns
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
// import Logo from '../../Assets/images/logo/BigBrainTechLogoBlack.png';
import AuthenticatedLayout from "../LoginPage/AuthenticatedLayout";

const Dashboard = () => {
    return (
        <AuthenticatedLayout>
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-yellow-500 text-white">
                <header className="flex items-center justify-between p-6">
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/150" alt="Profile"
                             className="w-16 h-16 rounded-full mr-4"/>
                        <div>
                            <h2 className="text-xl font-bold">Jane Doe</h2>
                        </div>
                    </div>
                </header>
                <nav>
                    <ul>
                        <li className="p-4 hover:bg-yellow-600">
                            <FontAwesomeIcon icon={faTableColumns} className="mr-3"/>
                            <span>Dashboard</span>
                        </li>
                        <li className="p-4 hover:bg-yellow-600">
                            <FontAwesomeIcon icon={faBook} className="mr-3"/>
                            <span>My Courses</span>
                        </li>
                        <li className="p-4 hover:bg-yellow-600">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-3"/>
                            <span>Orders</span>
                        </li>
                        <li className="p-4 hover:bg-yellow-600">
                            <FontAwesomeIcon icon={faUser} className="mr-3"/>
                            <span>Profile Settings</span>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6">

                <section className="mt-8">
                    <motion.div
                        className="bg-white shadow rounded-lg p-6"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3 className="text-2xl font-bold mb-4">To-Do List</h3>
                        <ul>
                        <li className="flex justify-between items-center p-4 border-b">
                                <span>Application</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faRectangleList} className="mr-2" />
                                    Application
                                </button>
                            </li>
                            <li className="flex justify-between items-center p-4 border-b">
                                <span>Payment</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />
                                   Make Payment
                                </button>
                            </li>
                            <li className="flex justify-between items-center p-4 border-b">
                                <span>Admissions Meeting</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                                    Schedule call
                                </button>
                            </li>
                            <li className="flex justify-between items-center p-4">
                                <span>Supporting Documents</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faUpload} className="mr-2" />
                                    Upload Documents
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                </section>
            </main>
        </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
