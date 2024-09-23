import React, { useEffect } from 'react';

const CookiePolicy = () => {
    useEffect(() => {
        const scriptId = 'termly-jssdk';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://app.termly.io/embed-policy.min.js";
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(script, firstScript);
        }
    }, []);

    return (
        <div name="termly-embed" data-id="9fea5dc0-4a1d-460f-9104-8573a194a1c8"></div>
    );
};

export default CookiePolicy;
