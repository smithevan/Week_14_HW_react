import React, { Fragment } from 'react'
import Comment from './Comment'
import './CommentList.css'

function CommentList({comments}){  //same as passing in props here and then props.comments later
  const commentComponents = comments.map(comment => {
    return (
      <Comment
        author={comment.author}
        key={comment.id}
      >
        {comment.quote}
      </Comment>
    )
  })

  return (
    <Fragment>
      <h1>Heya the Comment List</h1>
      <ul className="comment-list">
        {commentComponents}
      </ul>
    </Fragment>
  )

}

export default CommentList
