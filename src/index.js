import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you are importing from 'react-dom/client'
import App from './Component/About/App';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

import './App.css';
import awsExports from "./aws-exports";

Amplify.configure({awsconfig,
    ...awsExports,
    loggingLevel:'DEBUG'})






const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'createRoot' is used correctly
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
