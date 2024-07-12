// src/pages/Press.jsx
import React from "react";
import {motion} from "framer-motion";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const articles = [
    {
        title: "Press Article 1",
        summary: "Summary of press article 1.",
        link: "#",
    },
    {
        title: "Press Article 2",
        summary: "Summary of press article 2.",
        link: "#",
    },
    {
        title: "Press Article 3",
        summary: "Summary of press article 3.",
        link: "#",
    },
];

const Press = () => {
    return (
        <div>
            <section className="pb-4 mb-5">
                <Navigation/>
            </section>

            <div className="min-h-40 bg-gray-100 pt-16 mt-16">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Press</h1>
                    <p className="text-gray-600">Latest news and press releases</p>
                </header>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                whileHover={{scale: 1.05}}
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 mb-4">{article.summary}</p>
                                <a
                                    href={article.link}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Read more
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default Press;
