import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/ListLocationItem.css";

const ListLocationItem = ({ location }) => {
    const { tripPlanning, saveItem, local } = useContext(GlobalContext);
    const onClickDelete = (id) => {
        for(let i = 0; i < tripPlanning.locations.length; i++) {
            if(tripPlanning.locations[i].id == id) {
                const newTripPlanning = {...tripPlanning};
                newTripPlanning.locations.splice(i, i+1);
                const newLocal = {
                    ...local,
                    "tripPlanning": newTripPlanning,
                };
                saveItem(newLocal);
            }
        }
    };
    return (
        <div className="location__item">
            <span className="dot"></span>
            <div className="text">
                <span className="location__name">{location.address}</span>
                <span className="location__description">{location.address_complement}</span>
            </div>
            <div className="delete" onClick={() => {
                    onClickDelete(location.id);
                }}>
                <i className="fa-light fa-trash-can"></i>
            </div>
        </div>
    );
};

export { ListLocationItem };