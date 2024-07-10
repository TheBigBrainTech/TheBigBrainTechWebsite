import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const BlogPage = () => {
    const posts = [
        {
            id: '1',
            title: "The Future of the IT Industry",
            excerpt: "Discover the latest trends and technologies shaping the future of the IT industry. From AI to blockchain, explore what's next.",
            date: "June 20, 2024",
            author: "John Doe"
        },
        {
            id: '2',
            title: "Why Bootcamp Training is a Game-Changer",
            excerpt: "Learn how bootcamp training can accelerate your career in tech. Find out why intensive, hands-on learning is the key to success.",
            date: "July 5, 2024",
            author: "Jane Smith"
        },
        {
            id: '3',
            title: "The Benefits of Early Learning in Coding",
            excerpt: "Understand why starting coding at a young age can set you up for a successful career in technology. Read about the long-term benefits.",
            date: "August 1, 2024",
            author: "Emily Johnson"
        }
    ];

    const cardVariants = {
        offscreen: {
            y: 100
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Blog</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                className="p-8 bg-white rounded-lg shadow-lg"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={cardVariants}
                            >
                                <Link to={`/blog/${post.id}`}>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
