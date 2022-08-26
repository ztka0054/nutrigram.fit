import React, { useState, useEffect, useMemo } from "react";

import { ToastContainer } from "react-toastify";

import AppContextAuth from "../contexts/AppAuth";
import AppContextProvider from "../contexts/AppContext";

import "../scss/app.scss";

function MyApp({ Component, pageProps }) {
    return (
        <AppContextAuth>
            <AppContextProvider>
                <Component {...pageProps} />
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    autoClose={4000}
                />
            </AppContextProvider>
        </AppContextAuth>
    );
}

export default MyApp;
