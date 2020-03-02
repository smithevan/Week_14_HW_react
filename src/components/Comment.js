import React from 'react'


function Comment({author, children}){  //could put props in the bracket and then props.author between the p tags
  //const {author} = props  ----is essentially what's happening behind the scenes
  return (
    <li>
      <h4>{children}</h4>
      <p>{author}</p>
    </li>
  )
}

//children is anything between opening/closing tags <comment></comment>
export default Comment
