import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faUser, faCogs, faSignOutAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleKeyDown = (e, toggleFunction) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFunction(prevState => !prevState);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="w-full text-white bg-main-color">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between p-4">
                        <button className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">example profile</button>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setNavOpen(!navOpen)}>
                            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${navOpen ? 'flex' : 'hidden'}`}>
                        <div
                            className="relative"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            onKeyDown={(e) => handleKeyDown(e, setDropdownOpen)}
                            role="button"
                            tabIndex="0"
                        >
                            <button className="flex items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline">
                                <span>Jane Doe</span>
                                <img className="inline h-6 rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="profile" />
                                <FontAwesomeIcon icon={faChevronDown} className={`inline w-4 h-4 transition-transform duration-200 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                                >
                                    <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
                                        <button className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                            <FontAwesomeIcon icon={faCogs} className="mr-2" />
                                            Settings
                                        </button>
                                        <button className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                                            Help
                                        </button>
                                        <div className="border-b"></div>
                                        <button className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="profile" />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt.</p>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                                    </span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                        </div>
                        {/* End of profile card */}
                        <div className="my-4"></div>
                        {/* Friends card */}
                        <div className="bg-white p-3 hover:shadow">
                            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                <span className="text-green-500">
                                    <FontAwesomeIcon icon={faUser} className="h-5 fill-current" />
                                </span>
                                <span>Similar Profiles</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt="friend" />
                                    <button className="text-main-color">Kojstantin</button>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="friend" />
                                    <button className="text-main-color">James</button>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="friend" />
                                    <button className="text-main-color">Natie</button>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png" alt="friend" />
                                    <button className="text-main-color">Casey</button>
                                </div>
                            </div>
                        </div>
                        {/* End of friends card */}
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* Profile tab */}
                        {/* About Section */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span className="text-green-500">
                                    <FontAwesomeIcon icon={faUser} className="h-5" />
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">First Name</div>
                                        <div className="px-4 py-2">Jane</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">Doe</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Gender</div>
                                        <div className="px-4 py-2">Female</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 py-2">+11 998001001</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Current Address</div>
                                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Permanent Address</div>
                                        <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Birthday</div>
                                        <div className="px-4 py-2">Feb 06, 1998</div>
                                    </div>
                                </div>
                            </div>
                            <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                Show Full Information
                            </button>
                        </div>
                        {/* End of about section */}
                        <div className="my-4"></div>
                        {/* Experience and education */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span className="text-green-500">
                                            <FontAwesomeIcon icon={faUser} className="h-5" />
                                        </span>
                                        <span className="tracking-wide">Experience</span>
                                    </div>
                                    <ul className="list-inside space-y-2">
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Owner at Her Company Inc.</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span className="text-green-500">
                                            <FontAwesomeIcon icon={faUser} className="h-5" />
                                        </span>
                                        <span className="tracking-wide">Education</span>
                                    </div>
                                    <ul className="list-inside space-y-2">
                                        <li>
                                            <div className="text-teal-600">Masters Degree in Oxford</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Bachelors Degree in LPU</div>
                                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End of Experience and education grid */}
                    </div>
                    {/* End of profile tab */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
