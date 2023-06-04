import './Footer.scss'

function Footer(){
    const links={
        github: 'https://github.com/Meister7K',
        linkedin:'https://www.linkedin.com/in/karl-finkel-188a83199/'
    }
    return(
        <>
        <ul>
            <a href={links.github} target='_blank'><li>Github</li></a>
            <a href={links.linkedin} target='_blank'><li>LinkedIn</li></a>
        </ul>
        </>
    )
}

export default Footer