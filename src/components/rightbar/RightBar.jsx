import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function RightBar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Devansh Modwel</b> and <b>1 other friend</b> have their birthdays today.</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightInfoKey">City: </span>
            <span className="rightInfoValue">Lucknow</span>
          </div>
        </div>
        <div className="rightbarInfoItem">
            <span className="rightInfoKey">Occupation: </span>
            <span className="rightInfoValue">Student</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightInfoKey">Relationship: </span>
            <span className="rightInfoValue">Single</span>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Devansh Modwel</span>
            </div>
          </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}
