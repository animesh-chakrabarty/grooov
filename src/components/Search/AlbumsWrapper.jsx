import React from "react";
import AlbumCardRect from "../AlbumCardRect";

const AlbumsWrapper = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-col xl:items-center  no-scrollbar w-full h-full overflow-auto overflow-y-hidden mb-5">
      <div className="pl-4 pb-4 text-3xl font-[600] ">Albums</div>
      <div className="flex xl:flex-wrap xl:justify-center xl:gap-5 overflow-auto no-scrollbar overflow-y-hidden">
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
