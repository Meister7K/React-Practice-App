import './Projects.scss';
import LeadProject from './lead-project/LeadProject';
import ProjectList from './project-list/ProjectList';
import dungeon from '../../../assets/img/DungeonGame-GIF.gif';
import rick from '../../../assets/img/Mortys Book of Schwifty Ricktails.gif'

import eldenRing from '../../../assets/img/ER quiz.png'

import firstPort from '../../../assets/img/Personal Portfolio.gif'

const projectList = [
    {
      id: 1,
      title: "Dungeon Crawler",
      src: dungeon,
      desc: `A vintage 8-bit RPG dungeon crawler where you play as 'Ruby the Rectangle' who is fighting her way through the intricate labyrinth filled with demons and dangers.`,
      inProgress: true,
      highlighted: true,
      link: 'https://github.com/Meister7K/02-Project-Gamer4Lyfe'
    },
    {
      id: 2,
      title: "Ricksy Cocktail Generator",
      src: rick,
      desc: `A random cocktail generator with a Rick and Morty theme`,
      inProgress: false,
      highlighted: false,
    },
    {
      id: 3,
      title: "Original Portfolio",
      src: firstPort,
      desc: `My first portfolio attempt`,
      inProgress: false,
      highlighted: false,
    },
    {
      id: 4,
      title: "Elden Ring Quiz",
      src: eldenRing,
      desc: `A fun little timed quiz that lets you test your knowledge of the game Elden Ring.`,
      inProgress: false,
      highlighted: false,
    },
  ];

function Projects() {
  return (
    <div className="projects">
      <div className="lead">
        <LeadProject projectList={projectList}/>
      </div>
      <div className="project-list">
        <ul>
          <ProjectList projectList={projectList}/>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
