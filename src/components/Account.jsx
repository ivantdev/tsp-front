import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Log } from "./Log";

const Account = () => {
    const { local } = useContext(GlobalContext);
    if ( !local?.token ) {
        return(
            <Log />
        )
    }
    return (
        <></>
    )
};

export { Account };