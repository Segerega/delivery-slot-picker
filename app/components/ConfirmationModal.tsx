import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, selectedSlot }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-lg font-bold mb-4">Slot Confirmed!</h2>
                {selectedSlot && (
                    <p>
                        You have selected: <strong>{selectedSlot.slot}</strong> on <strong>{selectedSlot.date}</strong>
                    </p>
                )}
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ConfirmationModal;
