import React from "react";
import AlbumCardRect from "../AlbumCardRect";

const AlbumsWrapper = ({ data }) => {
//   console.log(data);
  return (
    <div className="no-scrollbar w-full h-full overflow-auto overflow-y-hidden mb-5">
      <div className="pl-4 pb-4 text-3xl font-[600] ">Albums</div>
      <div className="flex xl:flex-wrap xl:gap-5 overflow-auto no-scrollbar">
        {data?.map((album) => (
          <div key={album?.id}>
            <AlbumCardRect data={data} album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsWrapper;
