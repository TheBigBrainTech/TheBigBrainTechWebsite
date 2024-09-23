import React, { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import  loginImg  from '../../Assets/images/character/LoginPageBg.png';
import Navigation from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';
import CustomSignUpFields from './CustomSignUpFields';

function Login() {
    const { route, user } = useAuthenticator((context) => [context.route, context.user]);
    const navigate = useNavigate();

    useEffect(() => {
        if (route === 'authenticated' && user) {
            const email = user.signInDetails?.loginId || null;
            if (email) {
                if (email.endsWith('@thebigbraintech.com')) {
                    navigate('/profile');
                } else {
                    navigate('/dashboard');
                }
            } else {
                alert(`Unable to determine user email.`);
                navigate('/');
            }
        }
    }, [route, user, navigate]);

    if (route !== 'authenticated') {
        return (
            <div>
                <Navigation />
                <div className="relative min-h-screen flex items-center bg-gray-100 pt-24 pr-24">
                    <img src={ loginImg } className="absolute inset-0 w-full h-full object-cover" alt="Sign In" />
                    <div className="relative flex-1 flex justify-end p-6 pr-24">
                        <CustomSignUpFields />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return null;
}

export default Login;
