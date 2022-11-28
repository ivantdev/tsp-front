import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HeaderText } from "./HeaderText";

const HistoryTripDetails = ({ details, setDetails }) => {
    const locations = [...details.locations];
    locations.pop();

    const { setRepeatTrack } = useContext(GlobalContext);

    const onClickClose = () => {
        setDetails(false);
    };

    const onClickRepeatTrip = () => {
        setRepeatTrack(details.path);
    };

    return (
        <div className="history__details">
            <HeaderText text_1={"trip"} text_2={"details"} />
            
            <div className="details__content">
                <div className="details__title">
                    <span>{details.title}</span>
                </div>
                <div className="details__resume">
                    <span className="resume__total"><span className="bold-blue">total places: </span>{locations.length}</span>
                    <span className="resume__distance"><span className="bold-blue">total distance: </span>{parseFloat(details.distance / 100).toFixed(2)} km</span>
                    <span className="resume__distance"><span className="bold-blue">trip created on: </span>{new Date(details.created_on).toLocaleDateString("es-CO")}</span>
                </div>
                <div className="details__locations">
                    {
                        locations.map((location) => (
                            <div className="locations__location" key={location.id}>
                                <div className="location__dot">
                                    <span className="dot">{location.id}</span>
                                </div>
                                <div className="text">
                                    <span className="location__name">{location.address}</span>
                                    <span className="location__description">{location.address_complement}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="details__repeat">
                    <button onClick={onClickRepeatTrip}>
                        <i className="fa-light fa-repeat"></i>
                    </button>
                </div>
            </div>

            <div className="details__close">
                <button onClick={onClickClose} title="repeat trip and go to map">
                    <i className="fa-light fa-xmark"></i>
                </button>
            </div>
        </div>
    );
};

export { HistoryTripDetails };