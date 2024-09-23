import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css'; // Import Amplify UI styles

Amplify.configure(awsconfig);

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>
);