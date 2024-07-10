
import React from 'react';
import WeekCard from '../reusable/WeekCard';
import { EarlyLearners1Curriculum } from '../../../Assets/Data/EarlyLearner1Curriculam';

function EarlyLearners1CourseInfo() {
    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-gray-500 font-bold text-3xl text-center">COURSE INFO</h1>
            <h4 className="text-gray-400 font-semibold text-xl mt-4 text-center">
                Discover the world of Frontend Development in 4 fun-filled weeks at our Level 1 Bootcamp for kids!
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {EarlyLearners1Curriculum.map((weekData, index) => (
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
