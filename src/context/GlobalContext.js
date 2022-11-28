import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const GlobalContext = React.createContext();

const GlobalContextProvider = ( {children}) => {
    const [ message, setMessage ] = useState(null)
    const [ navState, setNavState ] = useState();
    const [ locationDetails, setLocationDetails ] = useState(null);
    const [ google, setGoogle ] = useState(null);
    const [ geocoder, setGeocoder ] = useState(null);
    const [ track, setTrack ] = useState(null);
    const [ repeatTrack, setRepeatTrack ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    
    const { local, saveItem } = useLocalStorage("TSP_PROJECT", {});
    const [ tripPlanning, setTripPlanning ] = useState({
        title: "",
        locations: [],
        back_to_start: false,
    });

    const route = useLocation().pathname;


    const endpoint = process.env.REACT_APP_ENDPOINT;
    const url_paths = {
        login: "/login",
        signup: "/signup",
        shortestpath: "/shortestpath",
        history: "/history/",
        user: "/user/",
    }

    useEffect(() => {
        if(local?.tripPlanning) {
            setTripPlanning(local.tripPlanning);
        } else {
            setTripPlanning(tripPlanning);
        }
    }, [local]);

    const routes = {
        HomeRoute: "/",
        MapRoute: "/map",
        NewTripRoute: "/new-trip",
        HistoryRoute: "/history",
        AccountRoute: "/account",
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

    const UpdateRoute = () => {
        const newNavState = { ...defaultNavState };
        if (route === "/") {
            newNavState.home = true;
        } else {
            newNavState[route.substring(1)] = true;
        }
        if(route === "/new-trip") {
            newNavState.new = true;
        }
        setNavState(newNavState);

        if (route==="/map") {
            document.getElementsByTagName("body")[0].classList.add("nopadding")
        } else {
            document.getElementsByTagName("body")[0].classList.remove("nopadding")
        }
    };

    return(
        <GlobalContext.Provider value={
            {
                loading,
                setLoading,
                routes,
                banners,
                route,
                navState,
                UpdateRoute,
                endpoint,
                url_paths,
                message,
                setMessage,
                local,
                tripPlanning,
                setTripPlanning,
                saveItem,
                locationDetails,
                setLocationDetails,
                google,
                setGoogle,
                geocoder,
                setGeocoder,
                track,
                setTrack,
                repeatTrack,
                setRepeatTrack,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalContextProvider };