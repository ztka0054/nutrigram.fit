var slug = require("slug");

const router = (information, locale) => {
    let data = {};
    let names = {};
    if (information?.destination) {
        data.idDe = information.destination.id;
        if (locale == "es")
            names.nameDe = slug(
                information.destination.nameTranslations["en-us"]
            );
        if (locale == "en")
            names.nameDe = slug(information.destination.nameTranslations["es"]);
    }
    if (information?.adventure) {
        data.idAd = information.adventure.id;
        if (locale == "es")
            names.nameAd = slug(
                information.adventure.nameTranslations["en-us"]
            );
        if (locale == "en")
            names.nameAd = slug(information.adventure.nameTranslations["es"]);
    }
    if (information?.activity) {
        data.idAc = information.activity.id;
        if (locale == "es")
            names.nameAc = slug(information.activity.nameTranslations["en-us"]);
        if (locale == "en")
            names.nameAc = slug(information.activity.nameTranslations["es"]);
    }
    if (information?.date) {
        names.date = information.date;
    }

    return { ...data, ...names };
};

export default router;
