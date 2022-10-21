import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
    const defaultNavState = {
        active: true,
        home: false,
        map: false,
        new: false,
        history: false,
        account: false
    };
    const route = useLocation().pathname;
    const [ navState, setNavState ] = useState();

    const UpdateRoute = () => {
        const newNavState = { ...defaultNavState };
        if (route === "/") {
            newNavState.home = true;
            
        } else {
            newNavState[route.substring(1)] = true;
        }
        setNavState(newNavState);
    };

    return(
        <GlobalContext.Provider value={
            {
                routes,
                banners,
                route,
                navState,
                UpdateRoute,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalContextProvider };