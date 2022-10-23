import { useLoadScript } from "@react-google-maps/api"
import { Map } from "./Map";
import { Loading } from "./Loading";
import "../styles/MapView.css";
import { updateViewportHeight } from "../utilities/updateViwportHeight";

const MapView = () => {
    const { isLoaded } = useLoadScript( {
        googleMapsApiKey: process.env.REACT_APP_GOOLE_MAPS_API_KEY,
    } );

    const onClickBack = () => {
        window.history.back();
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
                        <div className="map__search">
                            <input type="text" name="query" id="query" placeholder="type a place" />
                            <button type="submit">
                                <i className="fa-light fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    <Map />
                </div>
            </div>
            <div className="">
            </div>
        </>
    )
};

export { MapView };