export let harris = (gender, weigtht, height, age) => {
    let result = 0
    if(gender==1){
        result = 66.473+(13.751*weigtht)+(5.0033*height)-(6.7550*age)
    }
    if(gender==2){
        result = 655.1+(9.463*weigtht)+(1.8*height)-(4.6756*age)
    }
    return result
}

export let mifflin = (gender, weigtht, height, age) => {
    let result = 0
    if(gender==1){
        result = 10*weigtht+6.25*height-5*age+5
    }
    if(gender==2){
        result = 10*weigtht+6.25*height-5*age-161
    }
    return result
}

export let owen = (gender, weigtht) => {
    let result = 0
    if(gender==1){
        result = 879+(10.2*weigtht)
    }
    if(gender==2){
        result = 795+(7.18*weigtht)
    }
    return result
}

export let oms = (gender, weigtht, age) => {
    let result = 0
    if(gender==1){
        if(age>=0&&age<=3)
        result = 60.9 * weigtht + 54
        if(age>=4&&age<=10)
        result = 22.7 * weigtht + 495
        if(age>=11&&age<=18)
        result = 17.5 * weigtht + 651
        if(age>=19&&age<=30)
        result = 15.3 * weigtht + 679
        if(age>=31&&age<=60)
        result = 11.6 * weigtht + 879
        if(age>61)
        result = 13.5 * weigtht + 487
    }
    if(gender==2){
        if(age>=0&&age<=3)
        result = 61 * weigtht - 51
        if(age>=4&&age<=10)
        result = 22.5 * weigtht + 499
        if(age>=11&&age<=18)
        result = 12.2 * weigtht + 746
        if(age>=19&&age<=30)
        result = 14.7 * weigtht + 496
        if(age>=31&&age<=60)
        result = 8.7 * weigtht + 829
        if(age>61)
        result = 10.5 * weigtht + 596
    }
    return result
}

export let average = (arrayAverage) => {
    let result = 0
    if(arrayAverage.length>0){
        for (var i = 0; i < arrayAverage.length; i++) { result = result + arrayAverage[i] }
        result = result / arrayAverage.length
    }
    return result
}