import React, { useEffect } from 'react';

export const PrivacyPolicy = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'termly-jssdk';
        script.src = "https://app.termly.io/embed-policy.min.js";
        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript) {
            firstScript.parentNode.insertBefore(script, firstScript);
        }
    }, []);

    return (
        <div name="termly-embed" data-id="13d670cd-333e-4553-94cb-6865faa6e235"></div>
    );
};
