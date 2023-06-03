import './Layout.scss';
import Navbar from './navbar/Navbar'
import Logo from './logo/Logo'
import {Outlet} from 'react-router-dom'

function Layout(){
    return(
        <div className='layout'>
            <div className='header'>
                <Logo/>
                <h1>Karl Finkel</h1>
                <Navbar/>
            </div>
            <div className='page'>
                <span>top</span>
                <Outlet/>
                <span>bot</span>
            </div>
        </div>
    )
}

export default Layout