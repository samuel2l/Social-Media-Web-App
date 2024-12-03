import "./profile.css";
import Nav from "../../components/navbar/Nav";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function Profile() {
  const public_folder=process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const params=useParams()
  // useParams is a React Router Hook that allows you to access the dynamic parameters in the URL. It’s commonly used for retrieving route parameters in Single Page Applications (SPAs).
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res =await axios.get(`/user?username=${params.username}`)        
        setUser(res.data)
      } catch (e) {
      }
    }

    fetchPosts()
  }, [])

  return (
    
    <>
      <Nav />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.bannerPicture==''?public_folder+"/IMG_2835.JPG":user.bannerPicture}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.displayPicture==''?public_folder+"/IMG_2835.JPG":user.displayPicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.bio?user.bio:''}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={params.username} />
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}