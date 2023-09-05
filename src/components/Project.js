import React from 'react'

function Project(props) {
  return (
      <div class="project">
                <h3 style={{textAlign:'center', marginBottom: '10px'}}>{props.project.title}</h3>
                <a href={props.project.link}target="_blank">
                <img className='projectImage' src={`${process.env.PUBLIC_URL}/images/${props.project.image}`} alt={props.project.alt}/>
            </a>
      </div>
  )
}

export default Project