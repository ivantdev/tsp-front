import { HeaderText} from "./HeaderText";
import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext"
import { ListLocations } from "./ListLocations";
import '../styles/NewTrip.css';
import { saveToLocal } from "../utilities/saveToLocal";

const NewTrip = () => {
    const { tripPlanning, saveItem, local } = useContext(GlobalContext);
    const onChangeTripTitle = (e) => {
        const newTripPlanning = {
            ...tripPlanning,
            [e.target.name]: e.target.value,
        };

        saveToLocal( "tripPlanning", newTripPlanning, saveItem, local);
    }
    const onChangeStartPoint = (e) => {
        const newTripPlanning = {
            ...tripPlanning,
            [e.target.name]: e.target.checked
        };

        saveToLocal( "tripPlanning",newTripPlanning, saveItem, local);
    }

    return (
        <div className="trip__details">
            <HeaderText text_1={"where"} text_2={"to?"}></HeaderText>

            <div className="new-trip">
                <div className="trip__title">
                    <input type="text" className="trip__title-input" id="title" name="title" value={tripPlanning?.title ? tripPlanning.title : ""} onChange={onChangeTripTitle} placeholder="New trip"/>
                    <label htmlFor="title">
                        <i className="fa-light fa-pen"></i>
                    </label>
                </div>

                <div className="trip__start-point">
                    <div className="checkbox">
                        <input type="checkbox" name="back_to_start" id="back_to_start" checked={tripPlanning?.back_to_start ? tripPlanning.back_to_start : false} onChange={onChangeStartPoint}/>
                        <div className="icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <label htmlFor="back_to_start">back to starting point</label>
                </div>

                
                { tripPlanning?.locations && <ListLocations locations={tripPlanning.locations} />}

                <div className="new-trip__button">
                    <button className="button" type="button">start</button>
                </div>
            </div>
        </div>
    );
};

export { NewTrip };