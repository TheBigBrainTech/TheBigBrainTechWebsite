import React, { useEffect } from 'react';

export const TermsOfService = () => {
    useEffect(() => {
        const scriptId = 'termly-jssdk';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://app.termly.io/embed-policy.min.js";
            const firstScript = document.getElementsByTagName('script')[0];
            if (firstScript) {
                firstScript.parentNode.insertBefore(script, firstScript);
            }
        }
    }, []);

    return (
        <div name="termly-embed" data-id="5a151e1f-165c-425c-9929-e631d9c69b95"></div>
    );
};
