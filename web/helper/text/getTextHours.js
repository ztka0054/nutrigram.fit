export default (n) => {
    var minutes = n % 60;
    var hours = (n - minutes) / 60;
    return `${pad2(hours)}:${pad2(minutes)}:00`;
};

function pad2(number) {
    return (number < 10 ? "0" : "") + number;
}
