import React from "react";
import CommentPost from "./CommentPost";

function Comments({ hidden, comments}) {

  const renderComments = comments.map(comment => {
    return <CommentPost key={comment.id} user={comment.user} comment={comment.comment} />
  })

  if (hidden) {
    return (
      <div>
        Comments are hidden
      </div>
    )
  }
  return (
    <div className="comments">
      <h3>{comments.length} Comments</h3>
      {renderComments}
    </div>
  )
}

export default Comments;