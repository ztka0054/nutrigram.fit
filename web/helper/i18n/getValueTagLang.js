import i18n from "./config";

export default (group, name, dynamic = []) => {
    let tag = `${group}:${name}`;
    tag = i18n.t(tag);
    dynamic.map((element) => {
        tag = tag.replaceAt(tag.indexOf("#"), element);
    });
    return tag;
};

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
};
