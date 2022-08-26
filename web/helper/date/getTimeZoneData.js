import moment from "moment-timezone";

export const getDateDateTime = (datetime) => {
    let date = moment(datetime).format("YYYY-MM-DD");
    return date;
};

export const getHourDateTime = (datetime) => {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let date = moment.tz(datetime, timeZone).format("HH:mm");
    return date;
};

export const addTimeToDateTime = (datetime, duration) => {
    let arrayTime = duration.split(":");
    let date = moment(datetime)
        .add(parseInt(arrayTime[0]), "hours")
        .add(parseInt(arrayTime[1]), "minutes");
    return getHourDateTime(date);
};
