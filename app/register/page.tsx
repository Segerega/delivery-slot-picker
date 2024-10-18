"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullname, username, password }),
            });

            const data = await response.json();

            if (data.error) {
                setErrorMessage(data.error);
            } else {
                setSuccessMessage('Registration successful!');
                setFullname('');
                setUsername('');
                setPassword('');
                setConfirmPassword('');

                setTimeout(() => {
                    router.push('/slots');
                }, 50);
            }
        } catch (error) {
            setErrorMessage('An error occurred during registration');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-50 via-cyan-100 to-cyan-200 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Register</h1>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        id="fullname"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-400 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                    <UserIcon className="h-6 w-6 mr-2" />
                    Register
                </button>
            </form>

            {/* Back Button */}
            <button
                className="mt-4 text-gray-700 hover:text-gray-900 flex items-center"
                onClick={() => router.push('/')}
            >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Home
            </button>
        </div>
    );
};

export default Register;
