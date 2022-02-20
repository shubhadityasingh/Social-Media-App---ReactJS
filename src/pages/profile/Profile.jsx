import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
  <>
    <Topbar/>
    <div className="profile">
      <SideBar/>
      <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
          <img src="assets/cover/2.jpg" alt="" className="profileCoverImg" />
          <img src="assets/person/1.jpeg" alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Shubhaditya Singh</h4>
            <span className="profileInfoDesc">hello</span>
        </div>
        </div>
        <div className="profileRightBottom">
            <Feed/>
            <RightBar profile/>
        </div>
      </div>
    </div>
  </>
  )
}
