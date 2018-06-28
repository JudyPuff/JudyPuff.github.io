import React from 'react'

const Header = props => {
  return (
    <header>
      <h2><button><a href={props.link}>Home</a></button>{props.title}</h2>
    </header>
  )
}

export default Header
