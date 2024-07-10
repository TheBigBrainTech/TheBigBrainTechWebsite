// src/components/FAQList.js
import React from 'react';
import FAQCard from '../reusable/FaqCard';
import {EarlyLearnerFAQ} from "../../../Assets/Data/EarlyLearnerFAQ";

const FAQList = () => {
    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-yellow-400 font-bold text-3xl mb-6 text-center">Your Questions Answered</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                <tr>
                    <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-center">Questions</th>
                </tr>
                </thead>
                <tbody>
                {EarlyLearnerFAQ.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FAQList;
