import "./postPage.css";
import Image from "../image/Image";
import PostInteractions from "../postInteractions/postInteractions";
import { Link } from "react-router-dom";
import Comments from "../comments/comments";
const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails"></div>
        <PostInteractions />
        <Link to="/john">
          <Image path="/general/noAvatar.png" />
          <span>John Doe</span>
        </Link>
        <Comments />
      </div>
    </div>
  );
};
export default PostPage;
