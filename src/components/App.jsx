import { useContext } from 'react';
import '../styles/App.css';
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';
import { Home } from "./Home"
import { MapView } from './MapView';
import { NewTrip } from './NewTrip';
import { History } from './History';
import { Account } from './Account';

const App = () => {
    const { HomeRoute, MapRoute, NewTripRoute, HistoryRoute, AccountRoute } = useContext(GlobalContext).routes;
    return (
        <div className="app">
            <p>This is home</p>
            <Routes>
                <Route path={ HomeRoute } element={<Home />} />
                <Route path={ MapRoute } element={<MapView />} />
                <Route path={ NewTripRoute } element={<NewTrip />} />
                <Route path={ HistoryRoute } element={<History />} />
                <Route path={ AccountRoute } element={<Account />} />
            </Routes>
        </div>
    );
}

export { App };
