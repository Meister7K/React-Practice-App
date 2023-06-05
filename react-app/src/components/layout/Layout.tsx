import './Layout.scss';
import Navbar from './navbar/Navbar'
import Logo from './logo/Logo'
import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'

function Layout(){
    return(
        <div className='layout'>
            <div className='header'>
                <Logo/>
                <h1>Karl Finkel</h1>
                <Navbar/>
            </div>
            <div className='page'>
                
                <Outlet/>
              
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout