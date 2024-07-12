import React from 'react';
//import PropTypes from 'prop-types';
// import jobListingsData from '../../Assets/Data/JobPostings.json';
import Footer from '../Homepage/Footer/Footer';
import Navigation from '../Homepage/Navbar/Navbar';
import NoJobImg from '../../Assets/images/character/career.png'
//
// const JobCard = ({ job }) => {
//     return (
//         <div className="mb-6 bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-2">{job.jobTitle}</h3>
//             <p className="mb-4">{job.jobDescription}</p>
//             <p>Location: {job.location}</p>
//             <p>Job Type: {job.jobType}</p>
//             <p>Type: {job.type}</p>
//             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
//                 Apply
//             </button>
//         </div>
//     );
// };

// JobCard.propTypes = {
//     job: PropTypes.shape({
//         jobTitle: PropTypes.string.isRequired,
//         jobDescription: PropTypes.string.isRequired,
//         location: PropTypes.string.isRequired,
//         jobType: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//     }).isRequired,
// };

//const JoinOurTeam = () => {
// const jobListings = jobListingsData;
// const [locationFilter, setLocationFilter] = useState('');
// const [jobTypeFilter, setJobTypeFilter] = useState('');
// const [typeFilter, setTypeFilter] = useState('');

// Filter the job listings based on the selected filters
// const filteredJobListings = jobListings.filter((job) => {
//     if (locationFilter && job.location !== locationFilter) {
//         return false;
//     }
//     if (jobTypeFilter && job.jobType !== jobTypeFilter) {
//         return false;
//     }
//     if (typeFilter && job.type !== typeFilter) {
//         return false;
//     }
//     return true;
// });

// const clearFilters = () => {
//     setLocationFilter('');
//     setJobTypeFilter('');
//     setTypeFilter('');
// };
const careers = () => {
    return (
        <div>
            <section>
                <Navigation/>
            </section>
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-500 mt-10">Join The Bigbrain Tech Team</h1>
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-500">Filters</h2>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Location:
                            </label>
                            <select
                                id="location"
                                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                // value={locationFilter}
                                // onChange={(e) => setLocationFilter(e.target.value)}
                            >
                                <option value="">All Locations</option>
                                <option value="Virginia, USA">Virginia, USA</option>
                                <option value="Kolkata, India">Massachusetts, USA</option>
                                <option value="Kolkata, India">California, USA</option>
                                <option value="Kolkata, India">Texas, USA</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
                                Job Type:
                            </label>
                            <select
                                // id="jobType"
                                // className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                // value={jobTypeFilter}
                                // onChange={(e) => setJobTypeFilter(e.target.value)}
                            >
                                <option value="">All Job Types</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                Type:
                            </label>
                            <select
                                // id="type"
                                // className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                // value={typeFilter}
                                // onChange={(e) => setTypeFilter(e.target.value)}
                            >
                                <option value="">All Types</option>
                                <option value="Online">Remote</option>
                                <option value="On-site">On-site</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <button
                            className="w-full mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            // onClick={clearFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                    <div className="w-full md:w-2/3 px-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-500">Job Listings</h2>
                        <img
                            src={NoJobImg}
                            alt="Job Listings Placeholder"
                            className=" mb-6 rounded-lg shadow-md justify-items-center"
                            style={{height: "300px", width: "300px", marginLeft: "150px"}}
                        />
                        {/*{filteredJobListings.map((job, index) => (*/}
                        {/*    <JobCard key={index} job={job} />*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default careers;
