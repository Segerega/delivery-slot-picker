function getDeliverySlots() {
    const slots = ['AM', 'PM', 'EVE'];
    const today = new Date();
    const results = {};

    const startOfWeek = new Date(today);
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Days to last Monday
    startOfWeek.setDate(today.getDate() + daysToMonday);

    for (let week = 0; week < 4; week++) {
        for (let day = 0; day < 7; day++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + week * 7 + day);

            const isPastDate = date < new Date(); // Check if the date is in the past
            const isWeekend = date.getDay() === 0 || date.getDay() === 6; // Sunday or Saturday

            const monthKey = date.toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!results[monthKey]) {
                results[monthKey] = [];
            }

            const slotAvailability = slots.map(slot => ({
                slot,
                isAvailable: !isPastDate && !isWeekend, // Mark as unavailable on weekends or past dates
            }));

            results[monthKey].push({ date: date.toDateString(), isWeekend, slots: slotAvailability, isPastDate });
        }
    }

    return results;
}

export default getDeliverySlots;
