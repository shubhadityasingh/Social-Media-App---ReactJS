import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react";

export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked)
    }

    const currentUser = Users.filter((u) => u.id === post.userId)[0];
  return (
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img src={"assets/" + currentUser.profilePicture} alt="" className="postProfileImg" />
                      <span className="postUsername">{currentUser.username}</span>
                      <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">
                    <MoreVert/>
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">{post?.desc}</span>
                  <img src={"assets/" + post.photo} alt="" className="postImg"/>
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img className="likeIcon" src="assets/like.png" alt="" onClick={likeHandler} />
                      <img className="likeIcon" src="assets/heart.png" alt="" onClick={likeHandler} />
                      <span className="postLikeCounter">{like} people liked this</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">{post.comment} comments</span>
                  </div>
              </div>
          </div>
      </div>
  )
}
