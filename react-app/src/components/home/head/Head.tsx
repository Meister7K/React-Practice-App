import './Head.scss';
import Title from './title/Title';
import Nav from './nav/Nav';



function Head(){
    return (
        <div className='head'>
            <Title/>
            
            <Nav/>
        </div>
       
    )
}

export default Head;