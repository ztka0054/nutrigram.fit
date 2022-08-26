import moment from "moment"
import tagLang from '../i18n/getValueTagLang'

export default (datePost) => {  
    let tag = ''
    var start = moment(datePost)
    var end = moment();
    let diff =end.diff(start, "days")
    if(diff<360){
        let temp = diff/30
        if(temp<2) tag = tagLang("input", "time_month_o", [temp.toFixed(0)])
        else tag = tagLang("input", "time_month_p", [temp.toFixed(0)])
    }
    if(diff<30){
        let temp = diff/7
        if(temp<2) tag = tagLang("input", "time_week_o", [temp.toFixed(0)])
        else tag = tagLang("input", "time_week_p", [temp.toFixed(0)])
    }
    if(diff<7){
        let temp = diff
        if(temp<2) tag = tagLang("input", "time_day_o", [temp.toFixed(0)])
        else tag = tagLang("input", "time_day_p", [temp.toFixed(0)])
    }
    if(diff>360){
        let temp = diff/360
        if(temp<2) tag = tagLang("input", "time_year_o", [temp.toFixed(0)])
        else tag = tagLang("input", "time_year_p", [temp.toFixed(0)])
    }

    return tag
}