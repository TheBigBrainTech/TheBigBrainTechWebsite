import React, { useState } from 'react';
import  { Auth }  from 'aws-amplify';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSendCode = async () => {
        try {
            await Auth.forgotPassword(email);
            console.log('Code sent successfully');
        } catch (error) {
            console.log('Error sending code', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            await Auth.forgotPasswordSubmit(email, code, newPassword);
            console.log('Password reset successfully');
        } catch (error) {
            console.log('Error resetting password', error);
        }
    };

    return (
        <div>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleSendCode}>Send Code</button>
            <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Verification Code"
            />
            <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                placeholder="New Password"
            />
            <button onClick={handleResetPassword}>Reset Password</button>
        </div>
    );
}

export default ForgotPassword;
