export default (year, month) => {
    const monthIndex = month
    const names = Object.freeze([ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ]);
    const date = new Date(year, monthIndex-1, 1);
    const result = [];
    var numberFirst = date.getDay()
    while (date.getMonth() == monthIndex-1) {
      result.push({active:true, date:new Date(date)});
      date.setDate(date.getDate() + 1);
    }
    var numberLast = (date.getDay()-1)
    //add Day before
    const dateB = new Date(year, monthIndex-1, 0);
    var cont = 0
    cont = (numberFirst!=0) ? numberFirst - 1 : 6
    while (cont>0) {
        result.unshift({active:false, date:new Date(dateB)});
        dateB.setDate(dateB.getDate() - 1);
        cont=cont-1;
    }
    //add Day after
    const dateA = new Date(year, monthIndex, 1);
    cont = 0
    cont = (numberLast!=0) ? 6 - numberLast : 0
    while (cont>=0) {
        result.push({active:false, date:new Date(dateA)});
        dateA.setDate(dateA.getDate() + 1);
        cont=cont-1;
    }
    if(result.length<42){
        cont = 5
        while (cont>=0) {
            result.push({active:false, date:new Date(dateA)});
            dateA.setDate(dateA.getDate() + 1);
            cont=cont-1;
        }
    }

    return result;
}