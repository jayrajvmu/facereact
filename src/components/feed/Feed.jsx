import "./Feed.css";
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import {Posts} from "../../dummyData";
import react from "react";

export default function Feed() {
  return (
    <div className="feedContainer">

      <Share/>
     {Posts && Posts.map((p)=>{

      return(
        <Post post={p} key={p.id}/>
      )


       



      })
     }
      
    </div>
  )
}
