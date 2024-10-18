"use client";

import React, { useState } from 'react';
import getDeliverySlots from '../utils/dateSlotGenerator';
import { formatDateWithSuffix } from '../utils/dateFormatter';
import { saveSlot } from '../utils/api';
import ConfirmationModal from './ConfirmationModal';

const Calendar = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [slotsData] = useState(getDeliverySlots());

    const handleSlotClick = async (date, timeSlot) => {
        try {
            const savedSlot = await saveSlot(date, timeSlot);
            setSelectedSlot(savedSlot);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error selecting slot:", error);
        }
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSlot(null);
    };

    return (
        <div className="space-y-4">
            {Object.entries(slotsData).map(([month, weekSlots], monthIndex) => (
                <div key={monthIndex} className="border rounded-lg p-4 bg-white shadow">
                    <h2 className="text-lg font-bold mb-2">{month}</h2>
                    {Array.from({ length: Math.ceil(weekSlots.length / 7) }, (_, weekIndex) => (
                        <table key={weekIndex} className="min-w-full border-collapse mb-4">
                            <thead>
                            <tr>
                                {weekSlots.slice(weekIndex * 7, weekIndex * 7 + 7).map((slot, index) => (
                                    <th key={index} className="border p-2">
                                        {formatDateWithSuffix(slot.date)}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {['AM', 'PM', 'EVE'].map((timeSlot) => (
                                <tr key={timeSlot}>
                                    {weekSlots.slice(weekIndex * 7, weekIndex * 7 + 7).map((slot) => (
                                        <td key={slot.date} className={`border p-2 ${slot.isWeekend ? 'bg-gray-200' : ''}`}>
                                            {slot.isWeekend || slot.isPastDate ? (
                                                <span className="text-gray-400">Unavailable</span>
                                            ) : (
                                                <button
                                                    onClick={() => handleSlotClick(slot.date, timeSlot)}
                                                    className={`block w-full py-1 ${selectedSlot?.date === slot.date && selectedSlot?.slot === timeSlot ? 'bg-green-300' : ''}`}
                                                    disabled={!slot.slots.find(s => s.slot === timeSlot).isAvailable}
                                                >
                                                    {timeSlot}
                                                </button>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ))}
                </div>
            ))}
            <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} selectedSlot={selectedSlot} />
        </div>
    );
};

export default Calendar;
