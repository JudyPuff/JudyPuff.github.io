import React from 'react'

const Footer = props => {
  return (
    <footer>
      <p>Copyright &copy; {props.copyright}, {props.author}.</p>
    </footer>
  )
}

export default Footer