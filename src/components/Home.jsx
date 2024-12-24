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
                <div className="home__text-content">
                    <h1>App purpose</h1>
                    <p>This application is designed to solve the Traveling Salesman Problem (TSP), 
                        a classic optimization challenge in which the objective is to determine the shortest 
                        possible route that visits a series of locations and returns to the starting point. 
                        Using advanced algorithms and interactive mapping features, the app provides 
                        efficient and visually intuitive solutions for logistics, route planning, 
                        and delivery optimization. Whether you're managing a fleet or simply exploring 
                        optimal travel paths, this tool is your reliable companion for tackling complex 
                        routing scenarios.
                    </p>
                </div>
            </div>
        </>
    )
};

export { Home };