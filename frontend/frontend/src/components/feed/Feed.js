import Post from "../posts/Posts"
import Share from "../share/Share"
import "./feed.css"

import axios from "axios"
import { useEffect, useState } from "react"
export default function Feed() {
  const [posts, setPosts] = useState([])
  const print = console.log
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("post/")
        print(res)
        setPosts(res.data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchPosts()
  }, [])
  print("POSTSSSSSS")
  print(posts)
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
