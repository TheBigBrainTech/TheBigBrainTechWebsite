import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';
import PropTypes from 'prop-types';

function AuthenticatedLayout({ children }) {
    const { signOut } = useAuthenticator((context) => [context.signOut]);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
            // Optionally, display an error message to the user
        }
    };

    return (
        <div className="flex flex-col min-h-screen"> {/* Ensure full-height layout */}
            <Navigation />
            <main className="flex-grow mb-24 bg-gray-200"> {/* Make main content expandable */}
                <div className="container mx-auto p-4"> {/* Add container for content */}
                    <div className="flex justify-end p-4 pt-20">
                        <button
                            onClick={handleSignOut}
                            className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign Out
                        </button>
                    </div>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

AuthenticatedLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthenticatedLayout;