import { useState } from "react";

import {
  useGetHomePageDataQuery,
  useGetPlaylistDetailsQuery,
} from "../redux/saavn";

import SongCard from "../components/SongCard";
import ChartCard from "../components/ChartCard";

import { Link } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";

import { BsSearch } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import logo from "../assets/groov_icon.png";
import logo2 from "../assets/groov_icon_2.png";

import { ImGithub } from "react-icons/im";

const Explore = () => {
  const { data: homePageData } = useGetHomePageDataQuery();

  const { data: trendings } = useGetPlaylistDetailsQuery("47599074");
  const charts = homePageData?.data?.playlists;
  const albums = homePageData?.data?.trending?.albums;

  console.log(charts);
  console.log(albums);
  console.log(trendings);

  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // console.log("searched for " + input);
    navigate(`/search/${input}`);
  };

  // searchResult = searchResult?.data?.results;
  // console.log(searchResult);

  return (
    <div className="pt-3">
      {/* Top Div */}
      <div>
        {/* Logo for mobile devices */}
        <div className="flex items-center justify-between pl-2 pr-4 xl:hidden">
          <img src={logo2} alt="" className="h-[40px] w-[120px]" />
          <button
            onClick={() => {
              window.open(
                "https://github.com/animesh-chakrabarty/grooov"
              );
            }}
          >
            <ImGithub size={25} />
          </button>
        </div>
        {/* Search Bar */}
        <div className="flex items-end justify-center mt-3 mb-4 ">
          <form action="" className="flex gap-3 ">
            <input
              type="text"
              placeholder="Search for a song , album ..."
              onChange={(e) => setInput(e.target.value)}
              className="px-6 py-1 outline-none"
            />
            <button onClick={handleSubmit} className="">
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Trendings (song) */}
        <div className="flex flex-col gap-3 mt-3">
          {/* Trendings Title */}
          <div className="flex justify-between mb-1 max-xl:px-3">
            <h3 className="text-3xl font-[600] ">Trending</h3>
          </div>
          {/* Trendings Wrapper */}
          <div className="flex gap-5 overflow-y-hidden max-xl:gap-0 no-scrollbar">
            {trendings?.data?.songs?.slice(0, 11).map((song, i) => (
              <div key={song?.id}>
                <SongCard song={song} data={trendings?.data?.songs} i={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="flex mt-7 max-xl:flex-col xl:justify-center">
        {/* Top Charts */}
        <div className=" w-[65%] max-xl:w-full  max-lg:overflow-auto ">
          {/* Top Charts Title*/}
          <div className="flex items-center justify-between mb-1 max-xl:px-3">
            <h3 className="text-3xl font-[600] ">
              Top <br className="xl:hidden" />
              Charts
            </h3>
          </div>
          {/* Top Charts Wrapper*/}
          <div className="flex gap-5 max-xl:gap-1 xl:flex-wrap  overflow-auto no-scrollbar max-xl:overflow-auto max-xl:w-full max-xl:h-[200px] mt-5 mb-3">
            {charts?.slice(0, 15).map((chart, i) => {
              return (
                <div key={chart?.id}>
                  <ChartCard chart={chart} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Albums */}
        <div className=" w-[35%] max-xl:w-full ">
          {/* Albums Title */}
          <div className="flex items-center justify-between max-xl:px-3">
            <h3 className="text-3xl font-[600] ">Albums</h3>
          </div>
          {/* Albums Wrapper */}
          <div className="flex justify-start gap-5 mt-5 xl:flex-wrap max-xl:overflow-auto no-scrollbar max-xl:gap-1 ">
            {albums?.slice(0, 8).map((album) => {
              return (
                <div key={album?.id}>
                  <AlbumCard album={album} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
