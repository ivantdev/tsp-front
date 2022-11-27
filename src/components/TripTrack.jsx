import "../styles/TripTrack.css";
import "../styles/MapView.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Map } from "./Map";
import { Loader } from "@googlemaps/js-api-loader";

const TripTrack = () => {
    const { track, setTrack, google, setGoogle, setGeocoder } = useContext(GlobalContext);

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

    const onClickBack = () => {
        setTrack(null);
    };
    console.log(track);

    return (
        <div className="tripMap">
            <div className="map__header">
                <button type="button" className="map__back" onClick={onClickBack}>
                    <i className="fa-regular fa-arrow-left-long"></i>
                </button>
                <div className="trip__title">
                    <span>{track?.title || "a trip"}</span>
                </div>
            </div>

            <div id="trip-map" className="tripMap-container">
                <Map center={track.locations[0].location} container={"trip-map"} zoom={15} pathCoordinates={track.path} markers={track.locations} ></Map>
            </div>
        </div>
    )
};

export { TripTrack }