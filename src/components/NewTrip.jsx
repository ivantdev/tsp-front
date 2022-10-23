import '../styles/NewTrip.css'
import { Name } from './Name'
import { NavBar } from './NavBar'
import { HeaderText } from './HeaderText'

const NewTrip = () => {
    return (
        <>
        <div className="newtrip">
            <HeaderText text_1={ 'Where'}  text_2={ 'to?' } />
            <hr />
            <Name/>
        </div>
        <NavBar/>
        </>
    )
};

export { NewTrip };