import { NavLink } from 'react-router-dom'
import loginIcon from "/avatar-icon.svg" 

function Header() {
    return (
        <header>
            <NavLink to="login" className="login-link">
                <img 
                    src={loginIcon}
                    className="login-icon"
                />
            </NavLink>
            <NavLink to="vans" 
                className={({isActive}) => isActive ? "active-link" : null}>Vans</NavLink>
            <NavLink to="about" 
                className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
            <NavLink to="host" 
                className={({isActive}) => isActive ? "active-link" : null}>Host</NavLink>
            <NavLink to="." className='header-home'>#VANLIFE</NavLink>
        </header>
    )
}

export default Header