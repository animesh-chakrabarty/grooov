import React from "react";
import SongCard from "../SongCard";

const SongsWrapper = ({ data }) => {
  console.log(data);
  return (
    <div className="no-scrollbar w-full overflow-auto overflow-y-hidden mb-5">
      {/* Title */}
      <div className="pl-4 pb-4">Songs</div>
      {/* Wrapper */}
      <div className="flex xl:flex-wrap xl:gap-4 ">
        {data?.slice(0,12)?.map((song, i) => (
          <div key={song?.id}>
            <SongCard i={i} data={data} song={song} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsWrapper;
