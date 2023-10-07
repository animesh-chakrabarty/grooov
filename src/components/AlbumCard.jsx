import React from "react";

const AlbumCard = ({ album }) => {
  console.log(album);
  return (
    <div className="bg-[#edeaf3] w-full h-[80px] flex justify-between items-center px-2 text-left overflow-hidden bg-opacity-60 cursor-pointer hover:bg-opacity-100 rounded-xl">
      <img
        src={album?.image[2]?.link}
        alt=""
        className="h-[70px] w-[70px] rounded-xl object-cover"
      />
      <div className="w-[80%] mr-2 overflow-hidden">
        <p className="truncate font-bold text-lg">
          {album?.name || album?.title}
        </p>
        <p className="truncate text-sm flex gap-3">
          {album?.artists[0]?.name}

          {/* {album?.artists?.map((artist) => (
            <p key={artist?.id}>{artist?.name}</p>
          ))} */}
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
