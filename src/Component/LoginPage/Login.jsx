import React, { useEffect } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../Assets/images/character/LoginPageBg.png';
import Navigation from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

function Login() {
    const { route, user } = useAuthenticator((context) => [context.route, context.user]);
    const navigate = useNavigate();

    useEffect(() => {
        if (route === 'authenticated' && user) {
            const email = user.signInDetails?.loginId;

            if (email) {
                if (email.endsWith('@thebigbraintech.com')) {
                    navigate('/dashboard');
                } else {
                    navigate('/profile');
                }
            } else {
                console.error('Unable to determine user email');
                navigate('/profile'); // Default to profile if we can't determine the email
            }
        }
    }, [route, user, navigate]);

    if (route === 'authenticated') {
        return null; // Render nothing while we're figuring out where to navigate
    }

    return (
        <div>
            <Navigation />
            <div className="relative min-h-screen">
                <img src={loginImg} className="w-screen h-[800px]" alt="Sign In" />
                <div className="absolute top-0 right-0 mt-24 mr-24 w-full max-w-md">
                    <Authenticator />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;