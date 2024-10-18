import React from 'react';
import Button from './common/Button';

const SlotItem = ({ slot, onClick, isSelected }) => {
    return (
        <div>
            {slot.slotAvailability.map((availability) => (
                <Button
                    key={availability.slot}
                    onClick={() => onClick(slot.date, availability.slot)}
                    disabled={!availability.isAvailable}
                >
                    {availability.slot}
                </Button>
            ))}
        </div>
    );
};

export default SlotItem;
