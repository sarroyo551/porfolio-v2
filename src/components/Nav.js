import React from 'react'

function Nav(props) {
  return (
      <ul id='navBar'>
        <li onClick={ () => props.setCurrentPage('About')}>About</li>
        <li onClick={ () => props.setCurrentPage('Portfolio')}>Portfolio</li>
        <li onClick={ () => props.setCurrentPage('Contact')}>Contact</li>
        <li onClick={ () => props.setCurrentPage('Resume')}>Resume</li>
      </ul>
  )
}

export default Nav