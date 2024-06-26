import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from '../../components/online/Online';

export default function Rightbar() {
  


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>


        <ul className="rightbarFriendList">
          {Users.map((u)=>{
            return(
              <Online key={u.ud} user={u}/>)
})}
        </ul>

       
      </div>
    </div>
  );
}
