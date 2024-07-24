import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you are importing from 'react-dom/client'
import App from './App'; // Ensure this path is correct
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'; // Ensure the path to aws-exports is correct
import '@aws-amplify/ui-react/styles.css';

// Custom CSS
import './App.css';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'createRoot' is used correctly
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
