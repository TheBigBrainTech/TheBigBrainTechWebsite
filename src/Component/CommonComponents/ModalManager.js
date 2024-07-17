import React, { useState, useEffect } from 'react';
import WelcomeModal from './WelcomeModal';
import CookieConsentModal from './CookieConsentModal';

const ModalManager = () => {
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [showCookieModal, setShowCookieModal] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeModal(true);
        }, 10000); // Show welcome modal after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleWelcomeSubmit = (formData) => {
        console.log('Welcome Modal Data:', formData);
        setShowWelcomeModal(false);
    };

    const handleAcceptCookies = () => {
        console.log('Accepted all cookies');
        setShowCookieModal(false);
    };

    const handleAcceptRequiredCookies = () => {
        console.log('Accepted required cookies');
        setShowCookieModal(false);
    };


    const handleCloseCookiesModal = () => {
        console.log('Closed cookies modal without choice, defaulting to accept all cookies');
        setShowCookieModal(false);
    };

    return (
        <>
            {showWelcomeModal && <WelcomeModal onClose={() => setShowWelcomeModal(false)} onSubmit={handleWelcomeSubmit} />}
            {showCookieModal && <CookieConsentModal
                onAccept={handleAcceptCookies}
                onAcceptRequired={handleAcceptRequiredCookies}
                onClose={handleCloseCookiesModal}
            />}
        </>
    );
};

export default ModalManager;
