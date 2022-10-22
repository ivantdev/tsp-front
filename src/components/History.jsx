import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Log } from "./Log";

const History = () => {
    const { local } = useContext(GlobalContext);
    if ( !local?.token ) {
        return(
            <Log />
        )
    }
    return (
        <div className="history">

        </div>
    )
};

export { History };