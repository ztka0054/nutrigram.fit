import { setHours, setMinutes } from "date-fns";

export const days = [
    { name: "Monday", id: 0 },
    { name: "Tuesday", id: 1 },
    { name: "Wednesday", id: 2 },
    { name: "Thursday", id: 3 },
    { name: "Friday", id: 4 },
    { name: "Saturday", id: 5 },
    { name: "Sunday", id: 6 },
];

export const fixDays = [
    { name: "Monday", dateValue: 1, value: 0 },
    { name: "Tuesday", dateValue: 2, value: 1 },
    { name: "Wednesday", dateValue: 3, value: 2 },
    { name: "Thursday", dateValue: 4, value: 3 },
    { name: "Friday", dateValue: 5, value: 4 },
    { name: "Saturday", dateValue: 6, value: 5 },
    { name: "Sunday", dateValue: 7, value: 6 },
];

export const startHour = setHours(setMinutes(new Date(), 0), 9);
export const endHour = setHours(setMinutes(new Date(), 0), 19);
