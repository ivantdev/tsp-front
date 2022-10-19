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

    const banners = [
        {
            id: 1,
            text: "plan the best vacations",
            img: "https://objects.ivant.dev/public/projects/tsp/imgs/road-trip.png",
            color: "var(--light-blue)",
            alt: "Picture of banner. Family on car trip"
        },
        {
            id: 2,
            text: "get the most optimized route",
            img: "https://objects.ivant.dev/public/projects/tsp/imgs/map-route.png",
            color: "var(--light-green)",
            alt: "Picture of banner. Trip draw on map"
        }
    ]

    return(
        <GlobalContext.Provider value={
            {
                routes,
                banners
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalContextProvider };