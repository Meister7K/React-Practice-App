import {NavLink} from 'react-router-dom';
import './Nav.scss';

function Nav(){
    return (

        <div className='nav display-4'>
            <NavLink exact='true' activeclassname='active' to='/'>
                <h4>Home</h4>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/projects'>
                <h4>Projects</h4>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/about'>
                <h4>About</h4>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/contact'>
                <h4>Contact</h4>
            </NavLink>
        </div>
               
    )
}

export default Nav;