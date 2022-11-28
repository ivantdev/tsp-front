const ListTripItem = ({ trip, setDetails }) => {
    const onClickDetails = () => {
        setDetails(trip);
    }

    return(
        <div className="history__item">
            <div className="item__title">
                <span>{trip.title || "An awesome trip"}</span>
            </div>
            <div className="item__locations">
                <span>{trip.locations[0].address} → {trip.locations[1].address}...</span>
            </div>
            <div className="item__resume">
                <span>total {trip.locations.length} places, { parseFloat(trip.distance / 100).toFixed(2) }km</span>
            </div>
            <div className="item__date">
                <span>{ new Date(trip.created_on).toLocaleDateString("es-CO") }</span>
            </div>

            <div className="item__go_details">
                <button onClick={onClickDetails}>
                    <span className="icon">
                        <i className="fa-light fa-circle-info"></i>
                    </span>
                </button>
            </div>
        </div>
    )
};

export { ListTripItem };