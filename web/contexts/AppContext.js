import React, { useState, useEffect, createContext, useMemo } from "react";
import { useRouter } from "next/router";
import i18n from "../helper/i18n/config";
import TagManager from "react-gtm-module";

import { getCurrency } from "../utils/localStorage";
// import enviroment from "../helper/enviroment/config";
// const tagManagerArgs = {
//     gtmId: enviroment.idGoogleTagManagger,
// };

//Context
export const AppContext = createContext(null);

//Provider
const AppContextProvider = ({ children }) => {
    const { locale, pathname } = useRouter();
    const [useLocale, setUseLocale] = useState(null);
    const [queryLang, setQueryLang] = useState(null);
    const [basePath, setBasePath] = useState(null);
    const [objectsSignUp, setObjectsSignUp] = useState(null);
    const [flagChangeElement, setFlagChangeElement] = useState(false);

    useEffect(async () => {
        (async () => {
            setUseLocale(null);
            await i18n.changeLanguage(locale);
            setUseLocale(locale);
        })();
    }, [locale]);

    // const [loadTagManager, setLoadTagManager] = useState(false);

    // useEffect(() => {
    //     TagManager.initialize(tagManagerArgs);
    //     setLoadTagManager(true);
    // }, []);

    const putQueryLang = (data) => {
        setQueryLang(data);
    };

    const putBasePath = (data) => {
        setBasePath(data);
    };

    useEffect(() => {
        setQueryLang({});
        setBasePath(null);
    }, [pathname]);

    const putObjectSignUp = (data) => {
        setObjectsSignUp(data);
    };

    const putFlagChangeElement = () => {
        setFlagChangeElement(!flagChangeElement);
    };

    const values = useMemo(
        () => ({
            locale: useLocale,
            queryLang,
            putQueryLang,
            basePath,
            putBasePath,
            // loadTagManager,
            objectsSignUp,
            putObjectSignUp,
            flagChangeElement,
            putFlagChangeElement,
        }),
        [useLocale, queryLang, flagChangeElement]
    );

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
