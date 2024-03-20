import React from 'react'
import {
  CommentText,
  CommentGroup,
  CommentContent,
  CommentAuthor,
  Comment,
} from 'semantic-ui-react'

const CommentExampleMetadata = (props) => (
  <CommentGroup>
    <Comment>
      <CommentContent>
        <CommentAuthor>{props.comment.title}</CommentAuthor>
        <CommentText>
          {props.comment.body}
        </CommentText>
      </CommentContent>
    </Comment>
  </CommentGroup>
)

export default CommentExampleMetadata