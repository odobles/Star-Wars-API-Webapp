import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand p-2" href="#">Star Wars API</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active p-2">
                        <a><NavLink className={({isActive})=> isActive ? 'active' : ''} to="/">Home</NavLink></a>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/people">Characters</NavLink>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/films">Films</NavLink>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/planets">Planets</NavLink>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/starships">Starships</NavLink>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/species">Species</NavLink>
                    </li>
                    <li className="nav-item p-2">
                        <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/vehicles">Vehicles</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
