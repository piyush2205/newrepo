import { Button } from "@chakra-ui/react";
import "./navbar.css";
import { AiOutlineDownload } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
// import { BiDownload } from 'react-icons/bi';
const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>
            <a href="">
              <i className="uil uil-estate nav_icon"></i>
              Home
            </a>
          </li>
          {/* <li>
            <a href="">
              <i className="uil uil-user nav_icon"></i>About
            </a>
          </li> */}
          <li>
            <a href="">
              <i className="uil uil-file-alt nav_icon"></i>Skills
            </a>
          </li>
          <li>
            <a href="">
              <i className=" uil uil-secnery nav_icon"></i>Project
            </a>
          </li>
          <li>
            <a href="">
              <i className="uil uil-github-alt nav_icon"></i>Github
            </a>
          </li>
          <li>
            <a href="">
              <i className=" uil uil-message nav_icon"></i>Contact
            </a>
          </li>
          <li>
            <i className="uil uil-times nav_icon nav_close"></i>
          </li>

          <Button className="Button-navbar-resume">
            {" "}
            <div>
              <AiOutlineDownload className="icon" />
            </div>
            Resume{" "}
          </Button>
          <CiDark className="darkIcon" type="button" />
        </ul>
      </nav>

      <div className="nav_toggle">
        <i class="uil uil-apps nav_icon "></i>
      </div>
    </>
  );
};

export default Navbar;
