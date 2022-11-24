import '../styles/App.css';
import 'react-router-dom'
import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';
import { Home } from "./Home"
import { MapView } from './MapView';
import { NewTrip } from './NewTrip';
import { History } from './History';
import { Account } from './Account';
import { NavBar } from './NavBar';
import { Loading } from './Loading';
import { updateViewportHeight } from '../utilities/updateViewportHeight';

const App = () => {
    const { HomeRoute, MapRoute, NewTripRoute, HistoryRoute, AccountRoute } = useContext(GlobalContext).routes;
    const { route, UpdateRoute, loading } = useContext(GlobalContext);
    useEffect(UpdateRoute, [route]);
    useEffect(updateViewportHeight, []);
    return (
        <div className="app">
            { loading && <Loading /> }
            <Routes>
                <Route path={ HomeRoute } element={<Home />} />
                <Route path={ MapRoute } element={<MapView />} />
                <Route path={ NewTripRoute } element={<NewTrip />} />
                <Route path={ HistoryRoute } element={<History />} />
                <Route path={ AccountRoute } element={<Account />} />
            </Routes>
            <NavBar />
        </div>
    );
}

export { App };
