import React, { useState } from "react";
import Comments from "./Comments";

function Video({ videoData }) {
  const [upVotes, setUpVotes] = useState(videoData.upvotes);
  const [downVotes, setDownVotes] = useState(videoData.downvotes);
  const [commentsHidden, setCommentsHidden] = useState(false);

  function handleUpVote() {
    setUpVotes(upVotes + 1);
  }

  function handleDownVote() {
    setDownVotes(downVotes - 1);
  }

  function toggleComments() {
    setCommentsHidden(!commentsHidden);
  }

  return (
    <>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
      />
      <h2>{videoData.title}</h2>
      <p>{videoData.views} Views | Uploaded {videoData.createdAt}</p>
      <div>
        <button onClick={handleUpVote}>{upVotes} 👍</button>
        <button onClick={handleDownVote}>{downVotes} 👎</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={toggleComments}>{commentsHidden ? "Show Comments" : "Hide Comments"}</button>
      </div>
      <hr />
      <Comments hidden={commentsHidden} comments={videoData.comments} />
    </>
  )
}

export default Video;