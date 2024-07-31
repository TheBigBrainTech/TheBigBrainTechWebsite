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
        await signOut();
        navigate('/');
    };

    return (
        <div>
            <Navigation />
            <div className="min-h-screen">
                <div className="flex justify-end p-4 mt-24">
                    <button
                        onClick={handleSignOut}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign Out
                    </button>
                </div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

AuthenticatedLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthenticatedLayout;