import React from "react";

const AlbumCard = ({ album }) => {
  return (
    <div className="bg-[#e1daec] w-full h-[80px] flex gap-4 justify-between items-center px-2 text-left overflow-hidden bg-opacity-60 cursor-pointer hover:bg-opacity-100">
      <img
        src={album?.image[2]?.link}
        alt=""
        className="h-[70px] w-[70px] rounded-xl object-cover"
      />
      <div className="w-[80%] mr-2 overflow-hidden">
        <p className="truncate font-bold text-lg">
          {album?.name || album?.title}
        </p>
        <p className="truncate text-sm">
          {album?.artists[0]?.name} , {album?.artists[1]?.name}
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
