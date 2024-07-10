import React, { useState } from "react";
import questionData from "../../../Assets/Data/FAQ.json";

export default function StaticFaqSection() {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        if (index === expandedQuestion) {
            setExpandedQuestion(null); // Collapse the expanded question if clicked again
        } else {
            setExpandedQuestion(index);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <section>
                <h3 className="text-center mb-4 pb-2 text-yellow-500 font-bold">FAQ</h3>
                <p className="text-center mb-5">
                    Find the answers for the most frequently asked questions below
                </p>

                <div className="text-dark text-center bg-gray-100 p-6 rounded-lg shadow-md">
                    {questionData.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div>
                                <button
                                    className="mb-1 text-yellow-500 cursor-pointer flex items-center justify-center w-full text-left"
                                    onClick={() => handleQuestionClick(index)}
                                    style={{ background: "none", border: "none", padding: 0 }}
                                >
                                    <i className="fa-solid fa-circle-question mr-2"></i> {item.question}
                                    <i className="fa-solid fa-chevron-down p-2"></i>
                                </button>
                            </div>
                            {expandedQuestion === index && (
                                <div className="mt-2 text-gray-700">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
