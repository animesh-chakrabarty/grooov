import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";


const SongCard = ({ data, trending, i }) => {
  return (
    <div className="h-[270px] w-[200px] bg-[#D9C9F2] flex flex-col p-2 rounded-[12px] cursor-pointer text-gray-800 bg-opacity-60 hover:bg-opacity-100 relative group">
      <img
        src={trending?.image[2]?.link}
        alt=""
        className="object-cover h-[200px] w-[200px] rounded-lg"
      />
      {trending?.type === "song" ? (
        <div className="absolute flex items-center justify-center h-[200px] w-[185px] ">
          <button className="px-2 py-1 text-xl group-hover:flex hidden">
            <AiFillPlayCircle size={50} color="white" />
          </button>
        </div>
      ) : (
        <div className="absolute flex items-center justify-center h-[200px] w-[185px]">
          <button className="bg-white opacity-80 px-2 py-1 text-xl group-hover:flex hidden">
            View
          </button>
        </div>
      )}

      {/* Song Name & Artist Name */}
      <div className="w-[170px] text-left mt-2 pl-2">
        <h1 className="truncate text-lg font-[600]">{trending?.name}</h1>
        <h3 className="truncate text-[14px]">{trending?.artists[0]?.name}</h3>
      </div>
    </div>
  );
};

export default SongCard;
