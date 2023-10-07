import React from "react";
import { Link } from "react-router-dom";

const ChartCard = ({ chart }) => {
  // console.log(chart)

  // console.log(chart?.songCount)
  // console.log(chart?.title)

  return (
    <Link>
      <div className="h-[200px] w-[200px] group relative">
        <div className="absolute flex items-center justify-center h-[200px] w-[200px]  ">
          <button className="bg-white opacity-80 px-2 py-1 text-xl group-hover:flex hidden">
            View
          </button>
        </div>
        <img
          src={chart?.image[2]?.link}
          alt=""
          className="object-contain h-[100%] w-[100%] rounded-lg"
        />
        {/* Song Name & Artist Name
      <div className="w-[170px] text-left mt-2 pl-2">
        <h1 className="truncate text-lg font-[600]">{chart?.title}</h1>
        <h3 className="truncate text-[14px]">
          SongCount : {chart?.songCount}
        </h3>
      </div> */}
      </div>
    </Link>
  );
};

export default ChartCard;
