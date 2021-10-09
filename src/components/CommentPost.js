import React from "react";

function CommentPost({ user, comment }) {
  return (
    <div>
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  )
}

export default CommentPost;