import Link from 'next/link';
import { UserIcon, ArrowRightOnRectangleIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-50 via-cyan-100 to-cyan-200 p-6">
                <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
                    Welcome to the Delivery Slot Picker
                </h1>
                <p className="text-xl text-center text-gray-700 mb-10">
                    This app allows users to register, log in, and view available delivery slots.
                </p>

                <div className="flex space-x-6">
                    <Link href="/register" passHref>
                        <button className="flex items-center bg-teal-400 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105">
                            <UserIcon className="h-6 w-6 mr-2" />
                            Register
                        </button>
                    </Link>
                    <Link href="/login" passHref>
                        <button className="flex items-center bg-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105">
                            <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" />
                            Login
                        </button>
                    </Link>
                    <Link href="/slots" passHref>
                        <button className="flex items-center bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
                            <CalendarDaysIcon className="h-6 w-6 mr-2" />
                            View Slots
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
