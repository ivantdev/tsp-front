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
import { HistoryTripDetails } from "./HistoryTripDetails";
import { TripTrack } from "./TripTrack";

const History = () => {
    const { local, endpoint, url_paths, message, setMessage, setLoading, repeatTrack } = useContext(GlobalContext);
    const [ trips, setTrips ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ loadMore, setLoadMore ] = useState(true);
    const [ details, setDetails] = useState(false);

    const getTrips = async (page) => {
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
            let data = await response.data;
            if(data.length == 0) {
                setLoadMore(false);
            }
            data = trips.concat(data);

            setTrips(data);
        }
        setLoading(false);
    };

    const onClickLoadMore = (e) => {
        e.preventDefault();
        getTrips(page+1);
        setPage(page+1);
    };
    
    useEffect(() => {
        if(local?.token) {
            getTrips(page);
        }
        
    }, [local]);

    if ( !local?.token ) {
        return(
            <Log />
        )
    }

    if( repeatTrack ) {
        return <TripTrack repeatTrip={true} />
    }

    if( details ) {
        return <HistoryTripDetails details={details} setDetails={setDetails} />
    }

    return (
        <div className="history">
            <HeaderText  text_1={"latest"} text_2={"trips"} />
            <div className="sort-icon">
                <i className="fa-light fa-arrow-down-wide-short"></i>
            </div>

            <div className="history__content">
                {message && <Message message={message}/>}
                {trips.length < 1 && <HistoryEmpty />}
                {trips.length > 0 && <ListTrips trips={trips} setDetails={setDetails} />}
                {trips.length > 0 && loadMore && <div className="history__more"><button className="button" onClick={onClickLoadMore} >load more</button></div>}
                
            </div>

        </div>
    )
};

export { History };