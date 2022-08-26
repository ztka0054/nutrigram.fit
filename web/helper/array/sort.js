import moment from 'moment';

export let sortByAttr = () => {
    Array.prototype.sortBy = function(p) {
        return this.slice(0).sort(function(a,b) {
            return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
        });
    }
}

export let sortByDateString = () => {
    Array.prototype.sortByDateStr = function(p) {
        return this.slice(0).sort(function(a,b) {
            return ( moment(a[p]).isAfter(moment(b[p])) ? 1 : moment(a[p]).isAfter(b[p])) ? -1 : 0;
        });
    }
}