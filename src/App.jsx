import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Albums from "./pages/Albums";
import Trendings from "./pages/Trendings";
import Charts from "./pages/Charts";
import Favourites from "./pages/Favourites";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";

import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className=" xl:bg-gradient-to-br from-[#3D3459] via-[#171335]  to-[#383055] flex h-[100vh] w-[100vw] font-jost">
      {/* Side Bar */}
      <div className="xl:w-[12%] xl:pl-5 xl:pt-5">
        <div className="max-xl:hidden ">
          <Sidebar />
        </div>
        <AudioPlayer />
      </div>

      {/* Mobile View */}
      <div>
        {/* Mobile Nav */}
        <div className="xl:hidden h-[60px] w-full mobile-nav-bg bottom-0 absolute flex justify-between items-center text-gray-200 px-10 text-[17px] pt-1 bg-opacity-70 bg-[#803bc0]">
          <Link className="flex flex-col justify-center items-center " to="/">
            <AiFillHome size={22} />
            Home
          </Link>
          <Link
            className="flex flex-col justify-center items-center "
            to="/search"
          >
            <AiOutlineSearch size={22} />
            Search
          </Link>
          <Link
            className="flex flex-col justify-center items-center "
            to="favourites"
          >
            <LuLibrary size={22} />
            Library
          </Link>
        </div>
      </div>
      {/* Routes */}
      <div className="w-[110%] bg-[#FFFFFF] py-3 xl:px-5 max-xl:px-0 md:rounded-3xl xl:mx-4 overflow-auto no-scrollbar xl:m-[15px] max-xl:h-[calc(100%-180px)]">
        <Routes>
          <Route path="/" element={<Explore />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/trendings" element={<Trendings />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/search/:searchTerm" element={<Search />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
