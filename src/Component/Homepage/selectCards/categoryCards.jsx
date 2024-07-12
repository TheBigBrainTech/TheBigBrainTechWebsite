import React from 'react';
import {motion} from 'framer-motion';

export default function CategoryCards() {
    const cardVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
        hover: {scale: 1.09}
    };

    return (
        <div className="selection-cards">
            <div className="container mx-auto">
                <section className="text-center">
                    <h1 className="text-gray-600 text-4xl text-center">Make it possible</h1>
                    <h4 className="text-gray-600 text-xl text-center">Pivot your career in IT</h4>
                </section>
                <div className="flex justify-center items-center p-5 space-x-4">
                    <motion.div
                        className="card mb-4 drop-shadow-2xl w-1/3 mx-2 min-h-40"
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={cardVariants}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <div className="card-body drop-shadow-xl text-center bg-gray-200 rounded-lg min-h-65">
                            <h5 className="card-title text-gray-500 text-2xl pt-4">INDIVIDUALS</h5>
                            <p className="card-text text-gray-500">Get ahead with expert-led training curated for
                                individuals</p>
                            <div className="flex justify-center items-center">
                                <div className="pb-5">
                                    <button type="button"
                                            className="btn btn-sm bg-yellow-500 text-white py-2 px-4 mt-10 rounded">
                                        Browse Courses
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="card mb-4 shadow-sm w-1/3 mx-2 min-h-40"
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={cardVariants}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <div className="card-body drop-shadow-xl text-center bg-gray-200 rounded-lg min-h-65">
                            <h5 className="card-title text-gray-500 text-2xl pt-4">EARLY LEARNERS PROGRAM</h5>
                            <p className="card-text text-gray-500">Empower them with valuable skills and confidence for
                                the future!</p>
                            <div className="flex justify-center items-center">
                                <div className="pb-5">
                                    <button type="button"
                                            className="btn btn-sm bg-yellow-500 text-white py-2 px-4 mt-10 rounded">
                                        Browse Courses
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="card mb-4 shadow-sm w-1/3 mx-2 min-h-40"
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        variants={cardVariants}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <div className="card-body drop-shadow-xl text-center bg-gray-200 rounded-lg min-h-65">
                            <h5 className="card-title text-gray-500 text-2xl pt-4">CORPORATIONS</h5>
                            <p className="card-text text-gray-500">Train your workforce with intensive training in
                                Latest TechStack</p>
                            <div className="flex justify-center items-center">
                                <div className="pb-5">
                                    <button type="button"
                                            className="btn btn-sm bg-yellow-500 text-white py-2 px-4 mt-10 rounded">
                                        Find Solution
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

