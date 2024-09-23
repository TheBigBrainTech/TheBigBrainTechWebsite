import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileInvoiceDollar, faHandshake, faRectangleList, faUpload} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ToDo = () => {
    return (
        <>
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
                                    <FontAwesomeIcon icon={faRectangleList} className="mr-2"/>
                                    Application
                                </button>
                            </li>
                            <li className="flex justify-between items-center p-4 border-b">
                                <span>Payment</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2"/>
                                    Make Payment
                                </button>
                            </li>
                            <li className="flex justify-between items-center p-4 border-b">
                                <span>Admissions Meeting</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faHandshake} className="mr-2"/>
                                    Schedule call
                                </button>
                            </li>
                            <li className="flex justify-between items-center p-4">
                                <span>Supporting Documents</span>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    <FontAwesomeIcon icon={faUpload} className="mr-2"/>
                                    Upload Documents
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                </section>
            </main>
        </>
    )
}
export default ToDo;
