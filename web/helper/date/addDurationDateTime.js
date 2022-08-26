import moment from "moment";

const addTimeDateTime = (date, duration) => {
    let datas = duration.split(":");
    let dateNew = moment(date.replace("Z", ""));
    dateNew.add(parseInt(datas[0]), "hours");
    dateNew.add(parseInt(datas[1]), "minutes");
    return dateNew;
};

export default addTimeDateTime;
