import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const MapLocationDetails = () => {
    const { locationDetails, setLocationDetails, tripPlanning, local, saveItem } = useContext(GlobalContext);

    const onClickCancel = () => {
        document.getElementsByClassName("map__location-details")[0].classList.add('hidden');
        setTimeout(()=> {
            setLocationDetails(null);
        }, 300);
    };

    const onClickAddPlace = () => {
        const locations = tripPlanning.locations;
        locations.push({...locationDetails, id: tripPlanning.locations.length +1 })
        const newTripPlanning = {
            ...tripPlanning,
            locations,
        }
        const newLocal = {
            ...local,
            "tripPlanning": newTripPlanning,
        };
        saveItem(newLocal);
        onClickCancel();
    };
    
    return (
        <div className="map__location-details-container">
            <div className="map__location-details">
                <div className="map__address">
                    <p>{locationDetails.address}</p>
                </div>
                <div className="map__address-complement">
                    <p>{locationDetails.address_complement}</p>
                    <p className="map__coord">{locationDetails.coordinates.lat}, {locationDetails.coordinates.lng}</p>

                </div>
                <div className="map__options">
                    <button className="button" type="button" onClick={onClickAddPlace}>add place</button>
                    <button className="button cancel" type="button" onClick={onClickCancel}>cancel</button>
                </div>
            </div>
        </div>
    );
};

export { MapLocationDetails };