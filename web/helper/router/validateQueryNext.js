import { map } from "lodash";

export const validateQuery = (query) => {
    let flag = true;
    map(Object.entries(query), (element) => {
        if (element[1].includes("[") && element[1].includes("]")) {
            flag = false;
        }
    });
    return flag;
};
