import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { updateUserAttributes, fetchUserAttributes } from '@aws-amplify/auth';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { uploadData, getUrl, remove } from '@aws-amplify/storage';
import LoadingIcons from 'react-loading-icons';

const MAX_FILE_SIZE = 1024 * 1024; // 1MB
const PLACEHOLDER_IMAGE = 'https://placehold.co/150x150';

const UserProfileSettings = ({ onProfileUpdate }) => {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updateMessage, setUpdateMessage] = useState('');
    const [profilePicture, setProfilePicture] = useState(PLACEHOLDER_IMAGE);
    const [imageError, setImageError] = useState(false);

    const fetchAttributes = useCallback(async () => {
        try {
            if (authStatus !== 'authenticated') {
                setLoading(false);
                return;
            }

            const attributes = await fetchUserAttributes();
            setUserData(attributes);
            if (attributes.picture) {
                try {
                    const url = await getUrl({ key: attributes.picture });
                    setProfilePicture(url.url);
                    setImageError(false);
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                    setProfilePicture(PLACEHOLDER_IMAGE);
                    setImageError(true);
                }
            } else {
                setProfilePicture(PLACEHOLDER_IMAGE);
                setImageError(false);
            }
        } catch (error) {
            console.error('Error fetching user attributes:', error);
        } finally {
            setLoading(false);
        }
    }, [authStatus]);

    useEffect(() => {
        fetchAttributes();
    }, [fetchAttributes]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const compressImage = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxWidth = 300;
                    const scaleFactor = maxWidth / img.width;
                    canvas.width = maxWidth;
                    canvas.height = img.height * scaleFactor;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob(resolve, 'image/jpeg', 0.7);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setUpdateMessage('File is too large. Please choose an image under 1MB.');
                return;
            }
            try {
                const compressedImage = await compressImage(file);
                const preview = URL.createObjectURL(compressedImage);
                setProfilePicture(preview);
                setImageError(false);
            } catch (error) {
                console.error('Error compressing image:', error);
                setUpdateMessage('Error processing image. Please try again.');
            }
        }
    };

    const uploadImageToS3 = async (imageBlob) => {
        const fileName = `profile-picture-${Date.now()}.jpg`;
        try {
            const result = await uploadData({
                key: fileName,
                data: imageBlob,
                options: {
                    contentType: 'image/jpeg',
                }
            }).result;
            return result.key;
        } catch (error) {
            console.error('Error uploading image to S3:', error);
            throw error;
        }
    };

    const handleRemovePicture = async () => {
        try {
            if (userData.picture) {
                await remove({ key: userData.picture });
            }
            setProfilePicture(PLACEHOLDER_IMAGE);
            setImageError(false);
            setUserData((prevData) => ({ ...prevData, picture: '' }));
            setUpdateMessage('Profile picture removed successfully.');
        } catch (error) {
            console.error('Error removing profile picture:', error);
            setUpdateMessage('Failed to remove profile picture. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setUpdateMessage('');

        const immutableAttributes = ['sub', 'email_verified', 'phone_number_verified'];

        const mutableUserData = Object.keys(userData)
            .filter(key => !immutableAttributes.includes(key) && userData[key] !== '')
            .reduce((obj, key) => {
                obj[key] = userData[key];
                return obj;
            }, {});

        try {
            if (profilePicture && profilePicture !== PLACEHOLDER_IMAGE) {
                const response = await fetch(profilePicture);
                const blob = await response.blob();
                const imageKey = await uploadImageToS3(blob);
                mutableUserData.picture = imageKey;
            } else if (profilePicture === PLACEHOLDER_IMAGE) {
                mutableUserData.picture = '';
            }

            await updateUserAttributes({
                userAttributes: mutableUserData
            });
            setUpdateMessage('Profile updated successfully!');
            onProfileUpdate(); // Notify Dashboard of the update
        } catch (error) {
            console.error('Error updating profile:', error);
            setUpdateMessage('Failed to update profile. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <LoadingIcons.Circles stroke="#EAB306" fill="#EAB306" />
            </div>
        );
    }

    if (authStatus !== 'authenticated') {
        return <div className="text-center">Please sign in to view your profile settings.</div>;
    }

    if (!userData) {
        return <div className="text-center">Unable to load user data. Please try refreshing the page.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-200 py-12 px-4 mb-24">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-2xl font-semibold text-center mb-4">{userData.given_name}&apos;s Profile</h2>
                    <div className="relative mb-6">
                        {imageError ? (
                            <div className="w-[150px] h-[150px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                No Image
                            </div>
                        ) : (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className="w-[150px] h-[150px] rounded-full object-cover"
                                onError={() => {
                                    setImageError(true);
                                    setProfilePicture(PLACEHOLDER_IMAGE);
                                }}
                            />
                        )}
                        <div className="flex justify-center mt-4">
                            <label htmlFor="profile-picture"
                                   className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer mr-2">
                                <span>Upload Picture</span>
                                <input
                                    type="file"
                                    id="profile-picture"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    aria-label="Upload profile picture"
                                />
                            </label>
                            <button
                                onClick={handleRemovePicture}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                disabled={profilePicture === PLACEHOLDER_IMAGE}
                            >
                                Remove Picture
                            </button>
                        </div>
                    </div>
                </div>
                {updateMessage && (
                    <div
                        className={`text-center mb-4 ${updateMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {updateMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First Name" name="given_name" value={userData.given_name || ''}
                                onChange={handleInputChange}/>
                    <InputField label="Last Name" name="family_name" value={userData.family_name || ''}
                                onChange={handleInputChange}/>
                    <InputField label="Email" name="email" value={userData.email || ''} onChange={handleInputChange}
                                readOnly/>
                    <InputField label="Phone Number" name="phone_number" value={userData.phone_number || ''}
                                onChange={handleInputChange}/>
                    <InputField label="Parent/Guardian Name" name="nickname" value={userData.nickname || ''}
                                onChange={handleInputChange}/>
                    <InputField label="Parent/Guardian Phone" name="custom:Guardian_Phone"
                                value={userData['custom:Guardian_Phone'] || ''} onChange={handleInputChange}/>
                    <InputField label="Date of Birth" name="birthdate" type="date" value={userData.birthdate || ''}
                                onChange={handleInputChange}/>
                    <InputField label="Course" name="custom:CourseName" value={userData['custom:CourseName'] || ''}
                                onChange={handleInputChange}/>
                    <div className="md:col-span-2">
                        <label htmlFor="address" className="block mb-1">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={userData.address || ''}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({label, name, type, value, onChange, readOnly}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="mb-1">{label}</label>
        <input
            type={type || "text"}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${readOnly ? 'bg-gray-100' : ''}`}
        />
    </div>
);
UserProfileSettings.propTypes = {
    onProfileUpdate: PropTypes.func.isRequired,
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export default UserProfileSettings;