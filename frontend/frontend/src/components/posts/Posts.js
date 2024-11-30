import "./posts.css"
import { MoreVert } from "@mui/icons-material"

import { Users } from "../../dummy"
import { useState } from "react"

export default function Posts({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  const public_folder=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.userId.displayPicture}
              alt=""
            />
            <span className="postUsername">
              {post.userId.username}
            </span>
            <span className="postDate">{new Date(post.createdAt).toLocaleString()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.caption}</span>
          <img className="postImg" src={post.image} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={public_folder+"/like.png"} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={public_folder+"/heart.png"} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} likes</span>
          </div>
          <div className="postBottomRight">
            {/* <span className="postCommentText">{post.comment} comments</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}