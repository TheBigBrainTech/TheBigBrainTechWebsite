import React from 'react';
import WeekCard from '../reusable/WeekCard';
import {QACurriculum} from '../../../Assets/Data/QACurriculam';

function QACourseInfo() {
    return (
        <div className="container mx-auto mt-12">
            <h1 className="text-gray-500 font-bold text-3xl text-center">COURSE INFO</h1>
            <h4 className="text-gray-400 font-semibold text-xl mt-4 text-center">
                Master the fundamental skills of a Quality Assurance Engineer in just a 8 weeks
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {QACurriculum.map((weekData, index) => (
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

export default QACourseInfo;
