import { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";

const Map = ({ queryLocation }) => {
    const onClickMap = (e) => {
        const params = `latlng=${e.latLng.lat()},${e.latLng.lng()}`;
        queryLocation(params);
    };

    const coors = useMemo(() => ({lat: 40.778, lng: -73.962}), []);

    return (
        <GoogleMap
            zoom={12}
            center={coors}
            mapContainerClassName="map-literal-container"
            onClick={onClickMap}
            options={{
                disableDefaultUI: true,
                mapId: ["35ed74a250b8d9e0"],
                keyboardShortcuts: false,
                gestureHandling: "greedy",
            }}
        >

        </GoogleMap>
    );
};

export { Map };