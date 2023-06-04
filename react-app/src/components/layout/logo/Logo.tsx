import'./Logo.scss'
import logo from '../../../assets/img/hunterLogo.png'

function Logo(){
    return(
        <>
        <img className='logo' src={logo} alt='logo'/>
        </>
    )
}

export default Logo