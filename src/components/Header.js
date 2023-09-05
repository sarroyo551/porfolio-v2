import React from 'react'
import Nav from './Nav'

function Header(props) {
  return (
    <header>
      <h1>Santi Arroyo</h1>
      <Nav setCurrentPage = {props.setCurrentPage}/>
    </header>
  )
}

export default Header