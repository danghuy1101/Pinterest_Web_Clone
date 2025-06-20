import "/comments.csss";
import Image from "../image/image.jsx";

const Comments = () => {
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          <div className="comment">
            <Image path="/general/noAvatar.png" alt="" />
            <div className="commentContent">
              <span className="commentUsername">John Doe</span>
              <p className="commentText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="commentTime">1h</span>
            </div>
          </div>
          5 comments
        </span>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div>😊</div>
        </div>
      </form>
    </div>
  );
};
