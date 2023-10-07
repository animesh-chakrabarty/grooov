import React from "react";
import {
  useGetHomePageDataQuery,
  useGetPlaylistDetailsQuery,
} from "../redux/saavn";

import SongCard from "../components/SongCard";
import PlaylistCard from "../components/PlaylistCard";

import { Link } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";

const Explore = () => {
  const { data: homePageData } = useGetHomePageDataQuery();

  console.log(homePageData);

  // const trendings = homePageData?.data?.albums;
  const featuredPlaylists = homePageData?.data?.playlists;
  const albums = homePageData?.data?.trending?.albums;

  console.log(featuredPlaylists);
  // featuredPlaylists.map((list,i)=>{
  //   if(list)
  // })

  const { data: trendings } = useGetPlaylistDetailsQuery("110858205");

  console.log(trendings);
  // console.log(charts);

  return (
    <div className="">
      {/* Top Div */}
      {/* Trendings (song) */}
      <div className="top flex flex-col gap-3 mt-3">
        {/* Title & see more */}
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">Trending</h3>
          <Link
            className="text-gray-700 cursor-pointer lg:mr-3"
            to="/trendings"
          >
            see more...
          </Link>
        </div>
        {/* Wrapper */}
        <div className="flex gap-5 max-lg:gap-3 overflow-auto no-scrollbar">
          {trendings?.data?.songs?.slice(0, 10).map((song, i) => (
            <div key={song?.id}>
              <SongCard song={song} data={trendings?.data?.songs} i={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Div */}
      <div className="bottom flex gap-5 mt-7 max-lg:flex-col ">
        {/* Featured Playlist */}
        <div className="w-3/4 max-lg:w-full  max-lg:overflow-auto ">
          {/* Featured Playlist Title*/}
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              Featured <br className="lg:hidden" />
              Playlists
            </h3>
            <Link className="text-gray-700 cursor-pointer lg:mr-6" to="/charts">
              see more...
            </Link>
          </div>
          {/* Featured Playlist Wrapper*/}
          <div className="flex gap-5 max-lg:gap-3 lg:flex-wrap  overflow-auto no-scrollbar max-lg:overflow-auto max-lg:w-full max-lg:h-[200px] mt-5 mb-3">
            {featuredPlaylists?.slice(0, 15).map((playlist, i) => {
              return (
                <div key={playlist?.id}>
                  <PlaylistCard playlist={playlist} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Albums */}
        <div className="w-[35%] max-lg:w-full b">
          {/* Title & See more */}
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Albums</h3>
            <Link className="text-gray-700 cursor-pointer mr-3" to="/albums">
              see more...
            </Link>
          </div>
          {/* Wrapper */}
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
