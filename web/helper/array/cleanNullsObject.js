import { map } from "lodash";

const cleaner = (object) => {
    let values = map(Object.entries(object), (element) => {
        if (element[1] == null) return [element[0], ""];
        else return element;
    });
    return Object.fromEntries(values);
};

export default cleaner;
