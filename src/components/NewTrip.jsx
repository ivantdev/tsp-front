import '../styles/NewTrip.css'
import { Name } from './Name'
import { NavBar } from './NavBar'

const NewTrip = () => {
    return (
        <>
        <div className="newtrip">
            <h1>
                where 
                <span className="to"> to?</span> 
            </h1>
            <Name/>
        </div>
        <NavBar/>
        </>
    )
};

export { NewTrip };