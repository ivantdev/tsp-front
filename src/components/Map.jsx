import { useContext, useLayoutEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Map = ({ queryLocation, center, container, zoom, pathCoordinates }) => {
    const onClickMap = (e) => {
        const location = { 
            location: e.latLng,
        };
        if (queryLocation) {
            queryLocation(location);
        }
    };
    
    const { google } = useContext(GlobalContext);
    const options = {
        center: center || {lat: 4.63777, lng: -74.084},
        zoom: zoom | 15,
        disableDefaultUI: true,
        mapId: ["35ed74a250b8d9e0"],
        keyboardShortcuts: false,
        gestureHandling: "greedy",
    };

    useLayoutEffect(() => {
        const map  = new google.maps.Map(document.getElementById(container), options);
        map.addListener("click", onClickMap);

        if(pathCoordinates) {
            const path = new google.maps.Polyline({
                path: pathCoordinates,
                geodesic: true,
                strokeColor: "#9FA8E0",
                strokeOpacity: 0.8,
                strokeWeight: 5,
            });
            path.setMap(map);
        }
    }, []);



    return;
};

export { Map };