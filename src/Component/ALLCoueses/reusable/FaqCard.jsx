// src/components/FAQRow.jsx
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';

const FAQCard = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <tr
                className="cursor-pointer"
                onClick={handleToggle}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleToggle();
                    }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
            >
                <td className="border px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span>{question}</span>
                        </div>
                        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-gray-500"/>
                    </div>
                </td>
            </tr>
            {isOpen && (
                <motion.tr
                    initial={{height: 0, opacity: 0}}
                    animate={{height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0}}
                    transition={{duration: 0.3}}
                >
                    <td className="border px-4 py-2" colSpan="2">
                        <div className="p-4 bg-gray-100">
                            <p dangerouslySetInnerHTML={{__html: answer.replace(/\n/g, '<br/>').replace(/- /g, '<li>') + '</li>'}}/>
                        </div>
                    </td>
                </motion.tr>
            )}
        </>
    );
};

FAQCard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

export default FAQCard;
