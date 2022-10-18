import React from "react";

const GlobalContext = React.createContext();

const GlobalContextProvider = ( {children}) => {
    const routes = {
        HomeRoute: "/",
        MapRoute: "/map",
        NewTripRoute: "/new-trip",
        HistoryRoute: "/history",
        AccountRoute: "/account"
    }

    return(
        <GlobalContext.Provider value={
            {
                routes
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalContextProvider };