import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Musicale App',
      link: 'https://musicale-app-f8a5312a774d.herokuapp.com/',
      image: 'musicale.png',
      alt: 'Musicale App'
    },
    {
      title: 'Activity Roulette',
      link: 'https://sarroyo551.github.io/Activity-Roulette/',
      image: 'ARproject.png',
      alt: 'Activity Roulette'
    },
    {
      title: 'FitGuide',
      link: 'https://health-wellness-intro-planner-15375fd8b435.herokuapp.com/',
      image: 'fitguide.png',
      alt: 'FitGuide app'
    }
  ]
  return (
    <div className='content'>
      <h1>Portfolio</h1>
      <div id='projectsContainer'> 
        {projects.map((project) => <Project project={project}/>)}
      </div>
    </div>
    
  )
}

export default Portfolio