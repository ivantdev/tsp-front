import { GoogleMap } from "@react-google-maps/api";

const Map = () => {
    return (
        <GoogleMap
            zoom={12}
            center={{lat: 40.778, lng: -73.962}}
            mapContainerClassName="map-literal-container"
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