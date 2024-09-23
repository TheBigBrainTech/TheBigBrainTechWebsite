import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

function CustomSignUpFields() {
    return (
        <div className="p-4">
            <Authenticator
                signUpAttributes={[
                    'given_name',
                    'family_name',
                    'email',
                    'phone_number',
                    'gender',
                    'birthdate',
                    'address',
                    'nickname',
                    'custom:Guardian_Phone',
                    'custom:CourseName'
                ]}
                formFields={{
                    signUp: {
                        email: {
                            label: 'Email',
                            placeholder: 'Enter your email',
                            isRequired: true,
                            className: "w-full"
                        },
                        given_name: {
                            label: 'First Name',
                            placeholder: 'Enter your first name',
                            isRequired: true,
                            className: "w-full"
                        },
                        family_name: {
                            label: 'Last Name',
                            placeholder: 'Enter your last name',
                            isRequired: true,
                            className: "w-full"
                        },
                        gender: {
                            label: 'Gender',
                            placeholder: 'Male  Female  Other',
                            isRequired: true,
                            className: "w-full"
                        },
                        birthdate: {
                            label: 'Birth Date',
                            isRequired: true,
                            className: "w-full"
                        },
                        phone_number: {
                            label: 'Phone Number',
                            placeholder: 'Enter your phone number',
                            isRequired: true,
                            className: "w-full"
                        },
                        address: {
                            label: 'Address',
                            placeholder: 'Enter your address with Zip Code',
                            isRequired: true,
                            className: "w-full"
                        },
                        nickname: {
                            label: 'Parent / Guardian Name',
                            placeholder: 'Enter Secondary contact name',
                            isRequired: true,
                            className: "w-full"
                        },
                        'custom:Guardian_Phone': {
                            label: 'Parent / Guardian Phone',
                            placeholder: '(555) 555-5555',
                            isRequired: true,
                            className: "w-full"
                        },
                        'custom:CourseName': {
                            label: 'Bootcamp',
                            placeholder: 'Enter Preferred Bootcamp',
                            isRequired: true,
                            className: "w-full"
                        }
                    }
                }}
            />
        </div>
    );
}

export default CustomSignUpFields;

