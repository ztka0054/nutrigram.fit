import moment from "moment";

import hourString from "../text/getTextHours";

const durationFuntion = (date, startDate, endDate) => {
    let start = moment(
        `${moment(date).format("YYYY-MM-DD")}T${moment(startDate).format(
            "HH:mm"
        )}`
    );
    let end = moment(
        `${moment(date).format("YYYY-MM-DD")}T${moment(endDate).format(
            "HH:mm"
        )}`
    );
    let duration = moment.duration(end.diff(start));
    let minutes = duration.asMinutes();
    return hourString(Math.round(minutes));
};

export default durationFuntion;
