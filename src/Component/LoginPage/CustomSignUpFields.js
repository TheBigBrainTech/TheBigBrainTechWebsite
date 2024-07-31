import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

function CustomSignUpFields() {
    return (
        <Authenticator
            signUpAttributes={['email', 'given_name', 'family_name', 'phone_number', 'address']}
            formFields={{
                signUp: {
                    email: {
                        label: 'Email',
                        placeholder: 'Enter your email',
                        isRequired: true,
                    },
                    given_name: {
                        label: 'First Name',
                        placeholder: 'Enter your first name',
                        isRequired: true,
                    },
                    family_name: {
                        label: 'Last Name',
                        placeholder: 'Enter your last name',
                        isRequired: true,
                    },
                    phone_number: {
                        label: 'Phone Number',
                        placeholder: 'Enter your phone number',
                        isRequired: true,
                    },
                    // address: {
                    //     label: 'Address',
                    //     placeholder: 'Enter your address with Zip Code',
                    //     isRequired: true,
                    // },
                },
            }}
        />
    );
}

export default CustomSignUpFields;
