import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/characters">Characters</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/films">Films</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/planets">Planets</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/starships">Starships</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/species">Species</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/vehicles">Vehicles</NavLink>
                </li>
            </ul>
        </div>
    )
}
