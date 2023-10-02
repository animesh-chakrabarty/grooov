import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  // console.log(playlist)

  // console.log(playlist?.songCount)
  // console.log(playlist?.title)

  return (
    <Link>
      <div className="h-[200px] w-[200px] group relative">
        <div className="absolute flex items-center justify-center h-[200px] w-[200px]  ">
          <button className="bg-white opacity-80 px-2 py-1 text-xl group-hover:flex hidden">
            View
          </button>
        </div>
        <img
          src={playlist?.image[2]?.link}
          alt=""
          className="object-contain h-[100%] w-[100%] rounded-lg"
        />
        {/* Song Name & Artist Name
      <div className="w-[170px] text-left mt-2 pl-2">
        <h1 className="truncate text-lg font-[600]">{playlist?.title}</h1>
        <h3 className="truncate text-[14px]">
          SongCount : {playlist?.songCount}
        </h3>
      </div> */}
      </div>
    </Link>
  );
};

export default PlaylistCard;
