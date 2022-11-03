import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import "../styles/NavBar.css"

const NavBar = () => {
    const { HomeRoute, MapRoute, NewTripRoute, HistoryRoute, AccountRoute } = useContext(GlobalContext).routes;
    const { navState } = useContext(GlobalContext);
    return (
        <div className={navState?.active ? "nav-container active" : "nav-container"}>
            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <Link className={navState?.home ? "active": ""} to={ HomeRoute }>
                            <i className="fa-light fa-home-blank"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navState?.map ? "active": ""} to={ MapRoute }>
                            <i className="fa-light fa-map"></i>
                        </Link>
                    </li>
                    <li className="nav-item plus">
                        <Link className={navState?.new ? "active": ""} to={ NewTripRoute }>
                            <i className="fa-duotone fa-wand-magic-sparkles"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navState?.history ? "active": ""} to={ HistoryRoute }>
                            <i className="fa-light fa-clock-rotate-left"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navState?.account ? "active": ""} to={ AccountRoute }>
                            <i className="fa-light fa-user"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export { NavBar };