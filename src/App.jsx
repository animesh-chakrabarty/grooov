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
    <div className=" md:bg-gradient-to-br from-[#3D3459] via-[#171335]  to-[#383055] flex h-[100vh] w-[100vw] font-jost">
      {/* Side Bar */}
      <div className="max-xl:hidden w-[12%] pl-5 pt-5">
        <Sidebar />
        <AudioPlayer />
      </div>
      {/* Body */}
      {/* Mobile Nav */}
      <div className="md:hidden h-[70px] w-full mobile-nav-bg bottom-0 absolute flex justify-between items-center text-white px-8 text-[17px] pt-1">
        <Link className="flex flex-col justify-center items-center " to="/">
          <AiFillHome size={25} />
          Home
        </Link>
        <Link
          className="flex flex-col justify-center items-center "
          to="/search"
        >
          <AiOutlineSearch size={25} />
          Search
        </Link>
        <Link
          className="flex flex-col justify-center items-center "
          to="favourites"
        >
          <LuLibrary size={25} />
          Library
        </Link>
      </div>
      {/* Routes */}
      <div className="w-[110%] bg-[#FFFFFF] py-3 lg:px-5 max-lg:px-0 md:rounded-3xl lg:mx-5 overflow-auto no-scrollbar md:m-[15px] max-md:h-[calc(100%-90px)]">
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
