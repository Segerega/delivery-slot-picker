import axios from 'axios';

export const saveSlot = async (date, timeSlot) => {
    try {
        const response = await axios.post('/api/save-slot', { date, timeSlot });
        return response.data; // Assume your API returns the saved slot
    } catch (error) {
        console.error("Error saving slot:", error);
        throw error;
    }
};
