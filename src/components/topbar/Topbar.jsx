import './Topbar.css'
import {Search, Person4, Chat, CircleNotifications} from '@mui/icons-material';



export default function Topbar() {
  return (
    <div className='Topbarcontainer'>

      <div className="Topbarleft">

        <span className="logo">SocialApp</span>

      </div>
      <div className="Topbarcenter">
        <div className="Searchbar">
          <Search className='searchIcon'/>
          <input placeholder="Search friend or post" className="searchInput" />
        </div>
      </div>
      <div className="Topbarright">

        <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>  
          <span className="topbarlink">Timeline</span>
        </div>

        <div className="topbarIcons">

          <div className="topbariconItem">
            <Person4/>
            <span className="topbarIconbadge">1</span>
          </div>

          <div className="topbariconItem">
            <Chat/>
            <span className="topbarIconbadge">2</span>
          </div>

          <div className="topbariconItem">
            <CircleNotifications/>
            <span className="topbarIconbadge">3</span>
          </div>

        </div>

        <img src="assets/person/1.jpeg" alt="" className='topimg' />



      </div>


      
      
    </div>
  )
}
