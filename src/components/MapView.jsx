import { Map } from "./Map";
import { updateViewportHeight } from "../utilities/updateViewportHeight";
import { MapLocationDetails } from "./MapLocationDetails";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Loader } from "@googlemaps/js-api-loader";
import "../styles/MapView.css";
const MapView = () => {
    const { locationDetails, setLocationDetails, google, setGoogle, geocoder, setGeocoder } = useContext(GlobalContext);
    const { setLoading } = useContext(GlobalContext);
    updateViewportHeight();

    useEffect(() => {
        setLoading(false);
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
    }, []);

    if( !google ) return;

    const queryLocation = async (query) => {
        geocoder.geocode(query, (response, status) => {
            if(status === "OK"){
                const result = response[0];
                const full_address = result.formatted_address.split(", ");
                const address = full_address.shift();
                const address_complement = full_address.join(", ");
                const coordinates = { "lat": result.geometry.location.lat(), "lng": result.geometry.location.lng(), "id": 0};
                const place_id = result.place_id;
    
                const data = {
                    address,
                    address_complement,
                    coordinates,
                    place_id,
                }
    
                setLocationDetails(data);
            }
            setLoading(false);
        });
    };


    const onClickBack = () => {
        setLoading(true);
        window.history.back();
    };

    const onSubmitPlace = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {};
        form.forEach((value, key) => {
            data[key] = value;
        })

        const place = { address: data.query };
        queryLocation(place);
    };

    return (
        <>
            <div className="mapview">
                <div className="map__container">
                    <div className="map__header">
                        <button type="button" className="map__back" onClick={onClickBack}>
                            <i className="fa-regular fa-arrow-left-long"></i>
                        </button>
                        <form className="map__search" onSubmit={onSubmitPlace}  autoComplete="off">
                            <input type="text" name="query" id="query" placeholder="type a place" />
                            <button type="submit">
                                <i className="fa-light fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>

                    <div id="map" className="map-literal-container">
                        <Map queryLocation={queryLocation} container={"map"} />
                    </div>

                </div>
            </div>
            { locationDetails && <MapLocationDetails />}
        </>
    )
};

export { MapView };