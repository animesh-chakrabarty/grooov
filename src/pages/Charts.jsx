import React from "react";
import { useGetPlaylistDetailsQuery } from "../redux/saavn";
import { useParams } from "react-router-dom";
import SongCard from "../components/SongCard";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  pause,
  play,
  setCurrentSongIndex,
  setData,
} from "../redux/playerSlice";

const Charts = () => {
  const { chartId } = useParams();
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentPlayingData = useSelector((state) => state.player.data);

  // console.log(chartId);

  const { data } = useGetPlaylistDetailsQuery(chartId);
  const chartDetails = data?.data;
  // console.log(chartDetails);

  const flag =
    JSON.stringify(currentPlayingData) === JSON.stringify(chartDetails?.songs);

  const handlePlay = () => {
    // console.log(albumSongs);
    dispatch(play());
  };

  const handlePause = () => {
    dispatch(pause());
  };

  return (
    <div className=" h-full w-full overflow-auto no-scrollbar pb-5 xl:pt-3">
      {/* Top Div */}
      <div className="bg-red-500 h-[35%] w-full px-10 max-md:px-4 py-4 flex items-center justify-center gap-[7%] bg-opacity-50 xl:rounded-[19px]">
        <img src={chartDetails?.image[2]?.link} alt="" className="h-[90%]" />
        <div className="flex flex-col justify-center gap-2  max-md:gap-1 text-gray-600 h-full">
          <p className="text-lg max-md:hidden">Playlist</p>
          <h1 className="text-5xl max-md:text-3xl">{chartDetails?.name}</h1>
          <p className="text-lg">Total Songs : {chartDetails?.songCount}</p>
          <div className="bg-blu-5000">
            {isPlaying && flag ? (
              <button className="" onClick={handlePause}>
                <BsFillPauseCircleFill size={40} color="white" />
              </button>
            ) : (
              <button className="">
                <AiFillPlayCircle
                  size={40}
                  color="white"
                  onClick={() => {
                    handlePlay();
                    dispatch(setData(chartDetails?.songs));
                    dispatch(setCurrentSongIndex(0));
                  }}
                />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Bottom Div */}
      <div className=" h-[70%] w-full flex flex-wrap gap-3 items-center justify-center pt-5">
        {chartDetails?.songs?.map((song, i) => (
          <div key={song?.id} className="pb-3">
            <SongCard data={chartDetails?.songs} song={song} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
