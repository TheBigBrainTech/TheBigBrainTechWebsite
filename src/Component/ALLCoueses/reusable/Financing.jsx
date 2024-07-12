import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import FinanceBg from '../../../Assets/images/character/FinancePageBG.png';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAward,
    faBookOpen,
    faBriefcase,
    faChalkboardTeacher,
    faCheckCircle,
    faChevronDown,
    faCoins,
    faGraduationCap,
    faHandsHelping,
    faIndustry,
    faLandmark,
    faLaptopCode,
    faLifeRing,
    faMoneyBill,
    faNetworkWired,
    faPen,
    faPhone,
    faQuestionCircle,
    faUserGraduate,
    faUsers
} from '@fortawesome/free-solid-svg-icons';

const FinancingOptions = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <>
            <section>
                <Navigation/>
            </section>

            {/* Hero Section */}
            <section className="relative h-[800px] bg-cover bg-center mb-12" style={{
                backgroundImage: `url(${FinanceBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="absolute inset-0 bg-opacity-50 flex items-center">
                    <div className="max-w-4xl mx-auto text-right p-6">
                        <h1 className="text-4xl font-bold text-gray-600 mb-4">Flexible Financing Options</h1>
                        <h1 className="text-4xl font-bold text-gray-600 mb-4">Invest In Your Future</h1>
                        <p className="text-lg text-gray-500 mb-4">Choose the best payment plan for your needs and start
                            learning today!</p>
                        <Link to="/enroll">
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400">Apply
                                Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto my-8 p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8"><FontAwesomeIcon icon={faLandmark}
                                                                                                   className="mr-2"/>Financing
                    Options</h2>

                {/* Individual Learners */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="mb-12"
                >
                    <h1 className="text-2xl font-semibold text-blue-600 mb-4"><FontAwesomeIcon icon={faUsers}
                                                                                               className="mr-2"/>Individual
                        Learners</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {course: 'FrontEnd Development Program', amount: 2000},
                            {course: 'FullStack Development Program', amount: 2500},
                            {course: 'QA Automation Program', amount: 1500}
                        ].map((course, index) => (
                            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md cursor-pointer">
                                <h3 className="text-xl font-semibold mb-4">{course.course}</h3>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleExpand(index * 2 + 1)}
                                    onKeyDown={(e) => e.key === 'Enter' && toggleExpand(index * 2 + 1)}
                                >
                                    <h4 className="text-xl font-semibold mb-4"><FontAwesomeIcon icon={faMoneyBill}
                                                                                                className="mr-2"/>Pay in
                                        Full <FontAwesomeIcon icon={faChevronDown}/></h4>
                                    <p className="text-lg mb-4">Get the best value by paying in full.</p>
                                    <p className="text-lg font-bold">${course.amount}</p>
                                    {expanded === index * 2 + 1 && (
                                        <div className="mt-4">
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Enjoy
                                                a one-time payment option with one easy payment.</p>
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>No
                                                Interest no extra fees.</p>
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Enhanced
                                                Commitment and Motivation</p>
                                            <Link to="/enroll">
                                                <button
                                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Enroll
                                                    Now
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleExpand(index * 2 + 2)}
                                    onKeyDown={(e) => e.key === 'Enter' && toggleExpand(index * 2 + 2)}
                                >
                                    <h4 className="text-xl font-semibold mb-4"><FontAwesomeIcon icon={faCoins}
                                                                                                className="mr-2"/>Pay in
                                        Installments <FontAwesomeIcon icon={faChevronDown}/></h4>
                                    <p className="text-lg mb-4">Spread the cost.</p>
                                    <p className="text-lg font-bold">Select from 4 or 8 Easy Payments</p>
                                    {expanded === index * 2 + 2 && (
                                        <div className="mt-4">
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Split
                                                your payments with no interest.</p>
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Improve
                                                Cash Flow Management</p>
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Make
                                                it more accessible by flexible payment options</p>
                                            <Link to="/enroll">
                                                <button
                                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Enroll
                                                    Now
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Early Learners */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="mb-12"
                >
                    <h1 className="text-2xl font-semibold text-blue-600 mb-4"><FontAwesomeIcon icon={faUserGraduate}
                                                                                               className="mr-2"/>Early
                        Learners</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {program: 'Early Learners 1', amount: 600},
                            {program: 'Early Learners 2', amount: 700},
                            {program: 'Early Learners 3', amount: 800}
                        ].map((program, index) => (
                            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md cursor-pointer">
                                <h3 className="text-xl font-semibold mb-4">{program.program}</h3>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleExpand(index * 2 + 7)}
                                    onKeyDown={(e) => e.key === 'Enter' && toggleExpand(index * 2 + 7)}
                                >
                                    <h4 className="text-xl font-semibold mb-4"><FontAwesomeIcon icon={faMoneyBill}
                                                                                                className="mr-2"/>Pay in
                                        Full <FontAwesomeIcon icon={faChevronDown}/></h4>
                                    <p className="text-lg mb-4">Get the best value by paying in full.</p>
                                    <p className="text-lg font-bold">${program.amount}</p>
                                    {expanded === index * 2 + 7 && (
                                        <div className="mt-4">
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Enjoy
                                                a one-time payment option with no extra fees.</p>
                                            <Link to="/enroll">
                                                <button
                                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Enroll
                                                    Now
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => toggleExpand(index * 2 + 8)}
                                    onKeyDown={(e) => e.key === 'Enter' && toggleExpand(index * 2 + 8)}
                                >
                                    <h4 className="text-xl font-semibold mb-4"><FontAwesomeIcon icon={faCoins}
                                                                                                className="mr-2"/>Pay in
                                        Installments <FontAwesomeIcon icon={faChevronDown}/></h4>
                                    <p className="text-lg mb-4">Spread the cost over six months.</p>
                                    <p className="text-lg font-bold">Select Form 2 or 4 Easy Payments</p>
                                    {expanded === index * 2 + 8 && (
                                        <div className="mt-4">
                                            <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                    className="text-green-500 mr-2"/>Split
                                                your payments over six months with no interest.</p>
                                            <Link to="/enroll">
                                                <button
                                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Enroll
                                                    Now
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Discounts and Promotions */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className="mb-12"
                >
                    <h1 className="text-2xl font-semibold text-blue-600 mb-4">Discounts and Promotions</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Women in Tech Discount',
                                description: 'Supporting women in tech with a special discount.',
                                discount: '10% off'
                            },
                            {
                                title: 'Diversity Discount',
                                description: 'Promoting diversity in tech with this discount.',
                                discount: '15% off'
                            },
                            {
                                title: 'Military Discount',
                                description: 'Honoring our military with a special discount.',
                                discount: '20% off'
                            },
                            {
                                title: 'Smart Student Discount',
                                description: 'Rewarding early learners with this discount.',
                                discount: '10% off'
                            },
                            {
                                title: 'Referral Discount',
                                description: 'Refer a friend and save on your total cost.',
                                discount: '15% off'
                            },
                            {
                                title: 'Early Bird Discount',
                                description: 'Sign up early and save on the total cost.',
                                discount: '10% off'
                            }
                        ].map((promo, index) => (
                            <div key={index} className="p-6 bg-green-100 rounded-lg shadow-md cursor-pointer">
                                <h3 className="text-xl font-semibold mb-4">{promo.title}</h3>
                                <p className="text-lg mb-4">{promo.description}</p>
                                <p className="text-lg font-bold">{promo.discount}</p>
                                {expanded === index + 15 && (
                                    <div className="mt-4">
                                        <p className="text-lg"><FontAwesomeIcon icon={faCheckCircle}
                                                                                className="text-green-500 mr-2"/>Take
                                            advantage of this limited-time offer.</p>
                                        <Link to="/enroll">
                                            <button
                                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Enroll
                                                Now
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            {/* what is included in program cost*/}
            <div className="max-w-6xl mx-auto my-8 p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">What is included in program cost?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Individual feedback and guidance from experienced
                            instructors and TAs plus small class sizes.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faBriefcase} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Tech Residency to help you get on the job training, before
                            the job.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faBookOpen} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Comprehensive curriculum and expert instruction designed to
                            take you from a beginner to industry-ready in a matter of weeks.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faHandsHelping} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Dedicated Student Relation Managers to help you combat
                            imposter syndrome, improve time-management skills, and be successful throughout the
                            program.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">A professional-quality portfolio of real-world projects
                            that showcases your technical skills and demonstrates your abilities to potential
                            employers.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faLifeRing} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Lifetime career support after graduation to help you
                            navigate your job search, from application to salary negotiation, and more.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faIndustry} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Technical interview training and preparation to help you
                            succeed in technical interviews and demonstrate your skills and abilities.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faAward} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Digital Credentials and a certificate of completion to
                            showcase your new skill set on LinkedIn.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faNetworkWired} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Access to our employer and alumni network to connect with a
                            community of professionals and gain valuable resources for networking, career advice, and
                            job opportunities.</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 mr-4 text-2xl"/>
                        <p className="text-lg font-semibold">Continuing education and workshops post-graduation to help
                            you stay up-to-date with the latest industry trends and skills.</p>
                    </div>
                </div>
            </div>
            {/*when you finalize*/}
            <div className="max-w-6xl mx-auto my-8 p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">When to Finalize Your Options</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faBookOpen} className="text-blue-600 mr-4 text-2xl mt-5"/>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">1. EXPLORE OUR CAREER PATHS AND COURSES:</h3>
                            <p className="text-lg">It’s important to explore our different career tracks and see which
                                path and learning option interests you the most!</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faPen} className="text-blue-600 mr-4 text-2xl mt-5"/>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">2. APPLICATION AND BASIC SKILLS ASSESSMENT:</h3>
                            <p className="text-lg">Submit your application – it takes less than 5 minutes. After you
                                apply you will be sent a basic skills assessment. Our 22-question assessment is meant to
                                test your cognitive skills. Don’t stress! We want to know if you can think like a
                                programmer, if you can we will take it from there!</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-600 mr-4 text-2xl mt-5"/>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">3. SCHEDULE AN ADMISSIONS CALL:</h3>
                            <p className="text-lg">Our admissions advisors are always ready to help you explore
                                financing options, and to guide you toward the financial plan that best fits your
                                needs.</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mr-4 text-2xl mt-5"/>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">4. SECURE YOUR SEAT AND ENROLL:</h3>
                            <p className="text-lg">Finalize your payment plan to secure your seat! Once you’re enrolled,
                                you will gain instant access to our preparatory work, slack channels, and 1:1 support
                                prior to class.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 mr-5">Enroll
                        Now
                    </button>
                    <button
                        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400">Contact
                        Admissions Advisor
                    </button>
                </div>

            </div>
            <div>
                <div className="max-w-6xl mx-auto my-8 p-12 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-8"><FontAwesomeIcon
                        icon={faQuestionCircle} className="mr-2"/>Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-1 gap-8">
                        {[
                            {
                                question: "What financing options are available?",
                                answer: "We offer a variety of financing options including paying in full, installment plans, and discounts for eligible students. Our admissions advisors can help you choose the best plan."
                            },
                            {
                                question: "How do I apply for a course?",
                                answer: "You can apply by filling out our application form online. After submitting your application, you will receive a basic skills assessment to complete."
                            },
                            {
                                question: "What is the basic skills assessment?",
                                answer: "The assessment is a 22-question test designed to evaluate your cognitive skills and ability to think like a programmer. It helps us determine your readiness for the program.(Not Mandatory)"
                            },
                            {
                                question: "Can I get a refund if I change my mind?",
                                answer: "Yes, we offer a full refund if you drop the class within the first week. Partial refunds are available if you drop within the first 50% of the program duration. Please review our refund policy for more details."
                            },
                            {
                                question: "What support is available during the course?",
                                answer: "We provide individual feedback and guidance from experienced instructors and TAs, small class sizes, dedicated Student Relation Managers, and lifetime career support."
                            },
                            {
                                question: "Do you offer job placement assistance?",
                                answer: "Yes, we offer lifetime career support including job search assistance, resume building, interview preparation, and access to our employer and alumni network."
                            },
                            {
                                question: "What happens after I complete the course?",
                                answer: "Upon completion, you will receive a certificate of completion. You will also have access to workshops to keep your skills up-to-date."
                            },
                            {
                                question: "How do I schedule an admissions call?",
                                answer: "You can schedule an admissions call through our website. Our advisors are ready to help you explore financing options and guide you through the enrollment process."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                                <p className="text-lg">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {/* Refund Policy and Terms of Service */}
            <div className="max-w-6xl mx-auto my-8 p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Refund Policy and Terms of
                    Service</h2>
                <p className="text-lg mb-4">
                    Our refund policy is designed to ensure customer satisfaction while also maintaining fairness and
                    consistency. Please read the terms carefully before making a payment.
                </p>
                <p className="text-lg mb-4">
                    If you have any questions about our refund policy or terms of service, feel free to contact our
                    support team for more information.
                </p>
                <div className="text-lg mb-4">
                    <h2>Full Refund</h2>
                    <p>A full refund will be issued if the class is dropped within the first week of the start date.</p>
                    <p>The full refund applies to the course fee only and does not include any administrative or
                        enrollment fees, which are non-refundable.</p>
                    <p>For Early learners Program: Full refund will be only made if the class is dropped/ canceled by
                        the consent of the parent/ guardian in written email</p>
                    <p>Early Learners refund will only be applicable for first 4 days of classes</p>

                    <h2>Partial Refund</h2>
                    <p>A partial refund will be issued if the class is dropped within the first 50% of the bootcamp
                        duration.</p>
                    <p>The partial refund amount will be calculated based on the number of classes attended and will
                        exclude the enrollment and administrative fees, which are non-refundable.</p>

                    <h2>Installment Payments</h2>
                    <p>Payments made in installments are subject to a 20% processing fee.</p>
                    <p>The 20% processing fee will be deducted from the refund amount before the refund is
                        processed.</p>
                    <p>Refund will be issued only on the remaining tuition if paid in advanced for future classes.
                        Refund will not be issued for the classes already taken. </p>

                    <h2>Non-Refundable Fees</h2>
                    <p>Enrollment fees are non-refundable under any circumstances.</p>
                    <p>Administrative fees, including any costs associated with registration and course materials, are
                        non-refundable.</p>

                    <h2>Conditions for Refund</h2>
                    <ul className="list-disc list-inside">
                        <li>Refund requests must be submitted in writing via email to our support team.</li>
                        <li>Refunds will be processed within 45 days of the written request.</li>
                        <li>No refunds will be issued if the class is dropped after the first 50% of the bootcamp
                            duration.
                        </li>
                        <li>Refunds will be issued to the original method of payment only.</li>
                    </ul>

                    <h2>Special Circumstances</h2>
                    <p>In cases of medical emergencies or other extraordinary circumstances, requests for exceptions to
                        the refund policy will be considered on a case-by-case basis. Documentation may be required.</p>
                    <p>If the bootcamp is canceled by the provider, a full refund, including enrollment and
                        administrative fees, will be issued to all enrolled students.</p>

                    <h2>Dispute Resolution</h2>
                    <p>Any disputes regarding refunds will be handled in accordance with our dispute resolution policy,
                        which includes mediation and arbitration processes.</p>

                    <h2>Additional Notes</h2>
                    <ul className="list-disc list-inside">
                        <li>Students are encouraged to review the course syllabus and schedule before enrolling to
                            ensure it meets their needs and availability.
                        </li>
                        <li>By enrolling in the bootcamp, students agree to this refund policy and acknowledge that they
                            have read and understood its terms and conditions.
                        </li>
                        <li>No refund shall be made due to lack of attendance of student.</li>
                        <li>California resident student shall have the right to cancel the agreement and receive a
                            refund pursuant before the first lesson and materials are received. Cancellation is
                            effective on the date written notice of cancellation is sent. If the institution completed
                            the first lesson and materials before an effective cancellation notice was received, the
                            institution shall make a partial refund within 45 days after the student&apos;s Cancellation
                            notice.
                        </li>
                        <li>Students are granted a pro-rated refund based on the date they signed their enrollment
                            agreement. It is calculated based on the number of weeks that have passed since the date on
                            the enrollment agreement (not on hours studied, credits obtained, etc.) and regardless of
                            time taken off the program (for example: if the student was not studying during the time
                            that passed or if they were on a leave of absence, the weeks are still counted as time since
                            the date of enrollment). Refunds are counted against the number of calendar weeks that have
                            passed since the date on the Enrollment Agreement and regardless of any other factors.
                        </li>
                        <li>If the Student obtains a loan to pay for an educational program, the Student will have the
                            responsibility to repay the full amount of the loan plus interest, less the amount of any
                            refund.
                        </li>
                        <li>Written Notice: To cancel the bootcamp enrollment, students must send an email to <a
                            style={{color: "blue"}}
                            href="mailto:admissions@thebigbraintech.com">admissions@thebigbraintech.com</a>.
                        </li>
                        <p className="pt-3 text-gray-500 text-center">If you have any questions or need further
                            assistance regarding our refund policy, please contact our support team at <a
                                style={{color: "blue"}}
                                href="mailto:admissions@thebigbraintech.com">admissions@thebigbraintech.com</a>.</p>
                    </ul>
                    <p className="pt-3 text-gray-500 text-center">Visit our <a style={{color: "blue"}}
                                                                               href="/termsofservice">Terms Of
                        Service</a> here.</p>
                </div>
            </div>

            <section>
                <Footer/>
            </section>
        </>
    );
};

export default FinancingOptions;
