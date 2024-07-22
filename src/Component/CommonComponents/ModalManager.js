import React, { useState, useEffect } from 'react';
import WelcomeModal from './WelcomeModal';
import CookieConsentModal from './CookieConsentModal';

const ModalManager = () => {
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [showCookieModal, setShowCookieModal] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogType, setDialogType] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcomeModal(true);
        }, 10000); // Show welcome modal after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleWelcomeSubmit = async (formData) => {
        setShowWelcomeModal(false);

        try {
            const response = await fetch('https://4o7fcaypza.execute-api.us-east-1.amazonaws.com/VisitedWebsiteProd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    contact: formData.contact
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to submit the form.');
            }

            setDialogMessage('We will get in touch soon!');
            setDialogType("success");
            setDialogOpen(true);
        } catch (error) {
            setDialogMessage('Please try again or subscribe to our Newsletter for latest updates.');
            setDialogType("error");
            setDialogOpen(true);
        }
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
        // console.log('Closed cookies modal without choice, defaulting to accept all cookies');
        setShowCookieModal(false);
    };

    const closeDialog = () => setDialogOpen(false);

    return (
        <>
            {showWelcomeModal && <WelcomeModal onClose={() => setShowWelcomeModal(false)} onSubmit={handleWelcomeSubmit} />}
            {showCookieModal && <CookieConsentModal
                onAccept={handleAcceptCookies}
                onAcceptRequired={handleAcceptRequiredCookies}
                onClose={handleCloseCookiesModal}
            />}
            {dialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/2">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-xl font-semibold">
                                {dialogType === "success" ? "Success" : "Error"}
                            </h3>
                            <button onClick={closeDialog} className="text-gray-400 hover:text-gray-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="px-6 py-4">
                            {dialogMessage}
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                            <button
                                onClick={closeDialog}
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalManager;
