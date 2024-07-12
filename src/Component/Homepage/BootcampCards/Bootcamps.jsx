import React, {useRef} from "react";
import {motion, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCircleHalfStroke, faCircleNotch, faLaptopCode, faRobot} from "@fortawesome/free-solid-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

const BootcampCard = () => {
    return (
        <div className="text-center bg-white text-slate-900 p-9">
            <p className="text-6xl text-gray-600 p-5">Discover Our Bootcamps</p>
            <p className="text-gray-600">Not All Bootcamp Are Equal Our&apos;s Are Curated For Individuals Of All
                Levels</p>
            <div className="flex justify-center items-center p-9">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                    <TiltCard
                        icon={<FontAwesomeIcon icon={faLaptopCode}/>}
                        title="FullStack Developer"
                        description="Master both frontend and backend development."
                        descriptionUSP="Live Coding"
                        hours="4 hrs/Day 14 Weeks"
                        link="/Programs/Individuals/Fullstack"
                    />
                    <TiltCard
                        icon={<FontAwesomeIcon icon={faReact}/>}
                        title="Frontend Developer"
                        description="Dive deep into modern frontend frameworks."
                        descriptionUSP="Live Coding"
                        hours="4 hrs/Day 10 Weeks"
                        link="/Programs/Individuals/Frontend"
                    />
                    <TiltCard
                        icon={<FontAwesomeIcon icon={faRobot}/>}
                        title="QA Automation"
                        description="Automate testing to ensure quality software."
                        descriptionUSP="Live Coding"
                        hours="4 hrs/Day 8 Weeks"
                        link="/Programs/Individuals/QAAutomation"
                    />
                    <TiltCard
                        icon={<FontAwesomeIcon icon={faCircleNotch}/>}
                        title="Early Learners I"
                        description="Begin your coding journey with foundational skills."
                        descriptionUSP="Live Coding and Take Home Assignments"
                        hours="2 hrs/Day 4 Weeks"
                        link="/Programs/EarlyLearners/Basic"
                    />
                    <TiltCard
                        icon={<FontAwesomeIcon icon={faCircleHalfStroke}/>}
                        title="Early Learners II"
                        description="Build on your basic coding knowledge."
                        descriptionUSP="Live Coding and Take Home Assignments"
                        hours="2 hrs/Day 4 Weeks"
                        link="/Programs/EarlyLearners/Intermediate"
                    />
                    <TiltCard
                        icon={<FontAwesomeIcon icon={faCircle}/>}
                        title="Early Learners III"
                        description="Advance to more complex coding challenges."
                        descriptionUSP="Live Coding and Take Home Assignments"
                        hours="2 hrs/Day 4 Weeks"
                        link="/Programs/EarlyLearners/Advanced"
                    />
                </div>
            </div>
        </div>
    );
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({icon, title, description, descriptionUSP, hours, link}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-72 rounded-xl bg-blue-950"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-4"
            >
                <div style={{transform: "translateZ(75px)"}} className="mx-auto text-4xl mb-4 bg-blue-250 rounded-4xl">
                    {icon}
                </div>
                <p style={{transform: "translateZ(50px)"}} className="text-center text-2xl font-bold mb-2">
                    {title}
                </p>
                <p style={{transform: "translateZ(50px)"}} className="text-center text-base mb-2">
                    {description}
                </p>
                <p style={{transform: "translateZ(50px)"}} className="text-center text-base mb-2">
                    Online
                </p>
                <p style={{transform: "translateZ(50px)"}} className="text-center text-base mb-2">
                    {descriptionUSP}
                </p>
                <p style={{transform: "translateZ(50px)"}} className="text-center text-base mb-2">
                    {hours}
                </p>
                <Link to={link}>
                    <button
                        style={{transform: "translateZ(50px)"}}
                        className="btn bg-yellow-500 text-white py-2 px-4 rounded mt-4"
                    >
                        Learn More
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

TiltCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    descriptionUSP: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default BootcampCard;
