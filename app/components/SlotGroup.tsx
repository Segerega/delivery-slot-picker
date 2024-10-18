import React from 'react';
import SlotItem from './SlotItem';

const SlotGroup = ({ group, onSlotClick, selectedSlot }) => {
    return (
        <div className="week-group mb-4">
            <h3 className="text-lg font-semibold">Week {group.week + 1}</h3>
            <table className="min-w-full border-collapse">
                <thead>
                <tr>
                    {group.map((slot, index) => (
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
                        {group.slots ? group.slots.map((slot) => (
                            <td key={slot.date} className={`border p-2 ${slot.isWeekend ? 'bg-red-200' : ''}`}>
                                {slot.isWeekend ? (
                                    'Unavailable'
                                ) : (
                                    <button
                                        onClick={() => onSlotClick(slot.date, timeSlot)}
                                        className={`block w-full py-1 ${selectedSlot?.date === slot.date && selectedSlot?.slot === timeSlot ? 'bg-green-300' : ''}`}
                                        disabled={!slot.slots.find(s => s.slot === timeSlot).isAvailable}
                                    >
                                        {timeSlot}
                                    </button>
                                )}
                            </td>
                        )) : (
                            <td className="border p-2">No slots available</td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SlotGroup;
