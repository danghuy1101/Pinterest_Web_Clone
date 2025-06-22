import "./leftBar.css";
import { Link } from "react-router";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link href="/" className="menuIcon">
          <img src="/general/logo.png" alt="" className="logo" />
        </Link>
        <Link href="/" className="menuIcon">
          <img src="/general/home.svg" alt="" />
        </Link>
        <Link href="/create" className="menuIcon">
          <img src="/general/create.svg" alt="" />
        </Link>
        <Link href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="" />
        </Link>
        <Link href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="" />
        </Link>
      </div>
      <a href="/" className="menuIcon">
        <img src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
