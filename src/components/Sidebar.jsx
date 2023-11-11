import { AiFillHome } from "react-icons/ai";
import { BiSolidAlbum } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaChartSimple } from "react-icons/fa6";
import { BsFillHeartFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";

import { Link } from "react-router-dom";

import logo from "../assets/groov_icon.png";

const Sidebar = () => {
  return (
    <div className="m-2">
      {/* Hi , Welcome to Groov div */}
      <div className="cursor-pointer intro">
        <div>
          <div className="">
            <span className="text-xl text-gray-300">Hi!</span> <br />
            <span className="text-xl text-gray-300">Welcome to</span> <br />
          </div>
          <div className="ml-[-10px]">
            <img src={logo} alt="icon" />
          </div>
        </div>
      </div>

      {/* Menu - Explore , Search ... */}

      <div className="menu mt-[90px] flex flex-col gap-6 text-xl">
        {/* Menu List */}
        <div className=" text-gray-200 font-[400] cursor-pointer ">
          <ul className="flex flex-col gap-9">
            <li>
              <Link to="/">
                <div className="flex gap-3 hover:text-gray-400">
                  <AiFillHome fontSize={25} color="white" />
                  <p>Explore</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <div className="flex gap-3 hover:text-gray-400">
                  <AiOutlineSearch fontSize={25} color="white" />
                  <p>Search</p>
                </div>
              </Link>
            </li>
            {/* <li>
              <Link to="/favourites">
                <div className="flex gap-3 hover:text-gray-400">
                  <BsFillHeartFill fontSize={25} color="white" />
                  <p>Favourite</p>
                </div>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
