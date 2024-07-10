// src/components/WeekCard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const WeekCard = ({ week, description, curriculum }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 mr-3" size="2x" />
                    <div>
                        <h2 className="text-xl font-semibold">{`Week ${week}`}</h2>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                {isOpen && (
                    <ul className="mt-4">
                        {curriculum.map((day, index) => (
                            <li key={index} className="mb-2">
                                <strong>{`Day ${index + 1}:`}</strong> {day}
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </div>
    );
};
WeekCard.propTypes = {
    week: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    curriculum: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WeekCard;
