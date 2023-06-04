import './About.scss'
import headshot from'../../../assets/img/headshot.png'

function About(){
    const profile = {
        name: 'Karl Finkel',
        img: headshot,
        intro: `"As a child, I loved building things with lego's. Now, thanks to  the UTA Web Development Bootcamp, I have rekindled that passion of building with code."`,
        bio: `A quick snapshot of my story. I was born and raised in Minnesota. I spent most of my youth playing every sport my parent's could get me to on time, terrorizing my younger sisters, and exploring my little piece of the world.\n \tI graduated from Lakeville North High School while competing in football, hockey, soccer, and track. I then continued my student athlete career at the University of Minnesota Duluth where I acquired a major in criminology and a minor in accounting. I also earned several all conference awards along with many good friends playing defensive end for the UMD Bulldogs football team.\n During my time in college, I also worked as a street maintenance worker, bartender, and security along with an internship with the Duluth Police Department working with their financial crimes unit. Upon graduation, I began working as a traveling CP technician for a consulting company working in the field of oil and gas.\n\t After a year and a half I became a project coordinator and started managing survey teams and small construction projects. During the 2020 Covid-19 pandemic I began my remote working career and my initial study of coding and web development. I transferred to Austin, TX in 2021 and obtained my CAPM certification in 2022.\n\t in January of 2023, my grandfather passed away and I was let go from my job. I took some time time to return to Minnesota and be with family which is when I decided it was time for a change in career field. I then began the journey of completing the University of Texas Austin Web Development Bootcamp and my goal of building to change the world. `,
        github: 'https://github.com/Meister7K',
        linkedin:'https://www.linkedin.com/in/karl-finkel-188a83199/',
    };
    return(
        <>
        <div className='about'>
            <h3>About Me</h3>
            <img className='headshot' src={headshot} alt=''/>
            <p className='intro'>{profile.intro}</p>
            <br/>
            <p className='bio'>{profile.bio}</p>
        </div>
        <div className='resume'>
            <button className='download'>Download Resume</button>
        </div>
        <div className='more-info'>
            <h4>Additional Links</h4>
            <ul>
                <li>linkedin</li>
                <li>github</li>
                <li></li>
            </ul>
        </div>
        </>
    )
}

export default About