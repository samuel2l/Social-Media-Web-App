import Post from "../posts/Posts"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = !username? await axios.get("/post/"):await axios.get(`/user/profile/${username}/`)
        setPosts(res.data)
      } catch (e) {
      }
    }

    fetchPosts()
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
