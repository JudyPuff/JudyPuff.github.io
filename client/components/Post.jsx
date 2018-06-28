import React from 'react'

const Post = props => {
  return (
    <div className='post'>
      <h3>{props.title}</h3>
      <br/>
    -  {props.date}
      <br/>
      Comments: {props.comments}
      <br/>
      {props.paragraphs.map(para => {
        return (
          <p key={para}>{para}</p>
        )
      }

      )}

    </div>
  )
}

export default Post