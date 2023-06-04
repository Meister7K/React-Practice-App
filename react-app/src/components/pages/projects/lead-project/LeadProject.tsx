import './LeadProject.scss'
import React from 'react'

function LeadProject(props){

    return(
        <>{
            props.projectList.map((project)=>{
              return(<>{project.highlighted ? (<div className='lead-project' key={project.id}>
                    <img src={project.src} alt=''/>
                    <h4 className='project-title'>{project.title}</h4>
                <p className='description'>{project.desc}</p>
                <a href={project.link} target='_blank'><button className='btn'>Project Link</button></a>
                {project.inProgress ?  (<span>Under Development</span>):('')}
                
            </div> 
            ):('')}</>)
        })
            
        }
        </>
    )
}

export default LeadProject