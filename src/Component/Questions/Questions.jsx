import React from "react";
import Navbar from '../Homepage/Navbar/Navbar'
import Footer from "../Homepage/Footer/Footer";
import ContactUs from "../ContactForm/ContactUs";

export default function FaqSection() {
    return (
        <div>
            <Navbar/>

            <div className="container-fluid p-10 m-10 mx-auto px-4">
                <section>
                    <h3 className="text-center mb-4 pb-2 text-yellow-500 font-bold text-4xl">FAQ</h3>
                    <p className="text-center mb-5">
                        Find the answers for the most frequently asked questions below
                    </p>

                    <div className="flex flex-wrap text-gray-700 bg-gray-100 p-3">
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i>
                                Why is this coding bootcamp relevant today?
                            </h6>
                            <p>
                                Every company, not only the big tech giants in Silicon Valley, is
                                transforming into a technology-focused entity. As a result, the
                                demand for skilled software engineers who can tackle challenges
                                with innovative solutions and lasting results is continuously
                                increasing. A study by Harvey Nash and KPMG revealed that 67% of
                                tech leaders faced difficulties in hiring the right talent.
                                Regardless of your current profession, there are plenty of
                                opportunities to build a rewarding and secure career in this
                                evolving landscape.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> Will I earn a
                                certificate?
                            </h6>
                            <p>
                                Absolutely! After successfully completing this course, you will be
                                awarded a certified completion certificate. Many The Bigbrain Tech alumni
                                proudly showcase their course certificate to showcase their skills
                                to prospective employers, including their LinkedIn profiles. The Bigbrain Tech&lsquo;s
                                tech programs have garnered high esteem from numerous leading
                                employers who actively collaborate with us in shaping our
                                curriculum and even entrust us with training their own teams.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> Are there any
                                prerequisites for this coding bootcamp?
                            </h6>
                            <p>
                                This program is designed to be accessible for beginners, and there
                                are no specific prerequisites required. However, some students may
                                have prior experience in self-learning or have worked in tech
                                startups or related roles. Whether you are entirely new to the
                                field or seeking to solidify your existing knowledge, our
                                curriculum is tailored to help you become proficient in the
                                programming languages, frameworks, and libraries that are highly
                                sought after by today&apos;s employers. By mastering these skills,
                                you&apos;ll be well-equipped to embark on a rewarding career in
                                the tech industry. Our Admissions team is available to have a
                                conversation about your background and learning objectives to
                                determine if this coding bootcamp aligns well with your needs and
                                aspirations.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> What does my tuition
                                cover for this coding bootcamp?
                            </h6>
                            <p>
                                <strong>
                                    Immersive students at The Bigbrain Tech can look forward to a range of
                                    valuable benefits, including:
                                </strong>
                                <br></br>
                                <ul>
                                    <li><strong>Expert Guidance</strong>: Acquire the skills to become a junior
                                        full-stack
                                        web developer.
                                    </li>
                                    <li><strong>Self-Paced Pre-Work</strong>: Understand software engineering
                                        fundamentals
                                        before class starts.
                                    </li>
                                    <li><strong>Comprehensive Coursework</strong>: Access lesson decks and project
                                        toolkits
                                        for continuous learning.
                                    </li>
                                    <li><strong>Project Portfolio</strong>: Create professional-grade projects to
                                        showcase
                                        your abilities.
                                    </li>
                                    <li><strong>Personalized Support</strong>: Receive feedback and assistance from
                                        instructors and teaching assistants.
                                    </li>
                                    <li><strong>Career Services</strong>: Get help with job search, technical
                                        challenges,
                                        and salary negotiations.
                                    </li>
                                    <li><strong>Interview Prep</strong>: Benefit from resume reviews, mock interviews,
                                        and
                                        whiteboarding practice.
                                    </li>
                                    <li><strong>Alumni Benefits</strong>: Enjoy discounts, networking events, and career
                                        workshops.
                                    </li>
                                    <li><strong>Course Certificate</strong>: Earn a certificate to showcase your skills
                                        on
                                        LinkedIn.
                                    </li>
                                    <li><strong>Professional Network</strong>: Connect with instructors and peers for
                                        ongoing support.
                                    </li>
                                </ul>

                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> What projects will I
                                work on during this coding bootcamp?
                            </h6>
                            <p>
                                During your capstone project, you will engage in a team
                                dynamic, working collaboratively to develop and deploy a
                                full-stack application that meets specific requirements. The
                                project will involve integrating functionalities from a
                                third-party API to enhance its capabilities. Throughout the
                                Immersive program, you will curate a portfolio consisting of
                                individual and group projects, carefully designed to reinforce the
                                concepts learned in each unit. These projects will provide you
                                with valuable hands-on experience in building and deploying
                                front-end and full-stack applications using various programming
                                languages and frameworks.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> What do career services
                                look like for students?
                            </h6>
                            <p>
                                Our remote Outcomes programming is designed to provide the highest
                                level of quality and commitment. We
                                maintain the same philosophy, promises, and expectations for our
                                students. Through virtual sessions such as day-in-the-life talks, hiring panel
                                discussions, guest speakers, and more, you&apos;ll gain valuable
                                insights into the industry and get an insider&apos;s look at the
                                tech world. As a online student, you&apos;ll have the advantage of
                                working individually with your dedicated career coach. They will
                                assist you in understanding your local job market, identifying
                                relevant job opportunities, and connecting with the local tech
                                community. Our goal is to provide you with the comprehensive
                                support you need to pursue and secure a software engineering role
                                successfully. For further information on the specific support and
                                resources you&apos;ll receive on your journey to landing a
                                software engineering position, our Admissions team is available to
                                provide more details.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> Why should Young ones take
                                this bootcamp?
                            </h6>
                            <p>
                                The Bigbrain Tech&apos;s Early Learner program is designed to give young minds a head
                                start in
                                the tech industry. By joining this bootcamp, you&apos;ll gain valuable skills in
                                programming and
                                web development, setting a strong foundation for your future career. Our engaging and
                                hands-on curriculum is tailored to young learners, ensuring that you understand key
                                concepts
                                while having fun. Plus, you&apos;ll get to work on real-world projects, receive guidance
                                from
                                expert instructors, and connect with a community of like-minded peers. Whether
                                you&apos;re
                                looking to explore a potential career path or simply want to enhance your tech skills,
                                this
                                bootcamp provides the perfect opportunity to grow and succeed.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> Why would I choose to
                                learn in a online format?
                            </h6>
                            <p>
                                We understand that committing to full-time learning can be
                                challenging, especially with a busy schedule. If you&apos;re
                                passionate about making a career change but cannot accommodate
                                daytime commitments, we have the perfect solution for you. Join
                                our Flex format, where you can attend classes in the evenings and
                                on weekends. This part-time course spans 16 weeks, allowing you to
                                balance your existing commitments while still experiencing the
                                top-notch training that The Bigbrain Tech is renowned for.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4 p-2">
                            <h6 className="mb-3 text-yellow-500 text-xl">
                                <i className="fa-solid fa-circle-question"></i> What are my financing
                                options for this coding bootcamp?
                            </h6>
                            <p>
                                We offer a variety of different financing options, including
                                installment plans and tuition discounts
                                so you can focus on what counts — your education. Speak with our
                                Admissions team to learn more and find the best fit for you and
                                your finances.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <ContactUs/>
            <Footer/>
        </div>
    );
}
