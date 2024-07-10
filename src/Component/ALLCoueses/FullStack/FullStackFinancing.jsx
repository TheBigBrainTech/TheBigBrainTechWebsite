import React, { useState } from "react";

const FullStackFinancing = () => {
    const [key, setKey] = useState("tuition");

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg">
                <div className="flex justify-between items-center border-b border-gray-200 p-4">
                    <button
                        className={`px-4 py-2 ${
                            key === "tuition" ? "text-blue-500" : "text-gray-600"
                        }`}
                        onClick={() => setKey("tuition")}
                    >
                        Pay In Full
                    </button>
                    <button
                        className={`px-4 py-2 ${
                            key === "financing" ? "text-blue-500" : "text-gray-600"
                        }`}
                        onClick={() => setKey("financing")}
                    >
                        Financing Option
                    </button>
                    <button
                        className={`px-4 py-2 ${
                            key === "scholarship" ? "text-blue-500" : "text-gray-600"
                        }`}
                        onClick={() => setKey("scholarship")}
                    >
                        Diversity Program
                    </button>
                    <button
                        className={`px-4 py-2 ${
                            key === "college" ? "text-blue-500" : "text-gray-600"
                        }`}
                        onClick={() => setKey("college")}
                    >
                        Student Discount
                    </button>
                </div>
                <div className="p-4">
                    {key === "tuition" && (
                        <div>
                            <h1 className="text-2xl font-bold">Pay In Full Tuition</h1>
                            <h2 className="text-xl font-bold">Tuition Fee: $2,500.00</h2>
                            <h2 className="text-xl font-bold">Enrollment Fee: $100.00</h2>
                            <h2 className="text-xl font-bold">Total: $2600.00</h2>
                            <h5 className="text-gray-500">
                                <sup>*</sup>Currently only available in select U.S. markets.
                            </h5>
                            <p className="mt-4 text-gray-400">
                                <sup>*</sup>The $100 enrollment fee is NOT a part of your overall tuition.<br></br>
                                Enrollment Fee is non-refundable and due at the time of enrollment.<br></br>
                                Full tuition is due 1 week prior to your start date of your bootcamp.
                            </p>
                        </div>
                    )}
                    {key === "financing" && (
                        <div>
                            <h1 className="text-2xl font-bold">Installment Plan</h1>
                            <h2 className="text-xl font-bold">Tuition Fee: $2,500.00</h2>
                            <h2 className="text-xl font-bold">Enrollment Fee: $100.00</h2>
                            <h2 className="text-xl font-bold mt-4">Option 1</h2>
                            <p>Pay in 8 installments of - $312.50</p>
                            <h2 className="text-xl font-bold mt-4">Option 2</h2>
                            <p>Pay in 4 installments of - $625.00</p>
                            <p className="text-gray-500">
                                0% Interest if paid within 12 Weeks of starting Bootcamp
                                <sup>*</sup>
                            </p>
                            <p className="mt-4 text-gray-400">
                                <sup>*</sup>The $100 enrollment fee is NOT a part of your overall tuition.<br></br>
                                Enrollment Fee is non-refundable and due at the time of enrollment.<br></br>
                                Tuition installment is due every start of the week prior to your session time of your bootcamp.
                            </p>
                        </div>
                    )}
                    {key === "scholarship" && (
                        <div>
                            <h1 className="text-2xl font-bold">Diversity Program</h1>
                            <h3 className="text-lg font-bold mt-4">
                                Women in Tech Scholarship ($500)
                            </h3>
                            <p>
                                For the SHEros who require financial assistance to launch their
                                career paths in tech.
                            </p>
                            <h3 className="text-lg font-bold mt-4">
                                Diversity Scholarship ($250)
                            </h3>
                            <p>
                                To support and cheer on those within underrepresented groups
                                within the tech industry, including, but not limited to Black,
                                Hispanic, Asian, Indigenous, and LGBTQIA+ communities pursuing
                                technology careers.
                            </p>
                            <h3 className="text-lg font-bold mt-4">
                                Military Heroes Scholarship ($500)
                            </h3>
                            <p>
                                Honoring our military veterans and current service members
                                transitioning into technology. A copy of DD-214, DD-256, or
                                NGB-22 is required with the application.
                            </p>
                        </div>
                    )}
                    {key === "college" && (
                        <div>
                            <h1 className="text-2xl font-bold">College Students Program</h1>
                            <h3 className="text-lg font-bold mt-4">Special Discount for College Students</h3>
                            <p>
                                We offer a special discount of $500 for current college students. To qualify, please provide a valid student ID and proof of enrollment.
                            </p>
                            <h3 className="text-lg font-bold mt-4">How to Apply:</h3>
                            <p>
                                Submit your application along with a copy of your student ID and current enrollment status. Once verified, you will receive the discount on your tuition fee.
                            </p>
                            <p className="text-gray-500 mt-4">
                                <sup>*</sup>The discount is only applicable for full-time college students and cannot be combined with other scholarships or financial aids.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FullStackFinancing;
