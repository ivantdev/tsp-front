import "../styles/TripTrack.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Map } from "./Map";
import { Loader } from "@googlemaps/js-api-loader";

const TripOnMap = () => {
    const { track, google, setGoogle, setGeocoder } = useContext(GlobalContext);

    if (!google) {
        const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const loader = new Loader({
            apiKey: API_KEY,
            version: "weekly",
        });
    
        loader.load().then((ggle) => {
            setGoogle(ggle);
            const geoc = new ggle.maps.Geocoder()
            setGeocoder(geoc);
        })
        return 
    }
    return (
        <div className="tripMap">
            <div id="trip-map" className="tripMap-container">
                <Map center={track.locations[0].coordinates} container={"trip-map"} zoom={15} pathCoordinates={track.path} ></Map>
            </div>
        </div>
    )
};

export { TripOnMap }