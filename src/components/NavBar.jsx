import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import "../styles/NavBar.css"

const NavBar = () => {
    const { HomeRoute, MapRoute, NewTripRoute, HistoryRoute, AccountRoute } = useContext(GlobalContext).routes;
    const { locationDetails } = useContext(GlobalContext);
    const [ expanded, setExpanded] = useState(false);
    const { navState } = useContext(GlobalContext);

    useEffect(() => {
        if (locationDetails) {
            setExpanded(false);
        }
    }, [locationDetails]);
    return (
        <div className={(navState?.active ? "nav-container active" : "nav-container") + (expanded ? " expanded" : "")}>
            <nav className="navbar">
                <div className="navbar__expand-button">
                    <button onClick={() => {
                        setExpanded(!expanded);
                    }}>
                        <i className="fa-light fa-angles-up"></i>
                    </button>
                </div>
                <ul>
                    <li className="nav-item">
                        <Link className={navState?.home ? "active": ""} to={ HomeRoute }>
                            <i className="fa-light fa-home-blank"></i>
                            <span>home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navState?.map ? "active": ""} to={ MapRoute }>
                            <i className="fa-light fa-map"></i>
                            <span>map</span>
                        </Link>
                    </li>
                    <li className="nav-item plus">
                        <Link className={navState?.new ? "active": ""} to={ NewTripRoute }>
                            <i className="fa-duotone fa-wand-magic-sparkles"></i>
                            <span>new trip</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navState?.history ? "active": ""} to={ HistoryRoute }>
                            <i className="fa-light fa-clock-rotate-left"></i>
                            <span>history</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navState?.account ? "active": ""} to={ AccountRoute }>
                            <i className="fa-light fa-user"></i>
                            <span>account</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export { NavBar };