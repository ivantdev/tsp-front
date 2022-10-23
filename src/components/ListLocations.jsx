import { ListLocationItem } from "./ListLocationItem";

const ListLocations = ({ locations }) => {
    return (
        <div className="details__locations">
            {
                locations && locations.map((location) => (
                    <ListLocationItem key={location.id} location={location} />
                ))
            }
        </div>
    );
};

export { ListLocations };