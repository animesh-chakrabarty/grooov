import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  play,
  pause,
  prevSong,
  nextSong,
  setCurrentSongIndex,
  setData,
} from "../redux/playerSlice";
import AudioPlayer from "./AudioPlayer";

const SongCard = ({ data, song, i }) => {
  // console.log(i);
  // console.log(data);
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentSongIndex = useSelector(
    (state) => state.player.currentSongIndex
  );

  const handlePlay = () => {
    // console.log("played");
    dispatch(play());
  };

  const handlePause = () => {
    dispatch(pause());
  };

  return (
    <div className="h-[270px] w-[200px] max-md:h-[202px] max-md:w-[150px] bg-[#D9C9F2] flex flex-col p-2 rounded-[12px] cursor-pointer text-gray-800 bg-opacity-60 hover:bg-opacity-100 relative group max-xl:ml-3">
      <img
        src={song?.image[2]?.link}
        alt=""
        className="object-cover h-[200px] w-[200px] rounded-lg"
      />

      <div className="absolute flex items-center justify-center h-[200px] w-[185px] ">
        {isPlaying && currentSongIndex === i ? (
          <button
            className="px-2 py-1 text-xl group-hover:flex hidden"
            onClick={handlePause}
          >
            <BsFillPauseCircleFill size={60} color="white" />
          </button>
        ) : (
          <button
            className="px-2 py-1 text-xl group-hover:flex hidden"
            onClick={() => {
              handlePlay();
              dispatch(setCurrentSongIndex(i));
              dispatch(setData(data));
            }}
          >
            <AiFillPlayCircle size={60} color="white" />
          </button>
        )}
      </div>

      {/* Song Name & Artist Name */}
      <div className="w-[90%] text-left mt-1 pl-2">
        <h1 className="truncate text-lg font-[600]">{song?.name}</h1>
        <h3 className="truncate text-[14px]">{song?.primaryArtists}</h3>
      </div>
    </div>
  );
};

export default SongCard;
