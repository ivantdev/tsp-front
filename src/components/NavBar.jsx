import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import "../styles/NavBar.css"

const NavBar = () => {
    const { HomeRoute, MapRoute, NewTripRoute, HistoryRoute, AccountRoute } = useContext(GlobalContext).routes;
    return (
        <div className="nav-container">
            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <Link className="active" to={ HomeRoute }>
                            <i className="fa-light fa-home-blank"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ MapRoute }>
                            <i className="fa-light fa-map-location"></i>
                        </Link>
                    </li>
                    <li className="nav-item plus">
                        <Link to={ NewTripRoute }>
                            <i className="fa-regular fa-plus"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ HistoryRoute }>
                            <i className="fa-light fa-clock-rotate-left"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ AccountRoute }>
                            <i className="fa-light fa-user"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export { NavBar };