import { ListTripItem } from "./ListTripItem";

const ListTrips = ({ trips, setDetails }) => {
    return(
        <div className="history__list">
            {
                trips.map((t) => (
                    <ListTripItem key={t.id}  trip={t} setDetails={setDetails} />
                ))
            }
        </div>
    )
};

export { ListTrips };