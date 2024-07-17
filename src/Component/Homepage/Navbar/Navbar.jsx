import React, { useState } from "react";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaHeadset, FaUserCircle } from "react-icons/fa";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import useMeasure from "react-use-measure";
import PropTypes from "prop-types";
import BrandImage from "../../../Assets/images/logo/BigBrainLogoBlue.png";
import { Link, useNavigate } from 'react-router-dom';
import CoursePacketDownloadForm from "../../ALLCoueses/reusable/CoursePacketDownloadForm";

const Navigation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <FlyoutNav setIsModalOpen={setIsModalOpen} />
            <CoursePacketDownloadForm
                isOpen={isModalOpen}
                onClose={handleModalClose}
                downloadUrl="/path/to/brochure.pdf" // Replace with complete brochure URL
            />
        </>
    );
};

const FlyoutNav = ({ setIsModalOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250 ? true : false);
    });

    return (
        <nav
            className={`fixed top-0 z-50 w-full px-6 text-black 
      transition-all duration-300 ease-out lg:px-12
      ${scrolled ? "bg-white py-3 shadow-xl" : "bg-white/0 py-6 shadow-none"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Logo />
                <div className="hidden gap-6 lg:flex">
                    <Links setIsModalOpen={setIsModalOpen} />
                    <CTAs />
                </div>
                <MobileMenu setIsModalOpen={setIsModalOpen} />
            </div>
        </nav>
    );
};

FlyoutNav.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
};

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Link to="/">
                <img src={BrandImage} alt={"Brandlogo"} style={{ height: "50px", width: "100px" }} />
            </Link>
        </div>
    );
};

Logo.propTypes = {
    color: PropTypes.string,
};

const Links = ({ setIsModalOpen }) => {
    return (
        <div className="flex items-center gap-6">
            {LINKS.map((l) => (
                <NavLink
                    key={l.text}
                    href={l.href}
                    FlyoutContent={l.component}
                    onClick={l.onClick ? () => l.onClick(setIsModalOpen) : null}
                >
                    {l.text}
                </NavLink>
            ))}
        </div>
    );
};

Links.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
};

const NavLink = ({ children, href, FlyoutContent, onClick }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative h-fit w-fit"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleClick(e);
                }
            }}
        >
            <a href={href} className="relative">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-yellow-300 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 bg-white text-black"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div
                            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    FlyoutContent: PropTypes.elementType,
    onClick: PropTypes.func,
};

NavLink.defaultProps = {
    href: "#",
    onClick: () => {},
};

const CTAs = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    const handleScheduleCallClick = () => {
        navigate('/inquiry');
    };
    return (
        <div className="flex items-center gap-3">
            <button
                onClick={handleSignInClick}
                className="flex items-center gap-2 rounded-lg border-2 border-blue-950 px-4 py-2 font-semibold text-black transition-colors hover:bg-[#DCAD32] hover:text-white md:bg-yellow-300/10 md:text-black md:hover:bg-[#DCAD32] md:hover:text-white"
            >
                <FaUserCircle />
                <span>Sign in</span>
            </button>

            <button
                onClick={handleScheduleCallClick}
                className="flex items-center gap-2 rounded-lg border-2 border-blue-950 px-4 py-2 font-semibold text-black transition-colors hover:bg-[#DCAD32] hover:text-white md:bg-yellow-300/10 md:text-black md:hover:bg-[#DCAD32] md:hover:text-white"
            >
                <FaHeadset />
                <span>Schedule a Call</span>
            </button>
        </div>
    );
};

const AboutUsContent = () => {
    return (
        <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
            <div className="col-span-12 flex flex-col justify-between bg-yellow-500 p-6 lg:col-span-4">
                <div>
                    <h2 className="mb-2 text-xl font-semibold text-black">About us</h2>
                    <p className="mb-6 max-w-xs text-sm text-neutral-850">
                        The Big Brain Tech: Elevating Education with Innovation
                    </p>
                </div>
                <Link
                    to="/about-us"
                    className="flex items-center gap-1 text-xs text-indigo-750 hover:underline hover:text-blue-800"
                >
                    Learn more <FiArrowRight />
                </Link>
            </div>
            <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
                <Link to="/Questions"
                      className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
                    <h3 className="mb-1 font-semibold">Questions?</h3>
                    <p className="text-xs">
                        Why choose The Bigbrain Tech over any thing else.
                    </p>
                </Link>

                <Link to="/testimonials"
                      className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
                    <h3 className="mb-1 font-semibold">Testimonials</h3>
                    <p className="text-xs">
                        What Our Learners Has To Say About Us
                    </p>
                </Link>
                <Link to="/Press"
                      className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
                    <h3 className="mb-1 font-semibold">Press</h3>
                    <p className="text-xs">
                        Online Reviews
                    </p>
                </Link>

                <Link to="/blog"
                      className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
                    <h3 className="mb-1 font-semibold">Blog</h3>
                    <p className="text-xs">
                        Latest And Greatest News From The Tech World
                    </p>
                </Link>
            </div>
        </div>
    );
};

const PricingContent = () => {
    return (
        <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-1">
                <div className="mb-3 space-y-3">
                    <h3 className="font-semibold">Tuition and financing</h3>
                    <Link to="/financing" className="block text-sm hover:underline pt-4 pb-5">
                        Explore Options
                    </Link>
                </div>
            </div>
            <button
                className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-yellow-500 hover:text-black"
            >
                Contact Admissions
            </button>
        </div>
    );
};

const CareersContent = () => {
    return (
        <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
            <div className="col-span-12 flex flex-col justify-between bg-yellow-500 p-6 lg:col-span-4">
                <div className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold text-black">Careers</h2>
                    <p className="text-sm text-neutral-950">
                        Work With The Bigbrain Tech And Transform Coding Education.
                    </p>
                </div>
                <Link to="/careers" className="flex items-center gap-1 text-xs text-indigo-900 hover:underline hover:text-blue-800">
                    Careers site <FiArrowRight />
                </Link>
            </div>
            <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
                <div className="space-y-3">
                    <h3 className="font-semibold">Individuals</h3>
                    <Link to="/Programs/Individuals/Frontend"
                          className="flex items-center gap-1 text-xs text-indigo-100">
                        <p className="block text-sm hover:underline text-gray-600">
                            Frontend Development
                        </p>
                    </Link>
                    <Link to="/Programs/Individuals/Fullstack"
                          className="flex items-center gap-1 text-xs text-indigo-100">
                        <p className="block text-sm hover:underline text-gray-600">
                            Fullstack Development
                        </p>
                    </Link>
                    <Link to="/Programs/Individuals/QAAutomation"
                          className="flex items-center gap-1 text-xs text-indigo-100">
                        <p className="block text-sm hover:underline text-gray-600">
                            QA Automation
                        </p>
                    </Link>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold">Early Learners</h3>
                    <Link to="/Programs/EarlyLearners/Basic" className="block text-sm hover:underline">
                        Entry Level Learners
                    </Link>
                    <Link to="/Programs/EarlyLearners/Intermediate" className="block text-sm hover:underline">
                        Intermediate Learners
                    </Link>
                    <Link to="/Programs/EarlyLearners/Advanced" className="block text-sm hover:underline">
                        Advanced Learners
                    </Link>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold">More</h3>
                    <Link to="/Support" className="block text-sm hover:underline">Support</Link>
                    <Link to="/Error" className="block text-sm hover:underline">
                        Student Resources
                    </Link>
                    <Link to="/Error" className="block text-sm hover:underline">
                        Other
                    </Link>
                </div>
            </div>
        </div>
    );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen, onClick }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            setOpen((pv) => !pv);
        }
    };

    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
            setMenuOpen(false);
        }
    };

    return (
        <div className="relative text-neutral-400">
            {FoldContent ? (
                <div
                    className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
                    onClick={() => setOpen((pv) => !pv)}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                >
                    <a
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen(false);
                            onClick();
                        }}
                        href={href}
                    >
                        {children}
                    </a>
                    <motion.div
                        animate={{ rotate: open ? "180deg" : "0deg" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <FiChevronDown />
                    </motion.div>
                </div>
            ) : (
                <a
                    onClick={handleClick}
                    href={href}
                    className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
                >
                    <span>{children}</span>
                    <FiArrowRight />
                </a>
            )}
            {FoldContent && (
                <motion.div
                    initial={false}
                    animate={{
                        height: open ? height : "0px",
                        marginBottom: open ? "24px" : "0px",
                        marginTop: open ? "12px" : "0px",
                    }}
                    className="overflow-hidden"
                >
                    <div ref={ref}>
                        <FoldContent />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

MobileMenuLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    FoldContent: PropTypes.elementType,
    setMenuOpen: PropTypes.func.isRequired,
    onClick: PropTypes.func,
};

MobileMenuLink.defaultProps = {
    href: "#",
    onClick: () => {},
};

const MobileMenu = ({ setIsModalOpen }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="block lg:hidden">
            <button onClick={() => setOpen(true)} className="block text-3xl">
                <FiMenu />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
                    >
                        <div className="flex items-center justify-between p-6">
                            <Logo color="black" />
                            <button onClick={() => setOpen(false)}>
                                <FiX className="text-3xl text-neutral-950" />
                            </button>
                        </div>
                        <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
                            {LINKS.map((l) => (
                                <MobileMenuLink
                                    key={l.text}
                                    href={l.href}
                                    FoldContent={l.component}
                                    setMenuOpen={setOpen}
                                    onClick={l.onClick ? () => l.onClick(setIsModalOpen) : null}
                                >
                                    {l.text}
                                </MobileMenuLink>
                            ))}
                        </div>
                        <div className="flex justify-end bg-yellow-500 text-black p-6">
                            <CTAs />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

MobileMenu.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
};

export default Navigation;

const LINKS = [
    {
        text: "Programs",
        href: "./",
        component: CareersContent,
    },
    {
        text: "Tuition",
        href: "./",
        component: PricingContent,
    },
    {
        text: "About us",
        href: "./",
        component: AboutUsContent,
    },
    {
        text: "Program Brochure",
        href: "#",
        component: null,  // This will be handled by onClick
        onClick: (setIsModalOpen) => setIsModalOpen(true),
    },
];
