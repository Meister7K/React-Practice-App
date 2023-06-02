import deer from '/src/assets/img/deer.svg'
import './Title.scss'

function Title(){
    return (
        <div> 
        <img src={deer} alt=""/>
        <h1>Karl Finkel</h1>
        </div>
       
    )
}

export default Title;