import React from 'react';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Welcome to My Amplify App</h1>
            </header>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);
