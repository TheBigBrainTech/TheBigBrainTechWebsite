
import React from 'react';
import WeekCard from '../reusable/WeekCard';
import { EarlyLearners3Curriculum } from '../../../Assets/Data/EarlyLearners3Curriculam';

function EarlyLearners1CourseInfo() {
    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-gray-500 font-bold text-3xl text-center">COURSE INFO</h1>
            <h4 className="text-gray-400 font-semibold text-xl mt-4 text-center">
                Take your coding journey to the final level with 4 more thrilling weeks at our Level 3 Bootcamp for kids!
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {EarlyLearners3Curriculum.map((weekData, index) => (
                    <WeekCard
                        key={index}
                        week={weekData.week}
                        description={weekData.description}
                        curriculum={weekData.days}
                    />
                ))}
            </div>
        </div>
    );
}

export default EarlyLearners1CourseInfo;
