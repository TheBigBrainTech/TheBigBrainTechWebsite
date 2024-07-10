import React from 'react';
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const TestimonialsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="text-gray-300 pt-16 pb-10" id="reviews">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl font-bold text-gray-500 md:text-4xl">
                            Success Stories
                        </h2>
                    </div>

                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar"
                                     width="400" height="400" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Daniella Chen</p>
                                    <p className="text-sm text-gray-500">Frontend developer</p>
                                    <p className="text-sm text-gray-500">GrubHub</p>
                                </div>
                            </div>
                            <p className="mt-4">The Bigbrain Tech bootcamp provided me with the skills I needed to land
                                my first job as a frontend developer. The instructors were knowledgeable and the
                                curriculum was up-to-date with the latest industry trends.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar"
                                     width="200" height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Jane Williams</p>
                                    <p className="text-sm text-gray-500">Project Manager</p>
                                    <p className="text-sm text-gray-500">IDX</p>
                                </div>
                            </div>
                            <p className="mt-4">This bootcamp was a game-changer for my career. The projects were
                                challenging and practical, which helped me build a strong portfolio that impressed my
                                current employer.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar"
                                     width="200" height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Yanick Wang</p>
                                    <p className="text-sm text-gray-500">Fullstack Developer</p>
                                    <p className="text-sm text-gray-500">Best Buy</p>
                                </div>
                            </div>
                            <p className="mt-4">The Bigbrain Tech bootcamp gave me the confidence to tackle complex
                                coding challenges. The support from instructors and peers was invaluable.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200"
                                     height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Emily Jackson</p>
                                    <p className="text-sm text-gray-500">Mobile Developer</p>
                                    <p className="text-sm text-gray-500">United Health Care</p>
                                </div>
                            </div>
                            <p className="mt-4">I learned so much in such a short time. The curriculum was fast-paced
                                and rigorous, but it prepared me well for my role as a mobile developer.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/men/63.jpg" alt="user avatar" width="200"
                                     height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Andy Woods</p>
                                    <p className="text-sm text-gray-500">QA Automation Engineer</p>
                                    <p className="text-sm text-gray-500">American Airlines</p>
                                </div>
                            </div>
                            <p className="mt-4">The hands-on projects and real-world applications were incredibly
                                valuable. I was able to secure a job shortly after completing the program.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/men/56.jpg" alt="user avatar" width="400"
                                     height="400" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Nikhil Patel</p>
                                    <p className="text-sm text-gray-500">SDET</p>
                                    <p className="text-sm text-gray-500">CVS Health</p>
                                </div>
                            </div>
                            <p className="mt-4">The Bigbrain Tech bootcamp provided a comprehensive and immersive
                                learning experience that was instrumental in my career transition to software
                                development.</p>
                        </div>
                    </div>

                    {/*Kids section****************************************************************************************************************************************/}
                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl font-bold text-gray-500 md:text-4xl">
                            We have some young fans.
                        </h2>
                    </div>
                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://media.istockphoto.com/id/1136418521/photo/junior-high-school-boy-smiles-at-the-camera-while-walking-to-class-in-hallway.jpg?s=1024x1024&w=is&k=20&c=oarW4UdVXDbA2AyqqLkB8gSoIMXhEKGbr9-gXUSMe54=" alt="user avatar"
                                     width="400" height="400" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Van Guerrero</p>
                                    <p className="text-sm text-gray-500">Middle School</p>
                                    <p className="text-sm text-gray-500">Age 14</p>
                                </div>
                            </div>
                            <p className="mt-4">I learned so much in such a short time. The curriculum was fun and engaging, and it prepared me well for my future studies in tech.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://media.istockphoto.com/id/1161222735/photo/female-university-student-holding-a-small-tablet.jpg?s=1024x1024&w=is&k=20&c=iIIJEeZJdujSsrh89P7GOEZw8SZoAnG--3KzOl-pBA8=" alt="user avatar"
                                     width="200" height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Elvira Hansen</p>
                                    <p className="text-sm text-gray-500">high School Junior</p>
                                    <p className="text-sm text-gray-500">Age 16</p>
                                </div>
                            </div>
                            <p className="mt-4">The Bigbrain Tech bootcamp provided a comprehensive and immersive learning experience that was instrumental in my furure career goal to software development.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://media.istockphoto.com/id/1474379095/photo/student-selfie-and-girl-with-a-smile-of-education-building-stairs-with-happiness-for-social.jpg?s=1024x1024&w=is&k=20&c=LgEtse_TqbCIB4KmXTL-ghGMMYJ83H3x4WIqbQBHPDw=" alt="user avatar"
                                     width="200" height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Max Gibbs</p>
                                    <p className="text-sm text-gray-500">college freshmen</p>
                                    <p className="text-sm text-gray-500">Age 18</p>
                                </div>
                            </div>
                            <p className="mt-4">The Bigbrain Tech bootcamp gave me the confidence to tackle complex
                                coding challenges. The support from instructors and peers was invaluable.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://media.istockphoto.com/id/1409086709/photo/head-shot-portrait-student-guy-in-glasses-posing-in-library.jpg?s=1024x1024&w=is&k=20&c=_xR1KSB05tE1r6rfnd6joAB6hav3Mtqs4djBOZBTe3U=" alt="user avatar" width="200"
                                     height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Roderick Pratt</p>
                                    <p className="text-sm text-gray-500">High School Senior</p>
                                    <p className="text-sm text-gray-500">Age 17</p>
                                </div>
                            </div>
                            <p className="mt-4">The hands-on projects and real-world applications were incredibly valuable. I now feel ready to pursue a career in tech.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=1024x1024&w=is&k=20&c=JOfR9lDsIGKqZEy0RFu1eNAoNjqCDwRv61Lx9r_upMo="
                                     alt="user avatar" width="200"
                                     height="200" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">William Moody</p>
                                    <p className="text-sm text-gray-500">College Freshman</p>
                                    <p className="text-sm text-gray-500">Age 18</p>
                                </div>
                            </div>
                            <p className="mt-4">This bootcamp was amazing! I learned so much about coding and made great
                                friends. It really prepared me for my college courses.</p>
                        </div>

                        <div
                            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-2xl shadow-gray-600/10 text-gray-600">
                            <div className="flex gap-4">
                                <img className="w-12 h-12 rounded-full"
                                     src="https://randomuser.me/api/portraits/lego/3.jpg" alt="user avatar" width="400"
                                     height="400" loading="lazy"/>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">Reice Andrews</p>
                                    <p className="text-sm text-gray-500">High School Student</p>
                                    <p className="text-sm text-gray-500">Age 15</p>
                                </div>
                            </div>
                            <p className="mt-4">The Bigbrain Tech bootcamp gave me the skills to build my own website!
                                The instructors were friendly and made learning fun.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TestimonialsPage;
