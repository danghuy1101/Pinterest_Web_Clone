import "./profilePage.css";
import Image from "../components/Image/Image";
import { useState } from "react";
import Gallery from "../Gallery/Gallery";
import Collections from "../collections/collections";
const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path="/general/noAvatar.png"
        alt=""
      />
      <h1>John Doe</h1>
      <span className="profileName">@johndoe</span>
      <div className="followCounts">10 followers | 20 following</div>
      <div className="profileIntercations">
        <Image path="/general/share.png" alt="" />
        <div className="profileButtons"></div>
        <button>Message</button>
        <button>Follow</button>
        <Image path="/general/more.png" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Saved
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Created
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
