import './Navbar.scss';
import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'




function Navbar(){

    const [showNav, setShowNav ] = useState(false);

    return(
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={()=>setShowNav(false)}>
                <img src='' className='' alt=''/>
            </Link>
            <nav className={showNav ? 'mobile-show': ''}>
                <NavLink exact='true' className='home' activeclassname='active' to='/' onClick={()=>setShowNav(false)}>
                    Home
                </NavLink>
                <NavLink exact='true' className='about' activeclassname='active' to='/about' onClick={()=>setShowNav(false)}>
                    About
                </NavLink>
                <NavLink exact='true' className='contact' activeclassname='active' to='/contact' onClick={()=>setShowNav(false)}>
                    Contact
                </NavLink>
                <NavLink exact='true' className='projects' activeclassname='active' to='/projects' onClick={()=>setShowNav(false)}>
                    Projects
                </NavLink>
            </nav>
            <div className='burger' onClick={()=> setShowNav(true)}/>

        </div>
    )
}

export default Navbar