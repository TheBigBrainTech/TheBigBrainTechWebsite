import React from "react";
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from "../Homepage/Footer/Footer";
//import ContactUs from "../ContactForm/ContactUs";

const faqItems = [
    {
        question: "Why is this coding bootcamp relevant today?",
        answer: "Every company, not only the big tech giants in Silicon Valley, is transforming into a technology-focused entity. As a result, the demand for skilled software engineers who can tackle challenges with innovative solutions and lasting results is continuously increasing. A study by Harvey Nash and KPMG revealed that 67% of tech leaders faced difficulties in hiring the right talent. Regardless of your current profession, there are plenty of opportunities to build a rewarding and secure career in this evolving landscape."
    },
    {
        question: "Will I earn a certificate?",
        answer: "Absolutely! After successfully completing this course, you will be awarded a certified completion certificate. Many The Bigbrain Tech alumni proudly showcase their course certificate to showcase their skills to prospective employers, including their LinkedIn profiles. The Bigbrain Tech's tech programs have garnered high esteem from numerous leading employers who actively collaborate with us in shaping our curriculum and even entrust us with training their own teams."
    },
    {
        question: "Are there any prerequisites for this coding bootcamp?",
        answer: "This program is designed to be accessible for beginners, and there are no specific prerequisites required. However, some students may have prior experience in self-learning or have worked in tech startups or related roles. Whether you are entirely new to the field or seeking to solidify your existing knowledge, our curriculum is tailored to help you become proficient in the programming languages, frameworks, and libraries that are highly sought after by today's employers. By mastering these skills, you'll be well-equipped to embark on a rewarding career in the tech industry. Our Admissions team is available to have a conversation about your background and learning objectives to determine if this coding bootcamp aligns well with your needs and aspirations."
    },
    {
        question: "What does my tuition cover for this coding bootcamp?",
        answer: "Immersive students at The Bigbrain Tech can look forward to a range of valuable benefits, including: Expert Guidance to acquire the skills to become a junior full-stack web developer, Self-Paced Pre-Work to understand software engineering fundamentals before class starts, Comprehensive Coursework with access to lesson decks and project toolkits, Project Portfolio to showcase your abilities, Personalized Support from instructors and teaching assistants, Career Services to help with job search and negotiations, Interview Prep including resume reviews and mock interviews, Alumni Benefits such as discounts and networking events, a Course Certificate to showcase your skills on LinkedIn, and a Professional Network to connect with instructors and peers for ongoing support."
    },
    {
        question: "What projects will I work on during this coding bootcamp?",
        answer: "During your capstone project, you will engage in a team dynamic, working collaboratively to develop and deploy a full-stack application that meets specific requirements. The project will involve integrating functionalities from a third-party API to enhance its capabilities. Throughout the Immersive program, you will curate a portfolio consisting of individual and group projects, carefully designed to reinforce the concepts learned in each unit. These projects will provide you with valuable hands-on experience in building and deploying front-end and full-stack applications using various programming languages and frameworks."
    },
    {
        question: "What do career services look like for students?",
        answer: "Our remote Outcomes programming is designed to provide the highest level of quality and commitment. We maintain the same philosophy, promises, and expectations for our students. Through virtual sessions such as day-in-the-life talks, hiring panel discussions, guest speakers, and more, you'll gain valuable insights into the industry and get an insider's look at the tech world. As an online student, you'll have the advantage of working individually with your dedicated career coach. They will assist you in understanding your local job market, identifying relevant job opportunities, and connecting with the local tech community. Our goal is to provide you with the comprehensive support you need to pursue and secure a software engineering role successfully."
    },
    {
        question: "Why should Young ones take this bootcamp?",
        answer: "The Bigbrain Tech's Early Learner program is designed to give young minds a head start in the tech industry. By joining this bootcamp, you'll gain valuable skills in programming and web development, setting a strong foundation for your future career. Our engaging and hands-on curriculum is tailored to young learners, ensuring that you understand key concepts while having fun. Plus, you'll get to work on real-world projects, receive guidance from expert instructors, and connect with a community of like-minded peers. Whether you're looking to explore a potential career path or simply want to enhance your tech skills, this bootcamp provides the perfect opportunity to grow and succeed."
    },
    {
        question: "Why would I choose to learn in an online format?",
        answer: "We understand that committing to full-time learning can be challenging, especially with a busy schedule. If you're passionate about making a career change but cannot accommodate daytime commitments, we have the perfect solution for you. Join our Flex format, where you can attend classes in the evenings and on weekends. This part-time course spans 16 weeks, allowing you to balance your existing commitments while still experiencing the top-notch training that The Bigbrain Tech is renowned for."
    },
    {
        question: "What are my financing options for this coding bootcamp?",
        answer: "We offer a variety of different financing options, including installment plans and tuition discounts so you can focus on what counts — your education. Speak with our Admissions team to learn more and find the best fit for you and your finances."
    }
];

const FaqSection = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-10">
                <section>
                    <h3 className="text-center mb-4 text-yellow-500 font-bold text-4xl">FAQ</h3>
                    <p className="text-center mb-8">
                        Find the answers for the most frequently asked questions below
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {faqItems.map((item, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg">
                                <h6 className="mb-3 text-yellow-500 text-xl flex items-start">
                                    <i className="fas fa-circle-question mr-2 mt-1"></i>
                                    <span>{item.question}</span>
                                </h6>
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            {/*<ContactUs />*/}
            <Footer />
        </div>
    );
};

export default FaqSection;