import React from "react";

const FullWidthCard = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold mb-3">
                        How to apply to our Web Development bootcamp
                    </h3>
                    <h5 className="text-lg font-medium mb-6">
                        Our admission process is beginner-friendly and will give you a
                        taste of our course. Start now!
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <h3 className="text-xl">1</h3>
                            </div>
                            <h4 className="text-lg font-bold mt-4">No prerequisites</h4>
                            <p className="text-gray-700 mt-2 text-center">
                                The Web Development course is beginner-friendly, with no
                                prerequisites required. What counts for us is that you&apos;re
                                motivated to start your new tech journey.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <h3 className="text-xl">2</h3>
                            </div>
                            <h4 className="text-lg font-bold mt-4">
                                Book an interview with our enrolment advisor
                            </h4>
                            <p className="text-gray-700 mt-2 text-center">
                                When you apply, we&apos;ll get back to you to schedule a 30
                                minute video call. We&apos;ll talk about your professional
                                background and your motivation.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <h3 className="text-xl">3</h3>
                            </div>
                            <h4 className="text-lg font-bold mt-4">Take our knowledge quiz</h4>
                            <p className="text-gray-700 mt-2 text-center">
                                You will take a knowledge quiz to assess your coding knowledge
                                and your ability to learn.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <h3 className="text-xl">4</h3>
                            </div>
                            <h4 className="text-lg font-bold mt-4">
                                Payment options & prepwork
                            </h4>
                            <p className="text-gray-700 mt-2 text-center">
                                The last step will consist of finding the most suitable
                                financing option for you. Then, you&apos;ll jump into the
                                prepwork for your enrollment.
                            </p>
                        </div>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded mt-6">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullWidthCard;
