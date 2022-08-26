import moment from "moment";
import { map } from "lodash";

const getIntervalsTime = (dateSelect, arrayInfo, interval) => {
    let arrayDates = [];
    map(arrayInfo, (element) => {
        let startDate = moment(
            `${moment(dateSelect).format("YYYY-MM-DD")} ${element.fromTime}`
        );
        let endDate = moment(
            `${moment(dateSelect).format("YYYY-MM-DD")} ${element.toTime}`
        );
        arrayDates.push(startDate.toDate());
        while (!endDate.isSameOrBefore(startDate)) {
            startDate.add(interval, "minutes");
            arrayDates.push(startDate.toDate());
        }
    });
    return arrayDates.sort((a, b) => b + a);
};

export default getIntervalsTime;
