import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faShoppingCart, faUser, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import AuthenticatedLayout from "../LoginPage/AuthenticatedLayout";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate } from 'react-router-dom';
import { fetchUserAttributes } from '@aws-amplify/auth';
import { getUrl } from '@aws-amplify/storage';
import LoadingIcons from "react-loading-icons";
import ToDo from './ToDo';
import UserProfileSettings from './UserProfileSettings';
import Orders from './Orders';
import MyCourses from './MyCourses';

const PLACEHOLDER_IMAGE = 'https://placehold.co/150x150';

const Dashboard = () => {
    const { route } = useAuthenticator((context) => [context.route]);
    const [userAttributes, setUserAttributes] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedComponent, setSelectedComponent] = useState('Dashboard');
    const [profilePicture, setProfilePicture] = useState(PLACEHOLDER_IMAGE);

    const fetchLatestUserAttributes = useCallback(async () => {
        try {
            const attributes = await fetchUserAttributes();
            setUserAttributes(attributes);
            if (attributes.picture) {
                try {
                    const url = await getUrl({ key: attributes.picture });
                    setProfilePicture(url.url);
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                    setProfilePicture(PLACEHOLDER_IMAGE);
                }
            } else {
                setProfilePicture(PLACEHOLDER_IMAGE);
            }
        } catch (error) {
            console.error('Error fetching user attributes:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLatestUserAttributes();
    }, [fetchLatestUserAttributes]);

    const handleProfileUpdate = useCallback(() => {
        fetchLatestUserAttributes();
    }, [fetchLatestUserAttributes]);

    const renderSelectedComponent = useCallback(() => {
        switch (selectedComponent) {
            case 'Dashboard':
                return <ToDo />;
            case 'MyCourses':
                return <MyCourses />;
            case 'Orders':
                return <Orders />;
            case 'ProfileSettings':
                return <UserProfileSettings onProfileUpdate={handleProfileUpdate} />;
            default:
                return <ToDo />;
        }
    }, [selectedComponent, handleProfileUpdate]);

    if (route !== 'authenticated') {
        return <Navigate to="/login" />;
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <LoadingIcons.Circles stroke="#EAB306" fill="#EAB306"/>
            </div>
        );
    }

    const { given_name, family_name, email } = userAttributes;

    return (
        <AuthenticatedLayout>
            <div className="flex h-[1200px] bg-gray-200">
                <aside className="w-80 bg-yellow-500 text-white">
                    <header className="flex items-center justify-between p-6">
                        <div className="flex items-center">
                            <img
                                src={profilePicture}
                                alt={`${given_name || 'User'}'s profile`}
                                className="w-16 h-16 rounded-full mr-4 object-cover"
                                onError={(e) => {
                                    console.error('Error loading image:', e);
                                    e.target.src = PLACEHOLDER_IMAGE;
                                }}
                            />
                            <div>
                                <h2 className="text-xl font-bold">{`${given_name || ''} ${family_name || ''}`}</h2>
                                <p className="text-sm">{email || ''}</p>
                            </div>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <li className="p-4 hover:bg-yellow-600">
                                <button
                                    className="w-full text-left focus:outline-none"
                                    onClick={() => setSelectedComponent('Dashboard')}
                                >
                                    <FontAwesomeIcon icon={faTableColumns} className="mr-3" />
                                    <span>Dashboard</span>
                                </button>
                            </li>
                            <li className="p-4 hover:bg-yellow-600">
                                <button
                                    className="w-full text-left focus:outline-none"
                                    onClick={() => setSelectedComponent('MyCourses')}
                                >
                                    <FontAwesomeIcon icon={faBook} className="mr-3" />
                                    <span>My Courses</span>
                                </button>
                            </li>
                            <li className="p-4 hover:bg-yellow-600">
                                <button
                                    className="w-full text-left focus:outline-none"
                                    onClick={() => setSelectedComponent('Orders')}
                                >
                                    <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
                                    <span>Orders</span>
                                </button>
                            </li>
                            <li className="p-4 hover:bg-yellow-600">
                                <button
                                    className="w-full text-left focus:outline-none"
                                    onClick={() => setSelectedComponent('ProfileSettings')}
                                >
                                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                                    <span>Profile Settings</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    {renderSelectedComponent()}
                </main>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;