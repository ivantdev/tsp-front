import { useLoadScript } from "@react-google-maps/api"
import { Map } from "./Map";
import { Loading } from "./Loading";
import "../styles/MapView.css";
import { updateViewportHeight } from "../utilities/updateViewportHeight";
import { MapLocationDetails } from "./MapLocationDetails";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { geocoding } from "../utilities/geocoding";

const MapView = () => {
    const { locationDetails, setLocationDetails } = useContext(GlobalContext);

    const queryLocation = async (params) => {
        const { status, response } = await geocoding(params);
        if(status === 200 && response?.status === "OK"){
            const result = await response.results[0];
            const full_address = result.formatted_address.split(", ");
            const address = full_address.shift();
            const address_complement = full_address.join(", ");
            const coord = { ...result.geometry.location };
            const place_id = result.place_id;

            const data = {
                address,
                address_complement,
                coord,
                place_id,
            }

            setLocationDetails(data);
        }
    };

    const { isLoaded } = useLoadScript( {
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    } );

    const onClickBack = () => {
        window.history.back();
    };

    const onSubmitPlace = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {};
        form.forEach((value, key) => {
            data[key] = value;
        })

        const params = `address=${data.query}`;
        queryLocation(params);
    };

    if (!isLoaded) return <Loading />;
    updateViewportHeight();
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

                    <Map queryLocation={queryLocation}/>

                </div>
            </div>
            { locationDetails && <MapLocationDetails />}
        </>
    )
};

export { MapView };