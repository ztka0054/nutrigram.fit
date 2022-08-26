import moment from "moment";

const FormatUTC = (date) => {
    return moment(date).format("YYYY-MM-DD");
};

export default FormatUTC;
