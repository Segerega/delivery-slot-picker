import React from 'react';
import Calendar from '../components/Calendar';

const SlotsPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Delivery Slots</h1>
            <Calendar />
        </div>
    );
};

export default SlotsPage;
