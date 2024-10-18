import React, { useState } from 'react';
import SlotGroup from './SlotGroup';
import getDeliverySlots from '../utils/dateSlotGenerator';

const Slots = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const slotsData = getDeliverySlots();

    const handleSlotClick = (date, slot) => {
        setSelectedSlot({ date, slot });
    };

    return (
        <div className="slots-container">
            <table className="min-w-full border-collapse">
                <thead>
                <tr>
                    {slotsData[0].map((slot, index) => (
                        <th key={index} className="border p-2">{new Date(slot.date).toLocaleDateString()}</th>
                    ))}
                </tr>
                <tr>
                    <th className="border p-2">AM</th>
                    <th className="border p-2">PM</th>
                    <th className="border p-2">EVE</th>
                </tr>
                </thead>
                <tbody>
                {['AM', 'PM', 'EVE'].map((timeSlot) => (
                    <tr key={timeSlot}>
                        {slotsData.map((week) => (
                            week.map((slot) => (
                                <td key={slot.date} className={`border p-2 ${slot.isWeekend ? 'bg-red-200' : ''}`}>
                                    {slot.isWeekend ? (
                                        'Unavailable'
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
                            ))
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Slots;
