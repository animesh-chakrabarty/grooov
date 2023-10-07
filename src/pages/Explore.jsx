import React from "react";
import {
  useGetHomePageDataQuery,
  useGetPlaylistDetailsQuery,
} from "../redux/saavn";

import SongCard from "../components/SongCard";
import ChartCard from "../components/ChartCard";

import { Link } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";

const Explore = () => {
  const { data: homePageData } = useGetHomePageDataQuery();
  const { data: trendings } = useGetPlaylistDetailsQuery("110858205");

  const charts = homePageData?.data?.playlists;
  const albums = homePageData?.data?.trending?.albums;

  console.log(charts);

  return (
    <div className="">
      
      {/* Top Div */}
      <div>
        {/* Trendings (song) */}
        <div className="flex flex-col gap-3 mt-3">
          {/* Trendings Title */}
          <div className="flex justify-between max-lg:px-3">
            <h3 className="text-2xl font-bold ">Trending</h3>
            <Link
              className="text-gray-700 cursor-pointer lg:mr-3"
              to="/trendings"
            >
              see more...
            </Link>
          </div>
          {/* Trendings Wrapper */}
          <div className="flex gap-5 max-lg:gap-1 overflow-auto no-scrollbar">
            {trendings?.data?.songs?.slice(0, 11).map((song, i) => (
              <div key={song?.id}>
                <SongCard song={song} data={trendings?.data?.songs} i={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="flex gap-5 mt-7 max-lg:flex-col ">
        {/* Top Charts */}
        <div className="w-3/4 max-lg:w-full  max-lg:overflow-auto ">
          {/* Top Charts Title*/}
          <div className="flex justify-between items-center max-lg:px-3">
            <h3 className="text-2xl font-bold">
              Top <br className="lg:hidden" />
              Charts
            </h3>
            <Link className="text-gray-700 cursor-pointer lg:mr-6" to="/charts">
              see more...
            </Link>
          </div>
          {/* Top Charts Wrapper*/}
          <div className="flex gap-5 max-lg:gap-1 lg:flex-wrap  overflow-auto no-scrollbar max-lg:overflow-auto max-lg:w-full max-lg:h-[200px] mt-5 mb-3">
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
        <div className="w-[35%] max-lg:w-full b">
          {/* Albums Title */}
          <div className="flex justify-between items-center max-lg:px-3">
            <h3 className="text-2xl font-bold">Albums</h3>
            <Link className="text-gray-700 cursor-pointer mr-3" to="/albums">
              see more...
            </Link>
          </div>
          {/* Albums Wrapper */}
          <div className="flex flex-col justify-start gap-3 mt-5 ">
            {albums?.slice(0, 7).map((album) => {
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
