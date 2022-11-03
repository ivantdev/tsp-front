import '../styles/NewTrip.css';
import { HeaderText} from "./HeaderText";
import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext"
import { ListLocations } from "./ListLocations";
import { saveToLocal } from "../utilities/saveToLocal";
import { Message } from "./Message";
import { post } from "../utilities/post";
import { TripOnMap } from "./TripTrack";

const NewTrip = () => {
    const { tripPlanning, saveItem, local, message, setMessage, endpoint, url_paths, track, setTrack } = useContext(GlobalContext);
    console.log(track);
    const onClickStart = async () => {
        if(tripPlanning.locations.length  !== 2) {
            setMessage("please select only 2 locations");
            setTimeout(() => {
                setMessage(null);
            }, 5000)
            return
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${local.token}`
            }
        };
        const data = {
            ...tripPlanning
        };

        const { status, response } = await post(endpoint+url_paths.shortestpath, data, config);

        if (status === 401) {
            setMessage(response.message);
            const accountButton = document.querySelectorAll(".navbar ul .nav-item")[4];
            accountButton.classList.add("animation");
            setTimeout(() => {
                accountButton.classList.remove("animation");
                setMessage(null);
            }, 2000)
        } else if (status === 200 ) {
            const newTrack = {
                ...tripPlanning,
                path: response.path,
            };
            setTrack(newTrack);

        } else {
            setMessage("Unexpected error");
            setTimeout(() => {
                setMessage(null);
            }, 2000)
        }


    };
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

    if( track ) {
        return <TripOnMap />
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

                { message && <Message message={message} /> }
                
                { tripPlanning?.locations && <ListLocations locations={tripPlanning.locations} />}

                <div className="new-trip__button">
                    <button className="button" type="button" onClick={onClickStart}>start</button>
                </div>
            </div>
        </div>
    );
};

export { NewTrip };