import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/Home.css";
import { Banners } from "./Banners";

const Home = () => {
    const { setLoading, routes } = useContext(GlobalContext);
    const { MapRoute } = routes;
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <div className="home">
                <Banners />
                <div className="home__map">
                    <Link className="home_link" to={ MapRoute }>
                        <h3>View Map</h3>
                    </Link>
                    <div className="home__map-container">
                        <img src="https://objects.ivant.dev/public/projects/tsp/imgs/map-map.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export { Home };