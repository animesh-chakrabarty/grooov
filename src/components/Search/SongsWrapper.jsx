import React from "react";
import SongCard from "../SongCard";

const SongsWrapper = ({ data }) => {
//   console.log(data);
  return (
    <div className="flex flex-col xl:items-center no-scrollbar w-full h-full overflow-auto overflow-y-hidden mb-5 ">
      {/* Title */}
      <div className="pl-4 pb-4 text-3xl font-[600] ">Songs</div>
      {/* Wrapper */}
      <div className="flex xl:flex-wrap xl:justify-center xl:gap-5 overflow-auto no-scrollbar overflow-y-hidden">
        {data?.slice(0,14)?.map((song, i) => (
          <div key={song?.id}>
            <SongCard i={i} data={data} song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsWrapper;
