import moment from "moment";

const getDaysArray = (year, month) => {
    var monthIndex = month; // 0..11 instead of 1..12
    var date = new Date(year, monthIndex, 1);
    var result = [];
    let numberFirst = 0;
    let flagOne = true;
    while (date.getMonth() == monthIndex) {
        let number = date.getDay();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        if (flagOne) {
            numberFirst = number;
            flagOne = false;
        }
        result.push({
            date: new Date(year, month, day),
            day: day,
            numberDay: number,
        });
        date.setDate(date.getDate() + 1);
    }

    for (let index = 0; index < numberFirst; index++) result.unshift(null);
    return result;
};

export default getDaysArray;

Date.prototype.sameDay = function (d) {
    return (
        this.getFullYear() === d.getFullYear() &&
        this.getDate() === d.getDate() &&
        this.getMonth() === d.getMonth()
    );
};
