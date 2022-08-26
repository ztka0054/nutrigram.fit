import moment from "moment";

const fixDate = (date) => {
    return moment(date.replace("Z", ""));
};

export default fixDate;
