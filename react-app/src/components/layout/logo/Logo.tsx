import'./Logo.scss'
import deer from '../../../assets/img/deer.svg'

function Logo(){
    return(
        <>
        <img className='logo' src={deer} alt='logo'/>
        </>
    )
}

export default Logo