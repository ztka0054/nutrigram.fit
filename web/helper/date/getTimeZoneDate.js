import momentTime from "moment-timezone";

const getTimeZoneDate = (date) => {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let timeDate = momentTime.tz(date, timeZone).format();
    return timeDate;
};

export default getTimeZoneDate;
