import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCertificate,
    faCircleCheck,
    faChalkboardUser,
    faLaptopCode,
    faCodeBranch, faTimes, faCheck
} from "@fortawesome/free-solid-svg-icons";

export default function InfoTwo() {
    const advantages = [
        { name: 'Structured + Project Based', competitors: [true,false,false] },
        { name: '1:1 Problem Solving', competitors: [true, false, false] },
        { name: 'Career Assistance', competitors: [true, false, false] },
        { name: 'Community', competitors: [true, false, false] },
        { name:  'High Cost', competitors: [false, false, true] },
        { name: 'At Home Learning', competitors: [true, true, false] },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-secondary mb-3 p-4">
                Who Is This Program For?
            </h1>
            <p className="text-gray-700 items-center mb-4 text-sm">
                <FontAwesomeIcon icon={faCircleCheck} className="mx-3" style={{color: "#FFD43B"}}/>
                <b className="text-start text-yellow-700">Career Launchers:</b> Recent Graduates wanting to start a career in a high-growth field and gain exposure to the full
                development lifecycle as the launch point with hand on coding experience.
            </p>
            <p className="text-gray-700 items-center mb-4 text-sm">
                <FontAwesomeIcon icon={faCircleCheck} className="mx-3" style={{color: "#FFD43B"}}/>
                <b className="text-start text-yellow-700">Career Builders: </b> Professionals ready to build on existing skills in coding, to formalize training, and earn a valued
                certificate.
            </p>
            <p className="text-gray-700 items-center mb-4 text-sm">
                <FontAwesomeIcon icon={faCircleCheck} className="mx-3" style={{color: "#FFD43B"}}/>
                <b className="text-start text-yellow-700">Career Switchers: </b> Mid- or later career professionals looking to switch into computer programing from another field, such
                as marketing, sales, operations, or any other field.
            </p>
            <p className="text-gray-700 items-center mb-4 text-sm">
                <FontAwesomeIcon icon={faCircleCheck} className="mx-3" style={{color: "#FFD43B"}}/>
                <b className="text-start text-yellow-700">Early Learners: </b> Learning to code offers several benefits for teenagers aged 12 and above: it develops analytical skills, fosters creativity,
                enhances critical thinking, provides digital literacy, and opens up career opportunities.
            </p>
            <p className="text-center text-slate-400  mb-5 text-sm">
                Note: Learners should have a basic foundation of computers. Learners do not need coding experience, but
                prior coding experience, including self taught coding and/or beginner-level
                coding knowledge will be helpful.
            </p>
            <p className="text-center text-slate-400  mb-5 text-sm">Early Learners should be minimum of age 13 to get enrolled</p>
            <hr/>

            <div className="text-secondary mt-3 p-4 container text-center">
                <h1>Program Highlights</h1>
                <section className="flex flex-wrap justify-around mt-4">
                    <div className="w-1/2 md:w-1/4 text-center mb-4">
                        <FontAwesomeIcon icon={faCertificate} className="mx-3" style={{color: "#FFD43B"}}/>
                        <h3 className="text-lg font-semibold">Certificate</h3>
                        <p>Earn a Successful Completion Certificate</p>
                    </div>
                    <div className="w-1/2 md:w-1/4 text-center mb-4">
                        <FontAwesomeIcon icon={faChalkboardUser} className="mx-3" style={{color: "#FFD43B"}}/>
                        <h3 className="text-lg font-semibold">Live Lectures</h3>
                        <p>Live Coding Demo From Instructor</p>
                    </div>
                    <div className="w-1/2 md:w-1/4 text-center mb-4">
                        <FontAwesomeIcon icon={faLaptopCode} className="mx-3" style={{color: "#FFD43B"}}/>
                        <h3 className="text-lg font-semibold">Hands-On-Coding</h3>
                        <p>Market Ready Coding Skills in a high-growth market</p>
                    </div>
                    <div className="w-1/2 md:w-1/4 text-center mb-4">
                        <FontAwesomeIcon icon={faCodeBranch} className="mx-3" style={{color: "#FFD43B"}}/>
                        <h3 className="text-lg font-semibold">Github Portfolio</h3>
                        <p>Github Portfolio to share with Potential Employers</p>
                    </div>
                </section>
            </div>
            <hr/>
            <div className="text-secondary mt-3 p-4 container text-center ">
                <h1 className="text-center text-secondary mb-4">What Sets Us Apart</h1>
                <div className="overflow-x-auto shadow-lg rounded-2xl">
                    <table className="w-full border-collapse border border-gray-300 ">
                        <thead>
                        <tr className="bg-gray-200 ">
                            <th className="border border-gray-300 px-4 py-2 text-center">Advantage</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">BigBrain Tech</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Free Resources</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Competitors</th>
                        </tr>
                        </thead>
                        <tbody>
                        {advantages.map((advantage, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 text-center">{advantage.name}</td>
                                {advantage.competitors.map((hasAdvantage, i) => (
                                    <td key={i} className="border border-gray-300 px-4 py-2 text-center">
                                        <FontAwesomeIcon icon={hasAdvantage ? faCheck : faTimes}
                                                         style={{color: hasAdvantage ? 'green' : 'red'}}/>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
