import React from 'react';

export default function Info() {
    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="text-center text-gray-600 p-4">
                    <h1 className="text-4xl font-bold mb-4">Recognize your Potential</h1>
                    <p className="mb-4">
                        A significant problem in tech education is that most bootcamps require
                        students to have a significant background in coding just to join a
                        program. However, at our organization, we not only address this issue
                        but also go above and beyond. We understand the importance of
                        practical experience and securing job placements for our students.
                        With over 10 years of instruction, a global alumni network of 13,000+
                        individuals, and extensive research into Learning Science, the labor
                        force, and pedagogy, we have meticulously crafted a curriculum that
                        not only builds a solid foundation but also prepares students for
                        real-world challenges.
                    </p>
                    <p className="mb-4">
                        What sets us apart is our unwavering commitment to our students&apos;
                        long-term success. We provide lifetime support through our dedicated
                        Career Services team, ensuring that students have access to resources
                        and guidance even after completing the program. Our comprehensive
                        placements service helps connect students with relevant job
                        opportunities, leveraging our extensive network and industry
                        partnerships.
                    </p>
                    <p className="mb-4">
                        By prioritizing both education and career advancement, we strive to
                        empower our students with the skills, knowledge, and support needed to
                        thrive in the tech industry.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap mx-auto bg-[#F2F4F6]">
                <div className="text-center text-gray-600 p-2 w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">$124,793</h1>
                    <h6 className="text-lg">
                        The average salary for a full stack developer in the US
                        <p className="text-sm">SOURCE: INDEED</p>
                    </h6>
                </div>
                <div className="text-center text-gray-600 p-2 w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">28.7 Million</h1>
                    <h6 className="text-lg">
                        Projected population worldwide of developers in 2024,growing 3.5 million each leap year

                        <p className="text-sm">SOURCE: STATISTA</p>
                    </h6>
                </div>
            </div>
        </div>
    );
}
