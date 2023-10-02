import "./App.css";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Albums from "./pages/Albums";
import Trendings from "./pages/Trendings";
import Charts from "./pages/Charts";
import Favourites from "./pages/Favourites";

import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className="wrapper flex h-[100vh] w-[100vw] ">
      {/* Side Bar */}
      <div className="max-xl:hidden w-[12%]">
        <Sidebar />
        <AudioPlayer />
      </div>
      {/* Body */}
      <div className="w-[110%] bg-[#FFFFFF] py-3 lg:px-5 max-lg:px-2 rounded-3xl max-lg:rounded-lg lg:mx-5 overflow-auto no-scrollbar max-md:w-[100%]">
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
