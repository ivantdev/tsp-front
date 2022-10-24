import "../styles/ListLocationItem.css";

const ListLocationItem = ({ location }) => {
    return (
        <div className="location__item">
            <span className="dot"></span>
            <div className="text">
                <span className="location__name">{location.address}</span>
                <span className="location__description">{location.address_complement}</span>
            </div>
        </div>
    );
};

export { ListLocationItem };