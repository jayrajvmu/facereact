import "./Sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from '../../components/closeFriend/CloseFriend';



import {RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, Work, Event, School} from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className="sidebar">

        <div className="sidebarWrapper">

          <ul className="sidebarList">

            <li className="sidebarListItem">
              <RssFeed className="sidebarListIcon"/>
              <span className="sidebarListItemText">Feed</span>
            </li>

            <li className="sidebarListItem">
              <Chat className="sidebarListIcon"/>
              <span className="sidebarListItemText">Chats</span>
            </li>

            <li className="sidebarListItem">
              <PlayCircle className="sidebarListIcon"/>
              <span className="sidebarListItemText">Videos</span>
            </li>

            <li className="sidebarListItem">
              <Group className="sidebarListIcon"/>
              <span className="sidebarListItemText">Groups</span>
            </li>

            <li className="sidebarListItem">
              <Bookmark className="sidebarListIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>

            <li className="sidebarListItem">
              <HelpOutline className="sidebarListIcon"/>
              <span className="sidebarListItemText">Questins</span>
            </li>

            <li className="sidebarListItem">
              <Work className="sidebarListIcon"/>
              <span className="sidebarListItemText">Jobs</span>
            </li>

            <li className="sidebarListItem">
              <Event className="sidebarListIcon"/>
              <span className="sidebarListItemText">Events</span>
            </li>

            <li className="sidebarListItem">
              <School className="sidebarListIcon"/>
              <span className="sidebarListItemText">Course</span>
            </li>


          </ul>

          <button className="sidebarButton">Show more</button>

          <hr className="sidebarHr" />

          <ul className="sidebarFriendList">

            {Users.map((u)=>{
              return(
                <CloseFriend key={u.id} user={u}/>
              )
            })}

           


          </ul>

        </div>
      
    </div>
  )
}
