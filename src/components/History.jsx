import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HeaderText } from "./HeaderText";
import { Log } from "./Log";
import { Message } from "./Message";
import { useEffect } from "react";
import { get } from "../utilities/get";
import "../styles/History.css";
import { useState } from "react";
import { HistoryEmpty } from "./HistoryEmpty";
import { ListTrips } from "./ListTrips";

const History = () => {
    const { local, endpoint, url_paths, message, setMessage, setLoading } = useContext(GlobalContext);
    const [ trips, setTrips ] = useState(null);
    const [ page, setPage ] = useState(0);

    const getTrips = async () => {
        setLoading(true);
        const config = {
            headers: {
                "Authorization": `Bearer ${local.token}`,
            }
        };
        const { status, response} = await get(endpoint + url_paths.history + `${page}`, config);
        if(status != 200) {
            setMessage(response.message);
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } else {
            
        }

        setLoading(false);
    };
    
    useEffect(() => {
        if(local?.token) {
            getTrips();
        }
        
    }, [local]);

    if ( !local?.token ) {
        return(
            <Log />
        )
    }

    return (
        <div className="history">
            <HeaderText  text_1={"latest"} text_2={"trips"} />
            <div className="sort-icon">
                <i className="fa-light fa-arrow-down-wide-short"></i>
            </div>

            <div className="history__content">
                {message && <Message message={message}/>}
                {!trips && <HistoryEmpty />}
                {trips && <ListTrips data={trips} />}
            </div>

        </div>
    )
};

export { History };