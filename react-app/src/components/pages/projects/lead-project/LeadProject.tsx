import './LeadProject.scss'
import React from 'react'

function LeadProject(props){

    return(
        <div className='lead-project'>{
            props.projectList.map((project)=>{
              return(<>{project.highlighted ? (<div key={project.id}>
                    <img src={project.src} alt=''/>
                    <h2 className='project-title'>{project.title}</h2>
                <p className='description'>{project.desc}</p>
                <a className='deploy' href={project.deployed} target='_blank'><button className='btn'>Project Link</button></a>
                {project.inProgress ?  (<span>Under Development</span>):('')}
                <a className='repo' href={project.repo} target='_blank'>
                    <button className='btn'>Repository</button>
                </a>
                
            </div> 
            ):('')}</>)
        })
            
        }
        </div>
    )
}

export default LeadProject