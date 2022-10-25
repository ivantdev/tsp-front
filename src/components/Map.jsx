import { useContext, useLayoutEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Map = ({ queryLocation }) => {
    const onClickMap = (e) => {
        const location = { 
            location: e.latLng,
        };
        queryLocation(location);
    };
    
    const { google } = useContext(GlobalContext);
    const options = {
        center: {lat: 40.778, lng: -73.962},
        zoom: 12,
        disableDefaultUI: true,
        mapId: ["35ed74a250b8d9e0"],
        keyboardShortcuts: false,
        gestureHandling: "greedy",
    };

    useLayoutEffect(() => {
        const map  = new google.maps.Map(document.getElementById("map"), options);
        map.addListener("click", onClickMap);

    }, []);



    return;
};

export { Map };