import React, {Component} from 'react'
import CommentList from '../components/CommentList'

class CommentBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      comments: [
        {
          id: 1,
          author: "Alex",
          quote: "Ace"
        },
        {
          id: 2,
          author: "Harrison",
          quote: "Don't code along"
        }
      ]
    }
  }

  //start in the constructor

  render(){
    return (
      <article>
        <h1>Test Test</h1>
        <CommentList comments={this.state.comments}/>
      </article>
    )
  }

  //then move to the render

}

export default CommentBox
