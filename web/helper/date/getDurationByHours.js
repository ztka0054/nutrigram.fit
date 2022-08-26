import moment from "moment";

import hourString from "../text/getTextHours";

const durationFuntion = (date, startHour, endHour) => {
    let start = moment(`${moment(date).format("YYYY-MM-DD")}T${startHour}`);
    let end = moment(`${moment(date).format("YYYY-MM-DD")}T${endHour}`);
    let duration = moment.duration(end.diff(start));
    let minutes = duration.asMinutes();
    return hourString(Math.round(minutes));
};

export default durationFuntion;
