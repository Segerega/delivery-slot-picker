"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', {
                email,
                password
            });

            if (response.status === 200) {
                router.push('/slots');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-50 via-cyan-100 to-cyan-200 p-6">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                >
                    Log In
                </button>
            </form>

            <p className="mt-4">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-500 hover:underline">
                    Register here
                </a>
            </p>
        </div>
    );
}
