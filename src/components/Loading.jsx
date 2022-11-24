import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Loading = () => {
    const { loading } = useContext(GlobalContext);

    return (
        <div id="loading" className={loading ? "loading active" : "loading"}>
            <span className="icon">
                <i className="fa-duotone fa-spinner-third fa-spin"></i>
            </span>
        </div>
    );
};

export { Loading };