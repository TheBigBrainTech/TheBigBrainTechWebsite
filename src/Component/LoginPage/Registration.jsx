import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                },
            });
        } catch (error) {
            console.log('Error signing up', error);
        }
    };

    return (
        <div>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}

export default Registration;
