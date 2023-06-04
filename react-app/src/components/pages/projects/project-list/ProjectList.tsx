import './ProjectList.scss'
import React from 'react';



function ProjectList(props){
    return(
        <>
        {
            props.projectList.map((project)=>{
                return(
                    <>{!project.highlighted ? (<li className='list-item' key={project.id}>
                        <img src={project.src}/>
                        <h5 >{project.title}</h5>
                        <p>{project.desc}</p>
                        <a href={project.link} target='_blank'>
                            <button className='btn'>Project Link</button>
                        </a>
                        {project.inProgress ?  (<span>Under Development</span>):('')}
                       

            
                    </li>):('')}</>
                )

            })
        }
       </> 
    )
}

export default ProjectList