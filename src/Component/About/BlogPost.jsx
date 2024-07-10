import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const posts = [
    {
        id: '1',
        title: "The Future of the IT Industry",
        content: "Discover the latest trends and technologies shaping the future of the IT industry. From AI to blockchain, explore what's next. The IT industry is evolving rapidly with advancements in artificial intelligence, blockchain, and cloud computing. These technologies are transforming businesses, enhancing security, and creating new job opportunities. As companies continue to adopt these innovations, the demand for skilled IT professionals is higher than ever.",
        date: "June 20, 2024",
        author: "John Doe"
    },
    {
        id: '2',
        title: "Why Bootcamp Training is a Game-Changer",
        content: "Learn how bootcamp training can accelerate your career in tech. Find out why intensive, hands-on learning is the key to success. Bootcamp training offers a fast-paced, immersive learning experience that prepares students for real-world tech jobs. With a focus on practical skills and projects, bootcamps provide the knowledge and experience needed to succeed in a competitive job market. Many bootcamp graduates find employment in tech roles within months of completing their programs.",
        date: "July 5, 2024",
        author: "Jane Smith"
    },
    {
        id: '3',
        title: "The Benefits of Early Learning in Coding",
        content: "Understand why starting coding at a young age can set you up for a successful career in technology. Read about the long-term benefits. Early exposure to coding helps develop problem-solving skills, logical thinking, and creativity. It prepares young learners for a future in technology, giving them a head start in a competitive field. Coding also teaches persistence and resilience, as students learn to troubleshoot and debug their code.",
        date: "August 1, 2024",
        author: "Emily Johnson"
    }
];

const BlogPost = () => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPost;
