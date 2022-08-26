import moment from "moment-timezone";

const dateTimeZone = (dateUTC, hour) => {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let dateMoment = moment(`${dateUTC}`).tz(timeZone);
    if (hour) {
        let time = hour.split(":");
        dateMoment.set("hours", parseInt(time[0]));
        dateMoment.set("minutes", parseInt(time[1]));
    }
    return dateMoment;
};

export default dateTimeZone;
