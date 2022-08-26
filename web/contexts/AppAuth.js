import React, { useState, useEffect, createContext, useMemo } from "react";
import { setToken, getToken, removeToken } from "../utils/localStorage";
import { setPic, getPic, removePic } from "../utils/localStorage";
import {
    setIdNutritionist,
    getIdNutritionist,
    removeIdNutritionist,
} from "../utils/localStorage";

//Context
export const AppContext = createContext(null);

//Provider
const AppContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(undefined);
    const [flagLogin, setFlagLogin] = useState(false);
    const [reloadUser, setReloadUser] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const token = getToken();
        const picture = getPic();
        const idNutritionist = getIdNutritionist();
        if (token) {
            setAuth({ token, picture, idNutritionist });
            setFlagLogin(true);
        } else {
            setAuth(null);
            setFlagLogin(false);
        }
        setReloadUser(false);
        setIsReady(true);
    }, [reloadUser, isReady]);

    const login = (user) => {
        setFlagLogin(true);
        setToken(user.token);
        setPic(user.picture);
        setIdNutritionist(user.id);
        setAuth({
            token: user.token,
            picture: user.picture,
            idNutritionist: user.id,
        });
    };

    const logout = () => {
        if (auth) {
            removeToken();
            removePic();
            removeIdNutritionist();
            setAuth(null);
            setFlagLogin(false);
        }
    };

    const authData = useMemo(
        () => ({
            auth,
            flagLogin,
            login,
            logout,
            setReloadUser,
            isReady,
        }),
        [auth, isReady]
    );

    return (
        <AppContext.Provider value={authData}>{children}</AppContext.Provider>
    );
};

export default AppContextProvider;
