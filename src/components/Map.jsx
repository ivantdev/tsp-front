import { useContext, useLayoutEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Map = ({ queryLocation, center, container, zoom, pathCoordinates, markers }) => {
    const { google, setLoading } = useContext(GlobalContext);

    const onClickMap = (e) => {
        setLoading(true);
        const location = { 
            location: e.latLng,
        };
        if (queryLocation) {
            queryLocation(location);
        } else {
            setLoading(false);
        }
    };
    
    const options = {
        center: center || {lat: 4.63777, lng: -74.084},
        zoom: zoom | 15,
        disableDefaultUI: true,
        mapId: ["35ed74a250b8d9e0"],
        keyboardShortcuts: false,
        gestureHandling: "greedy",
    };

    useLayoutEffect(() => {
        setLoading(false);
        const map  = new google.maps.Map(document.getElementById(container), options);
        map.addListener("click", onClickMap);

        if(pathCoordinates) {
            if(markers) {
                for(let i = 0; i < markers.length - 1; i++) {
                    new google.maps.Marker({
                        position: markers[i].location,
                        label: {
                            text: markers[i].label,
                            fontSize: "20px",
                            fontFamily: "Libre Franklin",
                            fontWeight: "700",
                            paddingBottom: "20px"
                        }, 
                        icon: {
                            url: "https://objects.ivant.dev/public/projects/tsp/imgs/custom_marker.svg",
                            size: new google.maps.Size(60,60),
                            scaledSize: new google.maps.Size(60, 60),
                            labelOrigin: new google.maps.Point(30, 25)
                        },
                        map
                    })
                }
            }
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